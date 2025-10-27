"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function OutputPage() {
  const [greeting, setGreeting] = useState("...")
  const [currentTime, setCurrentTime] = useState("--:--")
  const [mounted, setMounted] = useState(false)
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null)

  // Marquee controls
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const [marqueeDuration, setMarqueeDuration] = useState(10) // seconds
  const [shouldMarquee, setShouldMarquee] = useState(true)

  const formatTime = (date: Date) =>
    String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0")

  const getTimeBasedGreeting = (hour: number) => {
    if (hour >= 5 && hour < 12) return "Good morning "
    if (hour >= 12 && hour < 17) return "Good afternoon "
    if (hour >= 17 && hour < 21) return "Good evening "
    return "Good night 🌙"
  }

  const updateGreeting = async () => {
    let message = "..."
    const now = new Date()
    const hour = now.getHours()

    try {
      const res = await fetch("/api/message")
      if (res.ok) {
        const json = await res.json()
        if (json?.success && json?.data) {
          message = json.data.message || getTimeBasedGreeting(hour)
          setUploadedLogo(json.data.logo || null)
        } else {
          message = getTimeBasedGreeting(hour)
        }
      } else {
        message = getTimeBasedGreeting(hour)
      }
    } catch (err) {
      console.log("API fetch error:", err)
      message = getTimeBasedGreeting(hour)
    }

    setGreeting(message)
    setCurrentTime("Time: " + formatTime(now))
  }

  // measure text & container to decide speed (px/sec => duration)
  const recalcMarquee = () => {
    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return

    const containerW = container.getBoundingClientRect().width
    const textW = text.getBoundingClientRect().width

    // if text fits, no marquee
    if (textW <= containerW) {
      setShouldMarquee(false)
      return
    }

    setShouldMarquee(true)

    // desired speed in px/sec (adjust if you want slower/faster)
    const speed = 120 // px per second
    // distance from 100% -> -100% ≈ containerW + textW
    const distance = containerW + textW
    const duration = Math.max(6, distance / speed) // minimum 6s so it never zooms
    setMarqueeDuration(duration)
  }

  useEffect(() => {
    setMounted(true)
    updateGreeting()
    const interval = setInterval(updateGreeting, 20000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // recalc when greeting changes or on resize
    recalcMarquee()
  }, [greeting])

  useEffect(() => {
    const onResize = () => recalcMarquee()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
      <Link href="/input">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-gradient-to-tr from-indigo-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/10 to-pink-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="w-full max-w-5xl p-6 md:p-10 relative z-10">
          <div
            className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 flex flex-col justify-center items-center text-center h-[520px] md:h-[580px] relative overflow-hidden"
            ref={containerRef}
          >
            {/* Default Logo (left) */}
            <Image
              src="/electring-wiring-logo.jpg"
              alt="Default Logo"
              width={200}
              height={70}
              className="absolute top-6 left-6 rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
              priority
            />

            {/* Uploaded Logo (right) */}
            {uploadedLogo && (
              <img
                src={uploadedLogo}
                alt="Uploaded Logo"
                width={200}
                height={70}
                className="absolute top-6 right-6 rounded-2xl cursor-pointer"
                style={{ objectFit: "contain", maxWidth: 200, maxHeight: 70 }}
              />
            )}

            {mounted && (
              <h1
                ref={textRef}
                className={`${
                  shouldMarquee ? "animate-marquee" : ""
                } text-4xl md:text-6xl lg:text-8xl font-bold text-white/95 mb-2 leading-tight tracking-wide px-4 whitespace-nowrap hover:[animation-play-state:paused]`}
                style={
                  shouldMarquee
                    ? ({ animationDuration: `${marqueeDuration}s` } as React.CSSProperties)
                    : undefined
                }
                title={greeting}
              >
                {greeting}
              </h1>
            )}

            <p className="absolute bottom-6 right-8 text-xl md:text-2xl text-white/85 font-medium tracking-wide">
              {currentTime}
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: inline-block;
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            white-space: nowrap;
          }
        `}</style>
      </Link>
    </div>
  )
}

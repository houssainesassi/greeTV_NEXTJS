"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const defaultMessages = {
  morning: "Good morning 🌅",
  afternoon: "Good afternoon ☀️",
  evening: "Good evening 🌇",
  night: "Good night 🌙",
}

type Period = keyof typeof defaultMessages

export default function OutputPage() {
  const [greeting, setGreeting] = useState("...")
  const [currentTime, setCurrentTime] = useState("--:--")
  const [mounted, setMounted] = useState(false)

  const getCurrentPeriod = (): Period => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour <= 11) return "morning"
    if (hour >= 12 && hour <= 16) return "afternoon"
    if (hour >= 17 && hour <= 21) return "evening"
    return "night"
  }

  const formatTime = (date: Date) => {
    return String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0")
  }

  const updateGreeting = () => {
    let message = defaultMessages[getCurrentPeriod()]

    // check if override exists
    const overrideRaw = localStorage.getItem("greet_override")
    if (overrideRaw) {
      try {
        const override = JSON.parse(overrideRaw)
        const now = Date.now()
        if (now - override.startTime < override.duration) {
          message = override.message
        } else {
          localStorage.removeItem("greet_override")
        }
      } catch (err) {
        console.log("Error parsing override:", err)
      }
    }

    setGreeting(message)
    setCurrentTime("Time: " + formatTime(new Date()))
  }

  useEffect(() => {
    setMounted(true)
    updateGreeting()
    const interval = setInterval(updateGreeting, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-pink-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-4xl p-10 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/20 flex flex-col justify-center items-center text-center h-[450px] relative overflow-hidden">
          <Link href="/">
            <Image
              src="/electring-wiring-logo.jpg"
              alt="Mediterranean Electric Wiring Logo"
              width={180}
              height={60}
              className="absolute top-6 left-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
            />
          </Link>

          {mounted && (
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white/95 mb-2 leading-tight tracking-wide px-4 animate-marquee whitespace-nowrap">
              {greeting}
            </h1>
          )}
          <p className="absolute bottom-6 right-8 text-xl md:text-2xl text-white/80 opacity-90 font-medium tracking-wide">
            {currentTime}
          </p>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  )
}

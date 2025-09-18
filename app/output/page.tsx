"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const defaultMessages = {
  morning: "Good morning 🌅",
  afternoon: "Good afternoon ",
  evening: "Good evening 🌇",
  night: "Good night 🌙",
}

type Period = keyof typeof defaultMessages

export default function OutputPage() {
  const [greeting, setGreeting] = useState("...")
  const [currentTime, setCurrentTime] = useState("--:--")

  const loadStoredMessages = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("greet_custom")
      console.log("[v0] Raw stored data:", stored)
      if (stored) {
        try {
          const parsedStored = JSON.parse(stored)
          console.log("[v0] Parsed stored messages:", parsedStored)
          return { ...defaultMessages, ...parsedStored }
        } catch (error) {
          console.log("[v0] Error parsing stored messages:", error)
          return defaultMessages
        }
      }
    }
    return defaultMessages
  }

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
    const storedMessages = loadStoredMessages()
    const period = getCurrentPeriod()
    console.log("[v0] Current period:", period)
    console.log("[v0] Available messages:", storedMessages)

    const message = storedMessages[period] || defaultMessages[period]
    console.log("[v0] Selected message:", message)

    setGreeting(message)
    setCurrentTime("Time: " + formatTime(new Date()))
  }

  useEffect(() => {
    updateGreeting()

    // Listen for storage changes from other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "greet_custom") {
        console.log("[v0] Storage changed, updating greeting")
        updateGreeting()
      }
    }

    window.addEventListener("storage", handleStorageChange)
    const interval = setInterval(updateGreeting, 20000) // Update every 20 seconds

    return () => {
      clearInterval(interval)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-4xl p-10 relative">
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/10">
          <Image
            src="/electring-wiring-logo.jpg"
            alt="Mediterranean Electric Wiring Logo"
            width={180}
            height={60}
            className="absolute top-5 left-5 rounded-xl"
          />

          <div className="flex flex-col justify-center items-center text-center h-96 bg-gradient-to-br from-white/5 to-black/20 rounded-xl overflow-hidden relative">
            <div className="w-full overflow-hidden">
              <h1 className="greeting-slide text-4xl md:text-6xl lg:text-8xl font-bold text-slate-200 mb-2 leading-tight tracking-wide px-4">
                {greeting}
              </h1>
            </div>
            <p className="absolute bottom-3 right-4 text-xl md:text-2xl text-slate-300 opacity-90">{currentTime}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

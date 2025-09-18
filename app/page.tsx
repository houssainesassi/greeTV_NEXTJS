"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

const defaultMessages = {
  morning: "Good morning 🌅",
  afternoon: "Good afternoon ☀️",
  evening: "Good evening 🌇",
  night: "Good night 🌙",
}

export default function HomePage() {
  const [customMessage, setCustomMessage] = useState("")
  const [selectedPeriod, setSelectedPeriod] = useState("morning")
  const router = useRouter()
  const { toast } = useToast()

  const loadStoredMessages = () => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("greet_custom") || "{}")
      return { ...defaultMessages, ...stored }
    }
    return defaultMessages
  }

  const saveStoredMessages = (messages: typeof defaultMessages) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("greet_custom", JSON.stringify(messages))
    }
  }

  const handleSave = () => {
    const trimmedMessage = customMessage.trim()
    if (!trimmedMessage) {
      toast({
        title: "Error",
        description: "Please enter a message!",
        variant: "destructive",
      })
      return
    }

    const storedMessages = loadStoredMessages()
    console.log("[v0] Saving message:", trimmedMessage, "for period:", selectedPeriod)

    if (selectedPeriod === "all") {
      storedMessages.morning = trimmedMessage
      storedMessages.afternoon = trimmedMessage
      storedMessages.evening = trimmedMessage
      storedMessages.night = trimmedMessage
    } else {
      storedMessages[selectedPeriod as keyof typeof defaultMessages] = trimmedMessage
    }

    saveStoredMessages(storedMessages)
    console.log("[v0] Messages after save:", storedMessages)
    setCustomMessage("")

    toast({
      title: "Success",
      description: "Saved successfully!",
    })

    // Navigate to output page after a short delay
    setTimeout(() => {
      router.push("/output")
    }, 1000)
  }

  const handleReset = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("greet_custom")
    }
    toast({
      title: "Success",
      description: "All messages cleared!",
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave()
    }
  }

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

          <div className="mt-20 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="customMsg" className="text-slate-200 text-lg">
                Write a message:
              </Label>
              <Input
                id="customMsg"
                type="text"
                placeholder="Type your custom message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-white/5 border-white/20 text-slate-200 placeholder:text-slate-400 text-xl p-6 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-slate-200 text-lg">Select period:</Label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="bg-white/5 border-white/20 text-slate-200 text-xl p-6 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  <SelectItem value="morning">Morning (5:00 - 11:59)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12:00 - 16:59)</SelectItem>
                  <SelectItem value="evening">Evening (17:00 - 21:59)</SelectItem>
                  <SelectItem value="night">Night (22:00 - 4:59)</SelectItem>
                  <SelectItem value="all">Always (overrides all greetings)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleSave}
                className="bg-sky-400 hover:bg-sky-500 text-slate-900 font-semibold text-lg px-6 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Save
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-white/20 text-slate-200 hover:bg-white/10 text-lg px-6 py-4 rounded-xl bg-transparent"
              >
                Clear Saved Greetings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

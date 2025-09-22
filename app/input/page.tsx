"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [customMessage, setCustomMessage] = useState("")
  const [durationHours, setDurationHours] = useState("1")
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null)
  const [securityCode, setSecurityCode] = useState("")

  const router = useRouter()
  const { toast } = useToast()

  const handleSave = async () => {
    const trimmedMessage = customMessage.trim()
    if (!trimmedMessage) {
      toast({
        title: "Error",
        description: "Please enter a message!",
        variant: "destructive",
      })
      return
    }

    if (securityCode.trim() !== "MEW2025") {
      toast({
        title: "Error",
        description: "Invalid security code!",
        variant: "destructive",
      })
      return
    }

    const overrideData = {
      message: trimmedMessage,
      startTime: Date.now(),
      duration: Number(durationHours) * 60 * 60 * 1000,
    }

    try {
      // Save to localStorage
      localStorage.setItem("greet_override", JSON.stringify(overrideData))

      // Call the API
      const response = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmedMessage,
          period_duration: Number(durationHours),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        toast({
          title: "API Error",
          description: result.error || "Could not save to API.",
          variant: "destructive",
        })
        return
      }

      // Success feedback
      toast({
        title: "Success",
        description: "Saved successfully!",
      })

      // Reset form
      setCustomMessage("")
      setSecurityCode("")

      setTimeout(() => {
        router.push("/")
      }, 900)
    } catch (err: any) {
      console.error("Error saving:", err)
      toast({
        title: "Error",
        description: "Could not save the message.",
        variant: "destructive",
      })
    }
  }

  const handleReset = () => {
    localStorage.removeItem("greet_override")
    localStorage.removeItem("uploaded_logo")
    setUploadedLogo(null)
    setCustomMessage("")
    setSecurityCode("")
    toast({
      title: "Success",
      description: "Custom message and logo cleared!",
    })
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64Logo = reader.result as string
        setUploadedLogo(base64Logo)
        localStorage.setItem("uploaded_logo", base64Logo)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-pink-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-4xl p-10 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/20 transition-all duration-700 hover:bg-white/15 hover:shadow-3xl hover:border-white/30">
          <Link href="/">
            <Image
              src="/electring-wiring-logo.jpg"
              alt="Mediterranean Electric Wiring Logo"
              width={180}
              height={60}
              className="absolute top-6 left-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            />
          </Link>

          <div className="mt-24 space-y-8 animate-in fade-in duration-1000">
            {/* Custom Message */}
            <div className="space-y-3">
              <Label htmlFor="customMsg" className="text-white/90 text-lg font-medium tracking-wide">
                Write a message:
              </Label>
              <Input
                id="customMsg"
                type="text"
                placeholder="Type your custom message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 text-xl p-7 rounded-2xl"
              />
            </div>

            {/* Security Code */}
            <div className="space-y-3">
              <Label htmlFor="securityCode" className="text-white/90 text-lg font-medium tracking-wide">
                Security Code:
              </Label>
              <Input
                id="securityCode"
                type="text"
                placeholder="Enter security code"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 text-xl p-7 rounded-2xl"
              />
            </div>

            {/* Duration */}
            <div className="space-y-3">
              <Label className="text-white/90 text-lg font-medium tracking-wide">
                Duration (hours):
              </Label>
              <Input
                type="number"
                min="1"
                max="24"
                value={durationHours}
                onChange={(e) => setDurationHours(e.target.value)}
                className="bg-white/10 border-white/30 text-white text-xl p-7 rounded-2xl"
              />
            </div>

            {/* Upload Logo */}
            <div className="space-y-3">
              <Label className="text-white/90 text-lg font-medium tracking-wide">
                Upload another logo:
              </Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="bg-white/10 border-white/30 text-white text-xl rounded-2xl"
              />
              {uploadedLogo && (
                <div className="mt-4">
                  <img
                    src={uploadedLogo}
                    alt="Uploaded Logo Preview"
                    style={{
                      maxWidth: "180px",
                      maxHeight: "60px",
                      borderRadius: "0.75rem",
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-6 pt-6">
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 font-semibold text-lg px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Save
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/15 hover:border-white/50 text-lg px-8 py-6 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

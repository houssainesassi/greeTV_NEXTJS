// file: app/api/messages/route.ts
import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("👉 GET /api/messages called")
    console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log("SUPABASE_KEY exists:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    const { data, error } = await supabase
      .from("messages")
      .select("message, period_duration")
      .limit(1)

    if (error) {
      console.error("❌ Supabase SELECT error:", error.message)
      throw error
    }

    console.log("✅ Supabase SELECT data:", data)

    if (data && data.length > 0) {
      return NextResponse.json({ success: true, data: data[0] })
    } else {
      return NextResponse.json({ success: true, data: null })
    }
  } catch (err: any) {
    console.error("❌ GET /api/messages error:", err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

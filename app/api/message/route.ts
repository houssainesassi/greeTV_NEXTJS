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
      .select("id, message, period_duration, updated_at")
      .order("updated_at", { ascending: false }) // Always get latest
      .limit(1)

    if (error) {
      console.error("❌ Supabase SELECT error:", error.message)
      throw error
    }

    console.log("✅ Supabase SELECT data:", data)

    return NextResponse.json(
      { success: true, data: data && data.length > 0 ? data[0] : null },
      { headers: { "Cache-Control": "no-store" } } // Disable caching on Vercel
    )
  } catch (err: any) {
    console.error("❌ GET /api/messages error:", err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    console.log("👉 POST /api/messages called")
    const body = await req.json()
    console.log("📥 Request body:", body)

    const { message, period_duration } = body

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Fetch existing row
    const { data: existing, error: fetchError } = await supabase
      .from("messages")
      .select("id")
      .limit(1)

    if (fetchError) throw fetchError

    if (existing && existing.length > 0) {
      // Update existing row
      const { data, error } = await supabase
        .from("messages")
        .update({ message, period_duration, updated_at: new Date() })
        .eq("id", existing[0].id)
        .select()

      if (error) throw error

      return NextResponse.json({ success: true, action: "update", data })
    } else {
      // Insert new row
      const { data: inserted, error: insertError } = await supabase
        .from("messages")
        .insert([{ message, period_duration, updated_at: new Date() }])
        .select()

      if (insertError) throw insertError

      return NextResponse.json({ success: true, action: "insert", data: inserted })
    }
  } catch (err: any) {
    console.error("❌ POST /api/messages error:", err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

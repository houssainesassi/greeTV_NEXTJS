// file: app/api/messages/route.ts
import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    console.log("👉 POST /api/messages called")

    const body = await req.json()
    console.log("📥 Request body:", body)

    const { message, period_duration } = body

    if (!message) {
      console.warn("⚠️ Missing message field")
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    console.log("🔎 Checking existing messages...")
    const { data: existing, error: fetchError } = await supabase
      .from("messages")
      .select("*")

    if (fetchError) {
      console.error("❌ Fetch error:", fetchError.message)
      throw fetchError
    }

    if (existing && existing.length > 0) {
      console.log("📝 Updating row id:", existing[0].id)
      const { data, error } = await supabase
        .from("messages")
        .update({ message, period_duration })
        .eq("id", existing[0].id)
        .select()

      if (error) {
        console.error("❌ Update error:", error.message)
        throw error
      }

      console.log("✅ Updated row:", data)
      return NextResponse.json({ success: true, action: "update", data })
    } else {
      console.log("➕ Inserting new row...")
      const { data: inserted, error: insertError } = await supabase
        .from("messages")
        .insert([{ message, period_duration }])
        .select()

      if (insertError) {
        console.error("❌ Insert error:", insertError.message)
        throw insertError
      }

      console.log("✅ Inserted row:", inserted)
      return NextResponse.json({ success: true, action: "insert", data: inserted })
    }
  } catch (err: any) {
    console.error("❌ POST /api/messages error:", err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

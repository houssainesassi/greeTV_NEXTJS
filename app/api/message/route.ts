// file: app/api/messages/route.ts
import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("messages")
      .select("id, message, period_duration, logo, updated_at") // أضفنا logo
      .order("updated_at", { ascending: false })
      .limit(1)

    if (error) throw error

    return NextResponse.json(
      { success: true, data: data && data.length > 0 ? data[0] : null },
      { headers: { "Cache-Control": "no-store" } }
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { message, period_duration, logo } = body // أضفنا logo

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const { data: existing, error: fetchError } = await supabase
      .from("messages")
      .select("id")
      .limit(1)

    if (fetchError) throw fetchError

    if (existing && existing.length > 0) {
      // تحديث row موجود
      const { data, error } = await supabase
        .from("messages")
        .update({ message, period_duration, logo, updated_at: new Date() }) // أضفنا logo
        .eq("id", existing[0].id)
        .select()

      if (error) throw error
      return NextResponse.json({ success: true, action: "update", data })
    } else {
      // إدراج row جديد
      const { data: inserted, error: insertError } = await supabase
        .from("messages")
        .insert([{ message, period_duration, logo, updated_at: new Date() }]) // أضفنا logo
        .select()

      if (insertError) throw insertError
      return NextResponse.json({ success: true, action: "insert", data: inserted })
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

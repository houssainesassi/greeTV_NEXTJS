// file: app/api/messages/route.ts
import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("👉 GET /api/messages called")

    const { data, error } = await supabase
      .from("messages")
      .select("id, message, period_duration, updated_at")
      .order("updated_at", { ascending: false }) // آخر تحديث أولاً
      .limit(1)

    if (error) throw error

    return NextResponse.json(
      { success: true, data: data && data.length > 0 ? data[0] : null },
      { headers: { "Cache-Control": "no-store" } } // يمنع الكاش على Vercel
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
    const { message, period_duration } = body

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // جلب الصف الموجود (إذا موجود)
    const { data: existing, error: fetchError } = await supabase
      .from("messages")
      .select("id")
      .limit(1)

    if (fetchError) throw fetchError

    if (existing && existing.length > 0) {
      // تحديث الصف الحالي
      const { data, error } = await supabase
        .from("messages")
        .update({ message, period_duration, updated_at: new Date() })
        .eq("id", existing[0].id)
        .select()

      if (error) throw error
      return NextResponse.json({ success: true, action: "update", data })
    } else {
      // إدراج صف جديد
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

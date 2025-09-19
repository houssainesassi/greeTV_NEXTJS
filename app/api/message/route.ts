import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const { message, period, period_duration } = await req.json()

    if (!message || !period) {
      return NextResponse.json({ error: "Message and period are required" }, { status: 400 })
    }

    // نعمل update حسب period
    const { data, error } = await supabase
      .from("messages")
      .update({ message, period_duration })
      .eq("period", period)  // هذي تحدد الرسالة اللي باش نغيّروها
      .select()

    if (error) throw error

    // إذا ما كانتش موجودة، نعمل insert (اختياري)
    if (data.length === 0) {
      const { data: inserted, error: insertError } = await supabase
        .from("messages")
        .insert([{ message, period, period_duration }])
        .select()
      if (insertError) throw insertError
      return NextResponse.json({ success: true, data: inserted })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// file: app/api/messages/route.ts
import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message, period_duration } = await req.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // شوف إذا فما messages موجودة
    const { data: existing, error: fetchError } = await supabase
      .from("messages")
      .select("*")

    if (fetchError) throw fetchError

    if (existing && existing.length > 0) {
      // update أول row (مثال)
      const { data, error } = await supabase
        .from("messages")
        .update({ message, period_duration })
        .eq("id", existing[0].id)
        .select()

      if (error) throw error
      return NextResponse.json({ success: true, data })
    } else {
      // table خالي → insert
      const { data: inserted, error: insertError } = await supabase
        .from("messages")
        .insert([{ message, period_duration }])
        .select()
      if (insertError) throw insertError
      return NextResponse.json({ success: true, data: inserted })
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

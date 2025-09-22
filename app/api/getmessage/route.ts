// file: app/api/messages/route.ts
import { supabase } from "@/lib/supabaseClient"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("messages")
      .select("message, period_duration") // SELECT message, period_duration
      .limit(1)  

    if (error) throw error

    if (data && data.length > 0) {
      return NextResponse.json({ success: true, data: data[0] })
    } else {
      return NextResponse.json({ success: true, data: null })
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

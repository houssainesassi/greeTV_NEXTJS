import { NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabaseClient'

export const POST = async (req: Request) => {
  const body = await req.json()
  const { name, email } = body

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email }])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data }, { status: 200 })
}

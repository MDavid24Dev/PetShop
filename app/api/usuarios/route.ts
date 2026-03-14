// /app/api/usuarios/route.ts

import { supabase } from '@/lib/supabase/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, nombre, apellido, email } = await req.json();

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ id, nombre, apellido, email }]);

  if (error) {
    console.log('Error Supabase:', error);
    return NextResponse.json({ error: error.message }, { status: 422 });
  }

  return NextResponse.json({ data });
}

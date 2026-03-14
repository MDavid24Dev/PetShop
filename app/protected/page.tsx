import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: perfil, error } = await supabase
    .from("Usuarios")
    .select("nombre, apellido, email")
    .eq("id", user.id)
    .single();

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Usuario autenticado</h1>
      <p>Nombre: {perfil.nombre}</p>
      <p>Apellido: {perfil.apellido}</p>
      <p>Email: {perfil.email}</p>
    </div>
  );
}

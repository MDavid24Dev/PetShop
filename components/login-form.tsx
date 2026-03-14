"use client";
import { Mail,Lock,PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader,  CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supaBase = supabase;
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supaBase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/");
      //inicio exitoso
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Ah oh currido un error");
    } finally {
      setIsLoading(false);
    }
  };

  const Registro = () =>{
    router.push("/auth/sign-up");
  }

  return (
    <div className={cn("flex flex-col  min-h-screen justify-center ", className)} {...props}>
      
      <div className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-[#34D399] p-2 rounded-xl shadow-sm ">
            <PawPrint className="w-8 h-8 text-white fill-current" />
          </div>
          <div className="text-3xl font-bold tracking-tight">
            <span className="text-gray-800">Pet</span>
            <span className="text-[#34D399] font-extrabold">Shop</span>
          </div>
        </div>


      <CardHeader>
          <CardTitle className="text-3xl flex justify-center text-[#1F2937] font-extrabold">¡Bienvenido de nuevo!</CardTitle>
          <CardDescription className=" flex justify-center text-[#6B7280]
          ">
            Ingresa tus datos para acceder a tu cuenta.
          </CardDescription>
        </CardHeader>

      <Card className="w-full max-w-md ">
        
        <CardContent className="pt-10 ">
          <form onSubmit={handleLogin}>
            <div className=" flex flex-col gap-6">
              <div className="grid gap-2 ">

                <div className="flex items-center gap-2">
                 <Mail strokeWidth="2" className="text-black"></Mail>
                 <Label htmlFor="email" className="text-black">Correo Electronico</Label>
                </div>

                <Input
                
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  className="border-2 border-black text-black"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
                
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2 ">

                  <Lock strokeWidth="2" className="text-black"></Lock>
                  <Label htmlFor="password" className="text-black">Contraseña</Label>
                  
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[#34D399] hover:text-[#2eb886]"
                  >
                    ¿Olvidastes tu contraseña?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="border-2 border-black text-black"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full bg-[#34D399] hover:bg-[#2eb886] rounded-full" disabled={isLoading}>
                {isLoading ? "Logging in...": "Iniciar Sesion ➡"}                 
              </Button>
            </div>
            <div className=" mt-4 text-center text-sm text-black">
              No tienes una cuenta?  {" "}</div>
              <button className="pt-5 flex justify-center text-center underline-offset-4  w-full text-black" 
               onClick={Registro}>
                Crear cuenta nueva
              </button>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

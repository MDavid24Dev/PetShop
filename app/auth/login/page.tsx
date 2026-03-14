import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    // CONTENEDOR PADRE: Controla el espacio global
    // px-4: Aire para celulares pequeños (320px)
    
    <div className="relative flex min-h-svh w-full items-center justify-end px-4 md:px-20 overflow-hidden bg-[#EBF5F0]">
      
      {/* FONDO: Siempre absoluto para que no estorbe */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/vectorFondo.png" 
          className="w-full h-full object-cover " 
        />
      </div>

      {/* EL FORMULARIO: Solo se preocupa por su propio ancho */}
      <div className="relative z-10 w-full max-w-sm md:max-w-md">
        
        <LoginForm />
        
      </div>
      
    </div>
  );
}
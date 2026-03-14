"use client";

import { useRouter } from "next/navigation";

export function Hero() {
  
  const router = useRouter();

  const irALogin = () => {
    router.push("/auth/login",{scroll:false});
  };

  const irRegistro = () => {
    router.push("/auth/sign-up",{scroll:false});
  };

  return (
    <section className="w-full flex flex-col md:flex-row h-screen overflow:hidden">
      {/*Texto*/}
      <div className="md:w-1/2 flex flex-col  w-full items-center justify-center p-6 bg-[#063a28]">
        <h2 className="text-center text-5xl font-extrabold mb-10 text-black ">
          "Cuidamos a tu <span className="text-[#4ff0bb]"> mejor amigo"</span>
        </h2>

        <p className="text-black-600 mb-6 ">
          Atencion veterinaria para el cuidado de tu mascota
        </p>

        <div className="flex gap-5 ">
          {" "}
          {/* contenedor de hijos botones Padre Caja */}
          <button
            className=" bg-[#0e9e6e] text-white px-6 py-2 rounded"
            onClick={irALogin}
          >
            Ingresa
          </button>
          <button
            className=" bg-[#181a1b] text-white px-6 py-2 rounded"
            onClick={irRegistro}
          >
            Registrate
          </button>
        </div>
      </div>
      {/*cierre de caja en mitad texto y botones */}

      {/*Imagen*/}

      <div className="md:w-3/4 w-full bg-[rgba(5,121,76,0.5)] relative">
        <div className=" flex  absolute justify-center align-center py-8  left-1/3 md:hidden" >
          <h1 className=" Absolute text-3xl">
            Pet
            <span className="font-bold text-[#4ff0bb]">Shop</span>
          </h1>
        </div>
        <img
          src="/perro_gato 1.png"
          className=" relative w-full h-full object-contain "
          alt="perro"
        />
      </div>
    </section>
  );
}

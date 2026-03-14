"use client";

import { PawPrint } from "lucide-react";
import "materialize-css/dist/css/materialize.min.css";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { AlignCenter, PanelBottomDashedIcon } from "lucide-react";

export default function SignUp() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 1️⃣ Registrar en Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    if (!data.user) {
      console.error("Usuario no creado todavía (email no confirmado)");
      return;
    }

    // 2️⃣ Guardar perfil (SIN contraseña)
    const response = await fetch("/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: data.user.id,
        nombre,
        apellido,
        email,
      }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
     {/* w-screen: ocupe todo el ancho del contenido
         h-screen: ocupe todo el largo del contenido

     */}
     <div className="Contenedor h-screen w-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-start p-4">
        {/* objetos del formulario todo afuera*/}

         
       {/*contenedor del formulario */}
      <div className="card bg-white rounded-lg shawdow-xl p-8 w-full max-w-md">
        
        {/*Logo*/}
        <div className="flex justify-center items-center gap-2 mb-8">

          <div className="bg-[#34D399] p-2 rounded-xl shadow-sm ">
            <PawPrint className="w-8 h-8 text-white fill-current" />
          </div>

          <div className="text-3xl font-bold tracking-tight">
            <span className="text-gray-800">Pet</span>
            <span className="text-[#34D399] font-extrabold">Shop</span>
          </div>

        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2"> Registrate Crea tu Cuenta</h2>
         <p className="text-gray-600 mb-6">Completa el formulario para el registro</p>
      
        {/*1️⃣ Apartado de nombre */}
        <div className="Nombre">Nombre Completo:
          <input className="font-semibold" placeholder="Nombres" id="Nombre" type="text" required 
           value={nombre} onChange={ (e) => setNombre(e.target.value)}>
          </input>
         </div>
        
        {/*2️⃣ Apartado de Apellido */}

        <div className="Apellido">Apellidos Completos:
          <input className="font-semibold" id="Apellido" placeholder="Apellidos" type="text" required 
           value={apellido} onChange={(e) => setApellido(e.target.value)}/>
        </div>

        {/*3️⃣ Apartado de Correo */}

        <div className="Correo">Correo Electronico:
          <input className="font-semibold" id="Correo" placeholder="Correo Electronico" type="email" required 
           value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        {/*4️⃣ Apartado de Contraseña */}

        <div className="Contraseña py-2">Contraseña:
          <input className="font-semibold" id="Contraseña" placeholder="Contraseña" type="password" required 
           value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className=" flex  justify-center bg-[#34D399] hover:bg-[#2eb886] rounded-lg">
          <button type="submit" className="py-3 font-bold text-white">
             Registrarse
          </button>
        </div> 



       </div>
     </div>
      



    </form>
  );
}

  {/*
<div className="row">
  <div className="input-field col s12 m6 l6 ">
    <input
      placeholder="Nombre"
      id="Nombre"
      type="text"
      required
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />
    <label htmlFor="Nombre"></label>
  </div>

  <div className="input-field col s12 m6 l6 ">
    <input
      placeholder="Apellido"
      id="Apellido"
      required
      value={apellido}
      onChange={(e) => setApellido(e.target.value)}
    />
    <label htmlFor="Apellido"></label>
  </div>

  <div className="input-field col s12 m6 l12 ">
    <input
      placeholder="Email"
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor="Email"></label>
  </div>

  <div className="input-field col s12 m6 l12 ">
    <input
      type="password"
      id="password"
      required
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <label htmlFor="password"></label>
  </div>

  <div
    className="input-field col s12 m12 l12 "
    style={{
      display: "flex",
      justifyContent: "center",
      paddingTop: "5%",
    }}
  >
    <button type="submit" style={{ color: "White", fontSize: "20px" }}>
      Registrarse
    </button>
  </div>
</div>
*/}



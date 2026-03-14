import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import HomePage from "@/components/HomePage";


import { Inbox, User, Search, PawPrint } from "lucide-react";

//import { Suspense } from "react";

const productos=[];


export default function Home() {

  const productos =
   [
    { id: 1, img:"\perro_gato 1.png ", alt:"camisa", nombre:"Camisa", precio: 20},
    { id: 2, nombre:"Blusa", precio: 45 },
    { id: 3, nombre:"Pantalon", precio: 20},
    { id: 4, nombre:"Medias", precio:12 },
    { id: 5, nombre:"Camisa", precio: 20},
    { id: 6, nombre:"Blusa", precio: 45 },
    { id: 7, nombre:"Pantalon", precio: 20},
    { id: 8, nombre:"Medias", precio:12 },
    { id: 1, nombre:"Camisa", precio: 20},
    { id: 2, nombre:"Blusa", precio: 45 },
    { id: 3, nombre:"Pantalon", precio: 20},
    { id: 4, nombre:"Medias", precio:12 },
    { id: 5, nombre:"Camisa", precio: 20},
    { id: 6, nombre:"Blusa", precio: 45 },
    { id: 7, nombre:"Pantalon", precio: 20},
    { id: 8, nombre:"Medias", precio:12 },
    { id: 1, nombre:"Camisa", precio: 20},
    { id: 2, nombre:"Blusa", precio: 45 },
    { id: 3, nombre:"Pantalon", precio: 20},
    { id: 4, nombre:"Medias", precio:12 },
    { id: 5, nombre:"Camisa", precio: 20},
    { id: 6, nombre:"Blusa", precio: 45 },
    { id: 7, nombre:"Pantalon", precio: 20},
    { id: 8, nombre:"Medias", precio:12 }


   ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-black-600">
      
    {/*Barra de Navegacion contenedor*/}
   <div className="nav w-full flex justify-between ">
        
        {/*Logo*/}
         <div className="Caja-Logo flex items-center m-3">
          <div className="bg-[#34D399] p-2 ml-2 rounded-xl shadow-sm size-[45px] ">
            <PawPrint className="w-8 h-8 text-white fill-current" />
           </div> 
        {/*-------------------------------*/}
            <h1 className="text-3xl ml-2"> Pet
                <span className="font-bold text-[#4ff0bb]">Shop</span>
            </h1>
        </div>

        {/*Barra de Busqueda*/}
        <div className="busqueda items-center p-6 w-[500px] ">
          <div className="relative flex">
            <Search></Search>
            <input type="text" placeholder="Busca Productos para tu mascota" className=" flex-1 w-full border rounded"/>
          </div>
        </div>
        
        {/*Herramientas User*/}
        <div className="herramientas_user flex p-4 space-x-2 items-center  ">
           <Inbox strokeWidth="2" className="" ></Inbox>
           <User strokeWidth="2" className=""></User>
           <button className="flex bg-[#4ff0bb] text-black rounded py-2 px-4  ">Ingresar</button>
        </div>
         
   </div>

   {/*Apartado de busqueda Titulo*/}
    <div className="titulo flex w-full p-1 bg-pink-600 ">
      <h2 className="Nuestros-productos  self-start text-white font-bold text-[20px] w-full ml-3 ">Nuestros Productos</h2>
  
    <div className="caja_busqueda flex justify-start items-center bg-blue-500 w-full p-1 "> 
        <div className="buscador bg-yellow-500 ml-3">
          <Search></Search>
        </div>
        
    </div>
    
   </div>
    <div className="caja_busqueda relative flex justify-between items-center bg-blue-500 w-full p-1 "> 
        
        <div className="buscador ml-3 ">
          <Search className="absolute ml-1 mt-2 pt-1 items-center"></Search>
          <input type="text" placeholder="Buscar" className="bg-red-600 rounded-[0.5rem]  pl-7 p-3" />
        </div>

        <input type="text" placeholder="hola" className="mr-3 bg-yellow-500"/>
        
    </div>

    
    
{/*hacer grid aqui y hacer dos columnas para separar y montar los productos*/}

 <div className="caja-contenido-productos-categoria flex bg-yellow-600 w-full h-full"></div>

      <div className="caja-separadora grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_3fr] gap-4 bg-blue-600 w-full">

      
      <div className="filtros p-4 bg-gray-600"> 
      /*Filtros */
      <div className="filtro">
        <div className="filtro_productos"></div>
        <div className="listado"></div>

      
      </div>
      <div className="aside pt-2 ">
           /* costado izquierdo */  
        <div className="animales">
           /*Animales*/
        </div>


        <div className="categorias">
            /*categoria*/
        </div>

        <div className="precio">
             /*precio*/
        </div>

      </div>
    </div>


    <div className="productos_map  p-4 items-center bg-red-600">
      /* Productos_map */

      <div className="grid grid-cols-3">

        { productos.map(producto =>
        (
          <div key={producto.id} 
            className="border-none p-2 m-4 bg-yellow-600 flex justify-center items-center flex-col overflow-hidden ">
              <img src={producto.img} className=" border-none  h-40 w-40 bg-red-300" alt={producto.alt} />
              <h3>{producto.nombre}
              <p>{producto.precio+" usd $"}</p> 
              </h3>
            </div>
        )
         )
        }
      </div>

    </div>
 

  </div>
  
</main>
  );
 
  


}

{/*
  borrar cache parahacer que corra de nuevo Turbo
rm -rf .next
rm -rf node_modules
rm -rf package-lock.json
npm install

<HomePage/>
      <Hero/>

*/}



export function Productos(){

  return(
  /*Barra de Navegacion */
  <>
      /*Barra de Navegacion */
      <div className="nav">
        <div className="imagen_logo">dd</div>
        <div className="busqueda">dd</div>
        <div className="herramientas_user">fsdd</div>
      </div>

      /*Apartado de busqueda*/
      <h2 className="Nuestros productos"></h2>

      /*Relevancia */
      <div className="filtro">
        <div className="filtro_productos"></div>
        <div className="listado"></div>

      /* costado izquierdo */  
      </div><div className="aside">

        <div className="animales">

        </div>

        <div className="categorias">

        </div>

        <div className="precio">

        </div>

      </div></>
 );
}
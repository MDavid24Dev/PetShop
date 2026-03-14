import { Heart, ShoppingCart, User } from "lucide-react";
import MenuList from "../MenuListaProductos/MenuList";
import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu";

const NavbarHome = () => {

    return (
        <div className="fixed top-0 z-50  w-full hidden sm:flex  items-center justify-between p-5  mx-auto max-w-6xl overflow: hidden">
            <h1 className="text-3xl"> Pet
                <span className="font-bold text-[#4ff0bb]">Shop</span>
            </h1>

            <div className="flex items-center justify-between hidden sm:flex ">
                <NavigationMenu>
                    <MenuList />
                </NavigationMenu>
            </div>

            <div className="flex sm:hidden" >
                <p>Items Menu Mobile</p>
            </div>

            <div className="flex items-center justify-between sm:gap-3">
                {/*icono StrokeWidth grosor linea objeto, cursor-pointer =manita puntero*/}
                <ShoppingCart strokeWidth="2" className="text-white hover:text-yellow-500 cursor-pointer"></ShoppingCart>
                <Heart strokeWidth="2" className="text-white hover:text-red-600 cursor-pointer " ></Heart>
                <User className="text-white hover:text-blue-500 cursor-pointer" strokeWidth={2} />
            </div>

        </div>
    );

}

export default NavbarHome;
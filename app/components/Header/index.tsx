"use client";
import React, { useState } from "react";
import {FiShoppingCart,FiUser} from "react-icons/fi"
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
const greatVibes = Great_Vibes({ subsets: ['latin'] ,weight:"400"})
const routes=[
    {href:"/home",label:"Home"},
    {href:"/products/all",label:"All Products"},
    {href:"/products/new",label:"New Arrivals"},
    {href:"/products/random",label:"Random"},
]
const Header = () => {
    const [open,setOpen]=useState(false)
    const [openCart,setOpenCart]=useState(false)
  return (
    <header className="sticky w-full bg-white text-text text-lg font-bold tracking-wider  shadow-md top-0 left-0 h-28  z-50">

      <div className="bg-text text-background flex justify-between w-full   px-4 py-2 text-sm">
        <div>Test</div>
        <div>Contact Us</div>
      </div>
      <div className="flex justify-between w-full  px-4 py-5 items-center ">
        <button className="h-10  lg:hidden w-[40%] " onClick={e=>setOpen(!open)}>
            <span className="block w-10 m-atuo h-[2px] my-2  bg-black"></span>
            <span className="block w-10 m-atuo h-[2px] my-2  bg-black"></span>
            <span className="block w-10 m-atuo h-[2px] my-2  bg-black"></span>

        </button>
        <nav className={`flex uppercase gap-4 text-sm h-[calc(100vh-7rem)] lg:h-auto  bg-white left-0 flex-col lg:flex-row font-semibold absolute lg:relative top-full w-[200px] ${!open&&"-translate-x-full lg:translate-x-0"} py-8 lg:py-0 lg:w-[40%] transition-all duration-300 px-4 lg:px-0`}>

            {routes.map((route,index) => (
            <Link key={index} href={route.href} >{route.label}</Link>
            ))}

        </nav>
        <div className={`text-3xl text-center flex-grow tracking-widest font-bold  ${greatVibes.className}`}>Ecommerce</div>
        <div className="flex w-[40%] justify-end">
            <div className="flex">
                
            </div>
            <div className="flex text-2xl gap-3">

            <FiUser />
            <button onClick={e=>setOpenCart(!openCart)}>

            <FiShoppingCart />
            </button>
            </div>
            <div className={`absolute top-full right-0 overflow-hidden ${!openCart? "translate-x-full w-0 lg:w-0":"w-full lg:w-1/2"}  transition-all duration-500 h-[calc(100vh-7rem)] bg-white  px-4 py-8`}>
                <h3 className="text-xl font-bold border-b border-[#000] border-opacity-50 py-2 uppercase">Shopping Cart</h3>
                <div className="w-full text-lg font-normal py-8">
                    No products added to cart
                </div>
            </div>
</div>
        </div>
    </header>
  );
};

export default Header;

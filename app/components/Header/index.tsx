"use client";
import React from "react";
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
  return (
    <header className="sticky w-full bg-white text-text text-lg font-bold tracking-wider  shadow-md top-0 left-0 h-24 overflow-hidden z-50">
      <div className="bg-text text-background flex justify-between w-full  px-4 py-2 text-sm">
        <div>Test</div>
        <div>Contact Us</div>
      </div>
      <div className="flex justify-between w-full  px-4 py-4 items-center ">
        <nav className="flex uppercase gap-4 text-sm font-semibold w-[40%]">

            {routes.map((route,index) => (
            <Link key={index} href={route.href} >{route.label}</Link>
            ))}

        </nav>
        <div className={`text-3xl text-center flex-grow tracking-widest font-bold ${greatVibes.className}`}>Ecommerce</div>
        <div className="flex w-[40%] justify-end">
            <div className="flex">
                
            </div>
            <div className="flex text-2xl gap-3">

            <FiUser />
            <FiShoppingCart />
            </div>
</div>
      </div>
    </header>
  );
};

export default Header;

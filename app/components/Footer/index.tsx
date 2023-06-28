import { Great_Vibes } from 'next/font/google'
import React from 'react'
const greatVibes = Great_Vibes({ subsets: ['latin'] ,weight:"400"})

const Footer = () => {
  return (
    <footer className='w-full bg-white text-black py-8 px-4'>
        <div></div>
        <div className={`text-3xl text-center flex-grow tracking-widest font-bold  ${greatVibes.className}`}>Ecommerce</div>


    </footer>
  )
}

export default Footer
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://hdwallpaperim.com/wp-content/uploads/2017/08/24/113233-headphones-music.jpg",
  "https://i.pinimg.com/originals/6b/ec/e1/6bece1c5fb0f9fe95d6a9ace1268bdc7.jpg",
  //   "https://cdn.wallpapersafari.com/27/33/YjgNW1.jpg",
  "https://img1.wallspic.com/crops/4/6/5/4/3/134564/134564-art-love-microphone-ear-tech-1920x1080.jpg",
  "https://content.discogs.com/media/Gear-Listener-Headphones-Banner-1920-x-1080.png",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        if (timer <3) {
          setCurrentImage((prev) => prev + 1);
          setTimer(timer + 1);
        } else {
          setCurrentImage(0);
        setTimer(0);
      }
    }, 5000);
  }, [timer]);

  return (
    <section className="h-[calc(100vh-6rem)] w-full relative overflow-hidden">
      <div className="absolute min-w-full min-h-full inset-0 flex flex-row">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="h-full min-w-[100vw] transition-all duration-500 "
              style={{
                transform: `translateX(${-currentImage * 100}%)`,
              }}
            >
              <Image
                src={image}
                width={1920}
                height={1080}
                alt="headset"
                className="w-screen h-full object-cover "
              />
            </div>
          );
        })}
      </div>
      <div className="bg-[#00000080]  w-full z-10 relative">
        <div className="w-full container  h-[calc(100vh-6rem)] mx-auto px-4 py-8 relative flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-4xl uppercase font-semibold">
              Buy Our Top Products Now
            </h1>
            <button className="px-4 py-3 bg-white text-[#111] rounded border bg-opacity-60 hover:bg-opacity-100 border-white font-semibold tracking-widest transition-colors duration-500 mt-8 border-opacity-60 hover:border-opacity-100">Shop Now</button>
            <button className="px-4 py-3 bg-transparent text-white ml-8 rounded border border-white hover:bg-white hover:text-[#111] font-semibold tracking-widest transition-colors duration-500 mt-8">New Arrivals</button>
          </div>
          <div className="flex flex-row items-center absolute left-4 bottom-8 gap-4 z-10">
            {[...Array(images.length)].map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full group cursor-pointer w-24 ${
                  index === currentImage ? "bg-white" : "bg-[#888]"
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <span className="h-1.5 rounded-full bg-transparent group-hover:bg-white block transition-all duration-200"></span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

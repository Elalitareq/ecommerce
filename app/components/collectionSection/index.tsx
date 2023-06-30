'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const images = [
    "https://cdn.headphonecheck.com/wp-content/uploads/tps_1335_457950_March07515-457950-1920x1080.jpg",
    "https://www.soundguys.com/wp-content/uploads/2020/07/Microsoft-Surface-Headphones-2-5-of-5.jpg",
    "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2020/08/hx330-banner_2480-4.jpg",

]
const CollectionSection = () => {
    const [selectedImage,setSelectedImage]=useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (selectedImage <2) {
              setSelectedImage((prev) => prev + 1);
            } else {
              setSelectedImage(0);
          }
        }, 5000);
      }, [selectedImage]);
    

  return (
    <section className={`h-[700px] w-full bg-cover bg-center transition-all duration-500 relative overflow-hidden `} >
        <div className='absolute min-w-full min-h-full inset-0 flex flex-row'>

 {images.map((image, index) => {
          return (
            <div
              key={index}
              className="h-full min-w-[100vw] transition-all duration-500 "
              style={{
                transform: `translateX(${-selectedImage * 100}%)`,
              }}
            >
              <Image
                src={image}
                width={1920}
                height={1080}
                alt="headset"
                className="w-screen h-full  object-center object-cover  "
              />
            </div>
          );
        })}
        </div>
    </section>
  )
}

export default CollectionSection
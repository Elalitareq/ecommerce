import Image from "next/image";
import React from "react";
const products = [
  {
    id: "1",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "90",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
  {
    id: "2",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "90",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
  {
    id: "3",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "90",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
  {
    id: "4",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "90",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
  {
    id: "5",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "90",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
  {
    id: "6",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "90",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
  {
    id: "7",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "90",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
  {
    id: "8",
    name: "LogiTech G-pro X",
    type: "7.1 Headset",
    price: "100",
    salePrice: "",
    image:
      "https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png",
  },
];
const TopProductSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="w-full flex justify-between">
          <h3 className="text-xl font-semibold tracking-widest uppercase w-full">
            Our Newest Additions
          </h3>
          <button className="px-4 py-2 bg-transparent border border-black hover:bg-white whitespace-nowrap font-semibold rounded">
            View More
          </button>
        </div>
        <div className="w-full grid gap-6 grid-cols-auto-fit my-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="px-2 py-1 sm:px-4 sm:py-3 relative group bg-white rounded text-center flex flex-col items-center leading-3 sm:leading-7 "
            >
              <Image
                src={product.image}
                alt={product.name}
                width="250"
                height="400"
                className="w-[250px] h-[125px] sm:h-[200px] my-1"
              />
              <span className="my-0.5 block font-sans text-gray-500">
                {product.type}
              </span>
              <span className="my-[1px] block font-mono text-sm sm:text-lg font-semibold">
                {product.name}
              </span>
              <span className={`my-[1px] block text-xs sm:text-sm sm:text- font-sans ${product.salePrice&&"line-through "}`}>
                {product.salePrice && `Original Price: ${product.price}$`}&nbsp;
              </span>
              <span className={` my-[1px] block text-xs sm:text-sm font-sans`}>
                {product.salePrice || product.price}$
              </span>
                <div className="lg:absolute text-[9px] my-1 lg:my-0 whitespace-nowrap sm:text-sm inset-0 lg:px-8 lg:opacity-0 lg:bg-[#00000090] lg:group-hover:opacity-100 transition-opacity duration-500 flex lg:flex-col gap-4 justify-center items-center">
                    <button className="px-3 py-2 bg-white/80 hover:bg-white border lg:border-white rounded transition-all duration-300 w-full">View Product</button>
                    <button className="px-3 py-2 bg-black/80 hover:bg-black text-white border border-black/80 rounded transition-all duration-300 w-full">Add To Cart</button>

                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProductSection;

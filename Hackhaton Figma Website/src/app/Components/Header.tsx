"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [brandsCount, setBrandsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);

  useEffect(() => {
    const brandsInterval = setInterval(() => {
      setBrandsCount((prev) => {
        if (prev < 200) {
          return prev + 1;
        }
        clearInterval(brandsInterval);
        return 200; 
      });
    }, 10);

    const productsInterval = setInterval(() => {
      setProductsCount((prev) => {
        if (prev < 2000) {
          return prev + 10;
        }
        clearInterval(productsInterval);
        return 2000; 
      });
    }, 10);

    const customersInterval = setInterval(() => {
      setCustomersCount((prev) => {
        if (prev < 30000) {
          return prev + 100;
        }
        clearInterval(customersInterval);
        return 30000; 
      });
    }, 1);

    return () => {
      clearInterval(brandsInterval);
      clearInterval(productsInterval);
      clearInterval(customersInterval);
    };
  }, []);

  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <h2 className="text-4xl font-extrabold lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <div>
            <Link href="/product"><button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-white px-14 py-4 rounded-full shadow-md hover:shadow-2xl transform hover:scale-105">
              Shop Now
            </button></Link>
          </div>
          <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                {brandsCount}+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                {productsCount}+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                {customersCount}+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </section>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            src="/Big vector.png"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            src="/Small Vector.png"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
          <Image src="/Home.png" alt="Home" width={500} height={500} className="absolute top[-40] left-0" />
        </section>
      </div>
    </header>
  );
};

export default Header;

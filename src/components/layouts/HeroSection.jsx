import Image from "next/image";
import React from "react";

import { FiArrowRightCircle } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-7 mt-5">
      <div className="col-span-3 flex flex-col gap-5 py-10">
        <h1 className="text-5xl font-bold">
          Everything <br/> is better<br/> with a <span className="text-primary">Burger</span>
        </h1>
        <p className="text-xl text-gray-600">
          Burger is the missing piece that makes every day complete, a simple
          yet delicious joy in life
        </p>
        <div className="flex items-center gap-4">
          <button className="flex justify-center items-center gap-2 bg-primary text-white font-bold px-7 py-3 rounded-full">
            ORDER NOW <FiArrowRightCircle />
          </button>
          <button className="flex justify-center items-center gap-2 text-xl text-gray-800 font-bold px-7 py-3">
            Learn more <FiArrowRightCircle />
          </button>
        </div>
      </div>
      <div className="relative col-span-4">
        <Image src={'/burger.png'} layout={'fill'} objectFit={'contain'} alt="burger"/>
      </div>
    </div>
  );
};

export default HeroSection;

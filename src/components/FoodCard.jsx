import Image from "next/image";
import React from "react";

const FoodCard = ({ image, name, title, description, price }) => {
  return (
    <div className="bg-[#c5ab87] rounded-lg px-2 py-5 hover:bg-transparent hover:shadow-black hover:shadow-2xl duration-300">
      <div className="relative">
        <Image src={image} width={250} height={200} alt={name} className="mx-auto"/>
      </div>
      <div className="text-center flex flex-col gap-3 mt-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-md font-semibold text-gray-700">{description}</p>
        <button className="w-full bg-primary text-white rounded-full font-semibold text-xl py-2">Add to card ${price}</button>
      </div>
    </div>
  );
};

export default FoodCard;

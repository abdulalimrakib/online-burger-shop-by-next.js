import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";

const BestSellerSection = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-[209px] h-[265px] left-0 -top-20 -z-10">
          <Image
            src={"/sallad1.png"}
            layout="fill"
            objectFit="contain"
            className=""
          ></Image>
        </div>
        <div className="absolute w-[207px] h-[286px] right-0 -top-20 -z-10">
          <Image
            src={"/sallad2.png"}
            layout={"fill"}
            objectFit={"contain"}
          ></Image>
        </div>
      </div>
      <div className="py-10">
        <SectionTitle subTitle={'Check out'} Title={'Our Best Seller'} />
      </div>
    </div>
  );
};

export default BestSellerSection;

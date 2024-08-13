import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";

const BestSellerSection = () => {
  return (
    <div>
      <div className="absolute w-full left-0 right-0">
        <div className="absolute left-0 -top-20 -z-10">
          <Image
            src={"/sallad1.png"}
            width={209}
            height={265}
            alt="salad"
          ></Image>
        </div>
        <div className="absolute w-[207px] right-0 -top-20 -z-10">
          <Image
            src={"/sallad2.png"}
            width={207}
            height={286}
            alt="salad"
          ></Image>
        </div>
      </div>
      <div className="py-10">
        <SectionTitle subTitle={"Check out"} Title={"Our Best Seller"} />
      </div>
    </div>
  );
};

export default BestSellerSection;

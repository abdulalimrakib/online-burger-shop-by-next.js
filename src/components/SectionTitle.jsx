import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ subTitle, Title, className }) => {
  return (
    <div className={cn("flex flex-col justify-center items-center", className)}>
      <h3 className="text-2xl font-bold text-gray-700">{subTitle}</h3>
      <h2 className="text-4xl font-bold italic text-primary">{Title}</h2>
    </div>
  );
};

export default SectionTitle;

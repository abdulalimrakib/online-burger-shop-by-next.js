import { cn } from "../lib/utils";
import React from "react";

const MaxWidthWrapper = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-2.5 md:px-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

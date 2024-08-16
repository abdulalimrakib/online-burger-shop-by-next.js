import React from "react";
import SectionTitle from "../SectionTitle";

import { MdCall } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="my-6">
      <div>
        <SectionTitle subTitle={"Don't hesitate"} Title={"Contact us"} />
      </div>
      <div className="text-gray-600 underline text-4xl font-bold py-5 flex justify-center items-center gap-5">
        <span className="relative mt-3">
          <MdCall  className="text-5xl"/>
        </span>
        <h2 className="underline">+46 738 123 123</h2>
      </div>
    </div>
  );
};

export default ContactUs;

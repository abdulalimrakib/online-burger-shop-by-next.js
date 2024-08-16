import React from "react";
import SectionTitle from "../SectionTitle";

const AboutUs = () => {
  return (
    <div>
      <div>
        <SectionTitle subTitle={"Our Story"} Title={"About us"} />
      </div>
      <div className="flex flex-col gap-5 text-gray-700 text-xl max-w-xl text-center mx-auto py-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima
          odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos
          suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis
          quam rem!
        </p>
        <p>
          At consectetur delectus ducimus est facere iure molestias obcaecati
          quaerat vitae voluptate? Aspernatur dolor explicabo iste minus
          molestiae pariatur provident quibusdam saepe?
        </p>
        <p>
          Laborum molestias neque nulla obcaecati odio quia quod reprehenderit
          sit vitae voluptates? Eos, tenetur.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

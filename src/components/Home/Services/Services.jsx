import React from "react";
import { CardHoverEffectDemo } from "@/app/assets/cardhover";
import { Divider } from "@nextui-org/react";

const Services = () => {
  return (
    <div className="pt-32 bg-gradient-to-b from-green-800 to-white">
      <div>
        <div className="md:ml-20 md:mr-20">
          <h1 className="text-4xl p-8 font-bold text-center">
            {" "}
            What I do
          </h1>
          <Divider />
        </div>
      </div>
      <div>
        <CardHoverEffectDemo></CardHoverEffectDemo>
      </div>
    </div>
  );
};

export default Services;

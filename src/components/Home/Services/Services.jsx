"use client"

import React, { useEffect } from "react";
import { CardHoverEffectDemo } from "@/app/assets/cardhover";
import { Divider } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);


  return (
    <div className="pt-32 pb-32 bg-gradient-to-b from-green-800 to-white">
      <div>
        <div className="md:ml-20 md:mr-20">
          <h1 data-aos="zoom-in" className="text-4xl p-8 font-bold text-center"> What I do</h1>
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

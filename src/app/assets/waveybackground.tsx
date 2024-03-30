"use client";
import React, { useEffect } from "react";
import { WavyBackground } from "../../components/ui/wavy-background";
import AOS from "aos";
import "aos/dist/aos.css";

export function WavyBackgroundDemo() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);


  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p data-aos="fade-down" className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        INTEGRATE PAYMENT GATEWAY
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Integrate digital payment system collaborate with Nagad, Paypal, Bkash, Stripe, SSL Commerze etc
      </p>
    </WavyBackground>
  );
}

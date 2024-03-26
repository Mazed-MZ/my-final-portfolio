"use client";

import { MeteorsDemo } from "@/app/assets/meteroeffects";
import { TextGenerateEffectDemo } from "@/app/assets/textfadeeffect";
import Image from "next/image";
import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
const image1 =
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/945e7c114650307.655e05ce0c225.png";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <Parallax>
        <div className="md:ml-80">
          <div className="md:grid md:grid-cols-2 md:gap-2">
            <div className="md:pt-28 p-8">
              <MeteorsDemo></MeteorsDemo>
              <h1 className="text-4xl text-cyan-300 pb-2">About me</h1>
              <TextGenerateEffectDemo></TextGenerateEffectDemo>
            </div>
            <div data-aos="fade-left" className="pl-12 md:pl-0">
              <Image
                src="https://i.ibb.co/V0yThSB/DSC-0216-removebg-preview.png"
                alt="mazed-mohammed"
                width="400"
                height="450"
              />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
"use client"

import { React3DPin } from "@/app/assets/React3DPin";
import { Tailwind3DPin } from "@/app/assets/Tailwind3DPin";
import { Next3DPin } from "@/app/assets/Next3DPin";
import { Gsap3DPin } from "@/app/assets/Gsap3DPin";
import { TypeScript3DPin } from "@/app/assets/TypeScript3DPin";
import { FramerMotion3DPin } from "@/app/assets/FramerMotion3DPin";
import { SmoothScroll3DPin } from "@/app/assets/SmoothScroll3DPin";
import { Aceternity3DPin } from "@/app/assets/Aceternity3DPin";
import { BackgroundGradientAnimationDemo } from "@/app/assets/gradientbackground";
import { Divider } from "@nextui-org/react";
import React from "react";
import { Parallax3DPin } from "@/app/assets/parallax3DPin";

const Frontend = () => {
  return (
    <div>
      <BackgroundGradientAnimationDemo></BackgroundGradientAnimationDemo>
      <div>
        <div className="md:ml-20 md:mr-20">
          <h1 className="text-4xl p-8 font-bold text-center">
            {" "}
            Unlock Innovation: Latest Technology I Used
          </h1>
          <Divider />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3">
        <React3DPin></React3DPin>
        <Tailwind3DPin></Tailwind3DPin>
        <Next3DPin></Next3DPin>
        <Gsap3DPin></Gsap3DPin>
        <Parallax3DPin></Parallax3DPin>
        <FramerMotion3DPin></FramerMotion3DPin>
        <TypeScript3DPin></TypeScript3DPin>
        <Aceternity3DPin></Aceternity3DPin>
        <SmoothScroll3DPin></SmoothScroll3DPin>
      </div>
    </div>
  );
};

export default Frontend;

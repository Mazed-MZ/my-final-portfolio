"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../components/ui/images-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export function ImagesSliderDemo() {
  const images = [
    "https://i.ibb.co/KbsJtNs/DSC-0234-01.jpg",
    "https://i.ibb.co/vQNHrMS/DSC-0221.jpg",
    "https://i.ibb.co/r6ZDLYr/profile-pic-4.jpg",
  ];
  return (
    <ImagesSlider className="h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 5,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="xl"
            style={{ color: "#b6bab5" }}
          />{" "}
          <br />
          Every smile is not a meaning of happiness <br /> But happiness is hidden <br />
          inside in your smile. <br /> If you will find it,, <br /> you are the
          happiest person in the world.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}

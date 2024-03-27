import React, { useEffect } from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../../components/ui/Spotlight";
import { TypewriterEffectSmoothDemo } from "./typewrittereffect";
import { InfiniteMovingCardsDemo } from "./infinitycard";
import Aos from "aos";
import "aos/dist/aos.css";

export function SpotlightPreview() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.init({ offset: 100 });
  }, []);

  return (
    <div className="h-[30rem] md:h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10  w-full pt-28 md:pt-56">
        <h1
          data-aos="fade-down-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-4xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-tr from-white to-neutral-800 bg-opacity-50"
        >
          MAZED MOHAMMED
        </h1>
        <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      </div>
    </div>
  );
}

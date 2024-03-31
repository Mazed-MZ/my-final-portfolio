import React, { useEffect } from "react";
import { Divider } from "@nextui-org/react";
import { TabsDemo } from "@/app/assets/tabs";
import AccordingCollaps from "./AccordingCollaps";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="md:pl-48 md:pr-48 pb-28 md:pt bg-gradient-to-b from-green-800 to-black">
      <div>
        <div className="md:ml-20 md:mr-20">
          <h1 data-aos="zoom-in" className="text-4xl p-8 font-bold text-center">
            {" "}
            My Technical Skills
          </h1>
          <Divider />
        </div>
      </div>

      {/* ------->> Desktop Version <<------- */}
      <div data-aos="fade-up" className="hidden md:block">
        <TabsDemo></TabsDemo>
      </div>

      {/* ------->> Mobile Version <<------- */}
      <div className="md:hidden">
        <AccordingCollaps></AccordingCollaps>
      </div>
    </div>
  );
}

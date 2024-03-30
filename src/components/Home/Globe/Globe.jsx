import { GlobeDemo } from "@/app/assets/globe";
import { MacbookScrollDemo } from "@/app/assets/macbookscroll";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Globe = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="pt-32 bg-black">
      <div className="md:grid md:grid-cols-2">
        <div data-aos="fade-right" className="hidden md:block md:ml-48">
          <Image
            src={
              "https://i.ibb.co/Yy1SwLn/IMG-20240307-130833-735-removebg-preview.png"
            }
            alt="mazed"
            height={600}
            width={600}
          />
        </div>
        <div>
          <GlobeDemo></GlobeDemo>
        </div>
      </div>
      <MacbookScrollDemo></MacbookScrollDemo>
    </div>
  );
};

export default Globe;

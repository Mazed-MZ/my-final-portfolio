import { GlobeDemo } from "@/app/assets/globe";
import Image from "next/image";
import React from "react";

const Globe = () => {
  return (
    <div className="pt-32 bg-gradient-to-b from-black to-green-800">
      <div className="md:grid md:grid-cols-2">
        <div className="hidden md:block md:ml-48">
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
    </div>
  );
};

export default Globe;

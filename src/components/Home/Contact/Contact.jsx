"use client";

import React from "react";
import { Divider } from "@nextui-org/react";
import { LampDemo } from "@/app/assets/lampdemo";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="md:ml-20 md:mr-20">
          <h1 className="text-4xl p-8 font-bold text-center">  </h1>
          <Divider />
        </div>
      </div>
      <div>
        <LampDemo></LampDemo>
      </div>
    </div>
  );
};

export default Contact;

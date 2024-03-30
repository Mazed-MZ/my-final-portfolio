"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { SignupFormDemo } from "./signupform";
import { FbQR } from "./FbQR";
import { Divider } from "@nextui-org/react";
import { InstaQR } from "./InstaQR";
import { LinkedinQR } from "./LinkedinQR";
import { GithubQR } from "./GithubQR";

export function LampDemo() {

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
      >
        <SignupFormDemo></SignupFormDemo>
      </motion.h1>
      <div>
        <div className="md:ml-20 md:mr-20 mt-12">
          <h1 className="md:text-6xl text-4xl p-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-white to-neutral-800">Scan QR on Mobile <br /> To Reach Out My Social Media Presence</h1>
          <Divider />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-28">
        <FbQR></FbQR>
        <InstaQR></InstaQR>
        <LinkedinQR></LinkedinQR>
        <GithubQR></GithubQR>
      </div>
    </LampContainer>
  );
}

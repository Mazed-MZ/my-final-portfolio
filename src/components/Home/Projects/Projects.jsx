"use client";
import React from "react";
import { HeroParallaxDemo } from "../../../app/assets/heroparallax";
import { DoctorInsight } from "@/app/assets/DoctorInsight";
import { Divider } from "@nextui-org/react";
import { BistroBoss } from "@/app/assets/BistroBoss";
import { PandaEcommerce } from "@/app/assets/PandaEcommerce";

const Projects = () => {
  return (
    <div>
      <div className="hidden md:block">
        <HeroParallaxDemo></HeroParallaxDemo>
      </div>
      <div className="md:hidden">
        <div>
          <div className="md:ml-20 md:mr-20">
            <h1 className="text-4xl p-8 font-bold text-center">
              {" "}
              My Projects
            </h1>
            <Divider />
          </div>
        </div>
        <DoctorInsight></DoctorInsight>
        <BistroBoss></BistroBoss>
        <PandaEcommerce></PandaEcommerce>
      </div>
    </div>
  );
};

export default Projects;

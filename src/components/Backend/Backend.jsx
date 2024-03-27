"use client"

import { Node3DPin } from "@/app/assets/Node3DPin";
import { Express3DPin } from "@/app/assets/Express3DPin";
import { Divider } from "@nextui-org/react";
import React from "react";
import { AuroraBackgroundDemo } from "@/app/assets/aurorabg";
import { Mongo3DPin } from "@/app/assets/Mongo3DPin";

const Backend = () => {
  return (
    <div>
      <AuroraBackgroundDemo></AuroraBackgroundDemo>
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
        <Node3DPin></Node3DPin>
        <Express3DPin></Express3DPin>
        <Mongo3DPin></Mongo3DPin>
      </div>
    </div>
  );
};

export default Backend;

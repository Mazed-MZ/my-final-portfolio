"use client";

import { SSL3DPin } from "../../app/assets/SslCommerz3DPin";
import { Divider } from "@nextui-org/react";
import React from "react";
import { WavyBackgroundDemo } from "@/app/assets/waveybackground";
import { Bkash3DPin } from "@/app/assets/Bkash3DPin";
import { Nagad3DPin } from "@/app/assets/Nagad3DPin";
import { Stripe3DPin } from "@/app/assets/Stripe3DPin";
import { Paypal3DPin } from "@/app/assets/Paypal3DPin";
import Footer from "antd/es/layout/layout";

const Payment = () => {
  return (
    <div>
      <WavyBackgroundDemo></WavyBackgroundDemo>
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
        <SSL3DPin></SSL3DPin>
        <Bkash3DPin></Bkash3DPin>
        <Nagad3DPin></Nagad3DPin>
        <Stripe3DPin></Stripe3DPin>
        <Paypal3DPin></Paypal3DPin>
      </div>
      <Footer className="text-center font-extralight bg-gradient-to-r from-green-800 via-black via-50% to-emerald-500 p-3">
        <p className="font-bold text-center italic bg-clip-text text-transparent bg-gradient-to-tr from-emerald-500 to-neutral-500">MZ Official ©{new Date().getFullYear()} Created by MAZED MOHAMMED</p>
      </Footer>
    </div>
  );
};

export default Payment;

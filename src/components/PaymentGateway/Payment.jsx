"use client";

import { SSL3DPin } from "../../app/assets/SslCommerz3DPin";
import { Divider } from "@nextui-org/react";
import React from "react";
import { WavyBackgroundDemo } from "@/app/assets/waveybackground";
import { Bkash3DPin } from "@/app/assets/Bkash3DPin";
import { Nagad3DPin } from "@/app/assets/Nagad3DPin";
import { Stripe3DPin } from "@/app/assets/Stripe3DPin";
import { Paypal3DPin } from "@/app/assets/Paypal3DPin";

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
    </div>
  );
};

export default Payment;

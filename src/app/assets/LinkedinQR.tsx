"use client";
import React from "react";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { QRCode } from "antd";

export function LinkedinQR() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 dark:bg-zinc-900">
        <div>
          <QRCode
            errorLevel="H"
            value="https://www.linkedin.com/in/mazed-mz/"
            icon="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/rdp6fcqdcvqqcqn3jz72"
            color="#ffffff"
            bgColor=""
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}
"use client";
import React from "react";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { QRCode } from "antd";

export function FbQR() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 dark:bg-zinc-900">
        <div>
          <QRCode
            errorLevel="H"
            value="https://www.facebook.com/mazed.mz/"
            icon="https://png.pngtree.com/element_our/sm/20180509/sm_5af2960e13ef6.jpg"
            color="#ffffff"
            bgColor=""
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}

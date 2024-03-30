"use client";
import React from "react";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { QRCode } from "antd";

export function InstaQR() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 dark:bg-zinc-900">
        <div>
          <QRCode
            errorLevel="H"
            value="https://www.instagram.com/mazed_mz/"
            icon="https://icones.pro/wp-content/uploads/2021/02/instagram-logo-icone4.png"
            color="#ffffff"
            bgColor=""
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}
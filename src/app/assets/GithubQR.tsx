"use client";
import React from "react";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { QRCode } from "antd";

export function GithubQR() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 dark:bg-zinc-900">
        <div>
          <QRCode
            errorLevel="H"
            value="https://github.com/Mazed-MZ"
            icon="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
            color="#ffffff"
            bgColor=""
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}

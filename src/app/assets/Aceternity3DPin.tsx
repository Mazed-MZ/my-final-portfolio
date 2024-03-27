"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

export function Aceternity3DPin() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Aceternity Ui"
        href="https://creativebits.org/wp-content/uploads/2023/07/8mx2wdq04h271.png"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            ACETERNITY UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Copy paste the most trending components and use them in your
              websites without having to worry about styling and animations.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fcloudinary_bkp%2Fstars_sxle3d.png&w=1920&q=75')] bg-cover" />
        </div>
      </PinContainer>
    </div>
  );
}

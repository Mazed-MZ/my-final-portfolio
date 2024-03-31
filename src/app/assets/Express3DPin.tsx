"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

export function Express3DPin() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Express JS"
        href="https://creativebits.org/wp-content/uploads/2023/07/8mx2wdq04h271.png"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            EXPRESS JS
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Express.js is the most popular web framework for Node.js
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg')] bg-cover" />
        </div>
      </PinContainer>
    </div>
  );
}

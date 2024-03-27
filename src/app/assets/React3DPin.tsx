"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

export function React3DPin() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer
        title="React"
        href="https://creativebits.org/wp-content/uploads/2023/07/8mx2wdq04h271.png"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            REACT
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              The library of web user interfaces from components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-[url('https://i.pinimg.com/originals/07/aa/1a/07aa1ab70e52504650e4a4f3f922ce29.gif')] bg-cover" />
        </div>
      </PinContainer>
    </div>
  );
}

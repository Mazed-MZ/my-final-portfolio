"use client";

import { animatePageIn } from "@/components/ui/transition";
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (

    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-[url('https://i.ibb.co/bghN49d/transitionimg-8-jpg.jpg')] z-40 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-[url('https://i.ibb.co/1mR4mLB/transitionimg-9-jpeg.jpg')] z-40 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-[url('https://i.ibb.co/sJMHqrx/IMG-hjkh.jpg')] z-40 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-[url('https://i.ibb.co/Vm8xPC9/transitionimg-3.jpg')] z-40 fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  );
}

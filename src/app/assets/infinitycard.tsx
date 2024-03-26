"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[5rem] md:h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "Front-end Web Developer",
  },
  {
    title: "Freelancer",
  },
  {
    title: "SEO Expert",
  },
  {
    title: "MERN Stack Developer",
  },
];

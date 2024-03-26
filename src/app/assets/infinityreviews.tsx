"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-reviews";

export function InfiniteMovingReviewssDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
    quote:
      "Very prompt. Clean work. And decent results. :) Very happy.",
    name: "Karansuritalwar",
    title: "India",
  },
  {
    quote:
      "Happy to see your site loading less than 6s and GTmetrix A (100%). PageSpeed Score (96%) mazedmohammed is efficient, gathered all my needs and requirements, then delivered the assignment early and my website has been sped up drastically. Always recommended Regards",
    name: "Afreen Akter",
    title: "United Arab Emirates",
  },
  {
    quote: "Very Clean work. I'm satisfied",
    name: "Premsolanki",
    title: "India",
  },
  {
    quote:
      "Great to work with, very efficient.",
    name: "Marcomtt",
    title: "Italy",
  },
  {
    quote:
      "collaborare con lui è davvero interessante.",
    name: "Sergiomancuso",
    title: "Italy",
  },
];

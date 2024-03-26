"use client";
import React from "react";
import { HeroParallax } from "../../components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Bistro Boss Restaurant",
    link: "https://wonderful-chebakia-e85023.netlify.app/",
    thumbnail:
      "https://i.ibb.co/27fyFK9/Screenshot-4.png",
  },

  {
    title: "Panda E-commerce",
    link: "https://mazed-mz.github.io/panda-ecommerce-site/",
    thumbnail:
      "https://i.ibb.co/zsckQpB/Screenshot-7.png",
  },
  {
    title: "Doctor Insight",
    link: "https://tubular-daffodil-b5a981.netlify.app/",
    thumbnail:
      "https://i.ibb.co/PwyPBmR/Screenshot-5-1.png",
  },
  {
    title: "Fancy Slider",
    link: "https://mazed-mz.github.io/fancy-slider/",
    thumbnail:
      "https://i.ibb.co/hZQGRfd/Screenshot-6.png",
  },
];

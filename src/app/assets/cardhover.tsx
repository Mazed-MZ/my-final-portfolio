import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Frontend Development",
    description:
      "Technology: React, HTML, CSS, JavaScript, Tailwind CSS, Next JS, Framer Motion, Parallax, GSAP, TypeScript",
    link: "frontend",
  },
  {
    title: "Integrate Payment Gateway",
    description:
      "Technology: SSL Commerze, Bkash, Nagad, Stripe, Paypal",
    link: "https://netflix.com",
  },
  {
    title: "Secured User Authentication",
    description:
      "Technology: Firebase, JSON Web Token, Regular Expression",
    link: "https://google.com",
  },
  {
    title: "Backend Development",
    description:
      "Technology: Node JS, Express JS, Cors, Mongo DB",
    link: "https://meta.com",
  },
  {
    title: "Build E-Commerce Website",
    description:
      "Frontend and Backend technologies are used. Build secured admin panal and shopping cart management",
    link: "https://amazon.com",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Technology: Keyword research, Google Trends, Google Analytics, Ahrefs, Uber Suggest",
    link: "https://microsoft.com",
  },
];

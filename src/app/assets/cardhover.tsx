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
    link: "payment",
  },
  {
    title: "Secured User Authentication",
    description:
      "Technology: Firebase, JSON Web Token, Regular Expression",
    link: "authsecure",
  },
  {
    title: "Backend Development",
    description:
      "Technology: Node JS, Express JS, Cors, Mongo DB",
    link: "backend",
  },
  {
    title: "Build E-Commerce Website",
    description:
      "Frontend and Backend technologies are used. Build secured admin panal and shopping cart management. (Frontend and Backend technologies are used here)",
    link: "frontend",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Technology: Keyword research, Google Trends, Google Analytics, Ahrefs, Uber Suggest. (Contact with me for details)",
    link: "contact",
  },
];

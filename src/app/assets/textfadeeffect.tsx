"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `This is Mazed Mohammed, a dynamic Frontend Web Developer, and Freelancer with a robust skill set that includes HTML5, CSS, JavaScript, C Programming, Fortran, React JS, Mongo DB, Firebase, Tailwind CSS, Node JS, React Native, Bootstrap, and proficiency in problem-solving on platforms like LeetCode, CodeForce. I specialize in crafting engaging and responsive user interfaces. With a keen eye for detail and a commitment to staying at the forefront of new and updated technology, I consistently deliver innovative and user-centric solutions, making a mark in the ever-evolving world of web development.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

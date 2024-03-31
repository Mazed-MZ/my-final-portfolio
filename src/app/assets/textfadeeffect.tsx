"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `
This is Mazed Mohammed, an innovative Frontend Web Developer and Freelancer, renowned for my dynamic approach and versatile skill set. With a keen eye for the latest technologies and a knack for mastering cutting-edge frameworks and libraries, I try to bring a fresh perspective to every project. With over 3 years of freelancing experience under my belt, I have solidified my reputation as a developer in this field, boasting an impressive 5% world marketplace domination rate. Additionally, I have extensive expertise in the field of SEO, further enhancing my ability to deliver comprehensive solutions for clients.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

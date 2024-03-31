"use client";

import React from "react";
import { Accordion, AccordionItem, Progress } from "@nextui-org/react";

export default function App() {

  return (
    <Accordion variant="splitted">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Language Proficiency"
      >
        <div className="p-5">
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Bangla"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Hindi"
              value={60}
              showValueLabel={true}
            />
          </div>
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="English"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Urdu"
              value={50}
              showValueLabel={true}
            />
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="2" aria-label="Accordion 2" title="Software">
        <div className="p-5">
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Visual Studio Code"
              value={90}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="MS Word"
              value={70}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="MS Excel"
              value={50}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="MS Powerpoint"
              value={90}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Adobe Photoshop"
              value={85}
              showValueLabel={true}
            />
          </div>
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Adobe Illustrator"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Notion"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Filmora"
              value={85}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Camtasia"
              value={75}
              showValueLabel={true}
            />
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Frontend Development"
      >
        <div className="p-5">
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="HTML"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="CSS"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="JavaScript"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Tailwind CSS"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="React"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Next JS"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Stripe"
              value={60}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Firebase"
              value={80}
              showValueLabel={true}
            />
          </div>
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="TypeScript"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Bootstrap"
              value={100}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Framer Motion"
              value={60}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Parallax"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="GSAP"
              value={50}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="SSLCommerze"
              value={60}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="C Program, Fortran, Mathematica"
              value={80}
              showValueLabel={true}
            />
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Backend Development"
      >
        <div className="p-5">
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Node JS"
              value={90}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Mongo DB"
              value={80}
              showValueLabel={true}
            />
          </div>
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Express"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="JSON Web Token"
              value={50}
              showValueLabel={true}
            />
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="5" aria-label="Accordion 5" title="Digital Marketing">
        <div className="p-5">
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Facebook Marketing"
              value={90}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Search Engine Optimization"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Freelancing"
              value={80}
              showValueLabel={true}
            />
          </div>
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Chatbot Marketing"
              value={80}
              showValueLabel={true}
            />
          </div>
        </div>
      </AccordionItem>

      <AccordionItem key="6" aria-label="Accordion 6" title="Creative Skills">
        <div className="p-5">
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Github"
              value={70}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Figma"
              value={60}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Canva"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Google Analytics"
              value={60}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Google Trends"
              value={80}
              showValueLabel={true}
            />
          </div>
          <div>
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Google Chrome Extention"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="ChatGpt"
              value={80}
              showValueLabel={true}
            />
            <Progress
              size="sm"
              radius="sm"
              classNames={{
                base: "max-w-md mt-8",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
              label="Typing"
              value={80}
              showValueLabel={true}
            />
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

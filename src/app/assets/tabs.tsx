"use client";

import { Tabs } from "../../components/ui/tabs";
import { Progress } from "@nextui-org/react";

export function TabsDemo() {
  const tabs = [
    {
      title: "Language Proficiency",
      value: "Language",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-green-800">
          <p>Language Proficiency</p>
          <Language />
        </div>
      ),
    },
    {
      title: "Software",
      value: "Software",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-green-800">
          <p>Software</p>
          <Software />
        </div>
      ),
    },
    {
      title: "Frontend Development",
      value: "Frontend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-green-800">
          <p>Frontend Development</p>
          <Frontend />
        </div>
      ),
    },
    {
      title: "Backend Development",
      value: "Backend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-green-800">
          <p>Backend Development</p>
          <Backend />
        </div>
      ),
    },
    {
      title: "Digital Marketing",
      value: "Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-green-800">
          <p>Digital Marketing</p>
          <Marketing />
        </div>
      ),
    },
    {
      title: "Creative Skills",
      value: "Creative",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-green-800">
          <p>Creative Skills</p>
          <Creative/>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5">
      <Tabs tabs={tabs} />
    </div>
  );
}

const Language = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-16 md:mb-12 mt-12">
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
              base: "max-w-md",
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
    </div>
  );
};

const Software = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-16 md:mb-12 mt-12">
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
              base: "max-w-md",
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
    </div>
  );
};

const Frontend = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-5 md:mb-12 mt-12">
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
              base: "max-w-md",
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
    </div>
  );
};

const Backend = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-16 md:mb-12 mt-12">
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
              base: "max-w-md",
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
    </div>
  );
};

const Marketing = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-16 md:mb-12 mt-12">
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
              base: "max-w-md",
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
    </div>
  );
};

const Creative = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-16 md:mb-12 mt-12">
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
              base: "max-w-md",
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
    </div>
  );
};

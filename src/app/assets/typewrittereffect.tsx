"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

//Until the last sunset, maybe survive the game or checkmate.
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Until",
      className: "text-slate-600 dark:text-slate-600",
    },
    {
      text: "the",
      className: "text-slate-600 dark:text-slate-600",
    },
    {
      text: "last",
      className: "text-slate-600 dark:text-slate-500",
    },
    {
      text: "sunset,",
      className: "text-slate-600 dark:text-slate-400",
    },
    {
      text: "either",
      className: "text-slate-600 dark:text-slate-300",
    },
    {
      text: "survive",
      className: "text-slate-600 dark:text-slate-400",
    },
    {
      text: "the",
      className: "text-slate-600 dark:text-slate-500",
    },
    {
      text: "game",
      className: "text-slate-600 dark:text-slate-600",
    },
    {
      text: "or",
      className: "text-slate-600 dark:text-slate-600",
    },
    {
      text: "checkmate.",
      className: "text-slate-600 dark:text-slate-600",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[8rem] md:h-[15rem]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

import React from "react";
import { Meteors } from "../../components/ui/meteors";
import Image from "next/image";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="w-full relative max-w-xs">
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}

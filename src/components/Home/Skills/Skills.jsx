import React from "react";
import { Divider } from "@nextui-org/react";
import { TabsDemo } from "@/app/assets/tabs";

export default function Skills() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="md:pl-48 md:pr-48 p-8 md:pt bg-gradient-to-b from-green-800 to-black">
      <div>
        <div className="md:ml-20 md:mr-20">
          <h1 className="text-4xl p-8 font-bold text-center">
            {" "}
            My Technical Skills
          </h1>
          <Divider />
        </div>
      </div>
      <TabsDemo></TabsDemo>
    </div>
  );
}

"use client"

import { InfiniteMovingReviewssDemo } from "@/app/assets/infinityreviews";
import { Divider } from "@nextui-org/react";
import React from "react";

const Reviews = () => {
  return (
    <div>
      <div>
        <div className="md:ml-20 md:mr-20">
          <h1 className="text-4xl p-8 font-bold text-center">
            {" "}
            What my clients says
          </h1>
          <Divider />
        </div>
      </div>
      <div>
        <InfiniteMovingReviewssDemo></InfiniteMovingReviewssDemo>
      </div>
    </div>
  );
};

export default Reviews;

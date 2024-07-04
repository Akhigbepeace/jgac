import Image from "next/image";
import React from "react";

const History = () => {
  const historyBg = "/assets/images/welcome-to-church.jpg";

  return (
    <div className="container mx-auto py-12 text-center px-5">
      <h2 className="text-3xl font-bold mb-6">Our History</h2>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="lg:w-1/2">
          <p className="text-lg leading-8">
            Our church was established in 1984 and has since been a beacon of
            hope and faith in our community. Over the years, we have grown
            tremendously, offering various ministries and programs to meet the
            spiritual and practical needs of our members. Our journey has been
            filled with blessings and we look forward to continuing to serve
            with love and dedication.
          </p>
        </div>
        <div className="relative lg:w-1/2 w-full h-60">
          <Image
            src={historyBg}
            alt="History"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default History;

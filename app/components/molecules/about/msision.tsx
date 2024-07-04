import Image from "next/image";
import React from "react";

const Mission = () => {
  const missionBg = "/assets/images/welcome-to-church.jpg";

  return (
    <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center gap-6 px-5">
      <div className="lg:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed
          eos porro corporis inventore, aliquam totam ipsum sapiente laudantium
          sint sunt deserunt iure sequi libero placeat. Reiciendis aliquam
          quaerat est!
        </p>
      </div>
      <div className="relative lg:w-1/2 w-full h-60">
        <Image
          src={missionBg}
          alt="Mission"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Mission;

import Image from "next/image";
import React from "react";

const Mission = () => {
  const missionBg = "/assets/images/mission.jpg";

  return (
    <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center gap-6 px-5">
      <div className="lg:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <ul className="text-lg leading-8 list-disc ml-10">
          <li>
            <strong> Discover Purpose:</strong> We are dedicated to helping
            individuals uncover their God-given purpose, guiding them to
            understand their unique role in the body of Christ.
          </li>
          <li>
            <strong> Build Potentials:</strong> Through discipleship, education,
            and empowerment, we aim to develop the full potential of each
            member, equipping them for effective service in God&apos;s kingdom.
          </li>
          <li>
            <strong>Fulfill Dreams:</strong>
            We support and encourage the fulfillment of dreams and aspirations
            that align with God&apos;s will, fostering a culture of faith, hope, and
            perseverance.
          </li>
        </ul>
      </div>
      <div className="relative lg:w-1/2 w-full h-72">
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

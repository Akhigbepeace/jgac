import Image from "next/image";
import React from "react";

const Vision = () => {
  const visionBg = "/assets/images/vision.jpg";

  return (
    <div className="container mx-auto py-12 flex flex-col lg:flex-row-reverse items-center gap-6 px-5">
      <div className="lg:w-1/2 flex flex-col items-start">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <div className="text-lg leading-8">
          <span>The Lord has given this ministry the mandate to;</span>

          <ul className="text-lg leading-8 list-disc ml-10">
            <li>
              <strong>Win souls and populate the kingdom of God:</strong> We
              strive to spread the Gospel and bring the message of salvation to
              every corner of the world, fulfilling the Great Commission.
            </li>
            <li>
              <strong>Raise Godly Families: </strong>We are committed to
              promoting and nurturing strong, godly families based on biblical
              principles, emphasizing the sanctity of marriage with the tenet of
              one man and one wife.
            </li>
            <li>
              <strong>Song Ministration to lift souls:</strong>
              Through powerful and anointed song ministrations, we aim to uplift
              souls, inspire worship, and draw hearts closer to God.
            </li>
          </ul>
        </div>
      </div>
      <div className="relative lg:w-1/2 w-full h-96">
        <Image
          src={visionBg}
          alt="Vision"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Vision;

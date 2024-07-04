import Image from "next/image";
import React from "react";

type BannerProps = {
  bgImage: string;
  page: string;
};

const Banner = (props: BannerProps) => {
  const { bgImage, page } = props;

  return (
    <div className="relative w-full h-96">
      <Image src={bgImage} alt={page} layout="fill" objectFit="cover" />
      <div className="absolute bg-black bg-opacity-60 flex items-center justify-center h-full w-full top-0 text-white">
        <h1 className="lg:text-6xl text-5xl font-bold">{page}</h1>
      </div>
    </div>
  );
};

export default Banner;

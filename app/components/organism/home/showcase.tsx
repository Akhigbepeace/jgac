"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/images/welcome-to-church.jpg",
  "/assets/images/love-of-God.jpeg",
  "/assets/images/join-us-for-worship.jpg",
];

const texts = [
  {
    title: "Welcome to Our Church",
    passage:
      '"For where two or three gather in my name, there am I with them." - Matthew 18:20',
  },
  {
    title: "Experience God's Love",
    passage:
      '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16',
  },
  {
    title: "Join Us for Worship",
    passage:
      '"Come, let us bow down in worship, let us kneel before the LORD our Maker." - Psalm 95:6',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Showcase = () => {
  return (
    <Slider {...settings}>
      {images.map((imageUrl, index) => (
        <div key={index} className="relative h-screen">
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="lg:text-7xl text-3xl font-bold">
                  {texts[index].title}
                </h2>
                <p className="text-lg mt-4 italic px-5">
                  {texts[index].passage}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Showcase;

"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Gallery = () => {
  const galleryImages: string[] = [
    "/assets/images/welcome-to-church.jpg",
    "/assets/images/love-of-God.jpeg",
    "/assets/images/join-us-for-worship.jpg",
    "/assets/images/welcome-to-church.jpg",
    "/assets/images/love-of-God.jpeg",
    "/assets/images/join-us-for-worship.jpg",
    "/assets/images/welcome-to-church.jpg",
    "/assets/images/love-of-God.jpeg",
    "/assets/images/join-us-for-worship.jpg",
    "/assets/images/welcome-to-church.jpg",
    "/assets/images/love-of-God.jpeg",
    "/assets/images/join-us-for-worship.jpg",
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className=" py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="px-5 lg:px-0">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={true}
            arrows={false}
            draggable={true}
            autoPlaySpeed={3000}
          >
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 mr-5">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

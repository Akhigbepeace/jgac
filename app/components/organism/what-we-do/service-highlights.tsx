import React from "react";
import MediaPlayer, { EventCard } from "../media-player";

const ServiceHighlights = () => {
  const highlights: EventCard[] = [
    {
      title: "Ruby Jubilee",
      mediaUrl: "/assets/videos/bronze-jubilee.mp4",
      thumbnail: "/assets/images/join-us-for-worship.jpg",
      description:
        "Highlights from our 40th Founder's Anniversary celebration.",
      date: "June 30, 2024",
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Service Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
        <MediaPlayer events={highlights} />
      </div>
    </section>
  );
};

export default ServiceHighlights;

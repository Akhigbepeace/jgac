import React from "react";
import MediaPlayer, { EventCard } from "../media-player";

const events: EventCard[] = [
  {
    title: "Ruby Jubilee",
    mediaUrl: "/assets/videos/bronze-jubilee.mp4",
    thumbnail: "/assets/images/join-us-for-worship.jpg",
    description: "Highlights from our 40th Founder's Anniversary celebration.",
    date: "June 30, 2024",
  },
];

const RecentEvents = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Recent Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
        <MediaPlayer events={events} />
      </div>
      {events.length > 3 && ( 
        <div className="text-center mt-8">
          <a
            href="/services"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark"
          >
            View More
          </a>
        </div>
      )}
    </section>
  );
};

export default RecentEvents;

import React from "react";
import Image from "next/image";
import { EventCard, eventData } from "@/app/config/events";

type AnniversariesProps = {
  title: string;
  events: EventCard[];
};

const Anniversaries = ({ title, events }: AnniversariesProps) => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <Image
              src={event.image}
              alt={event.title}
              layout="responsive"
              width={700}
              height={475}
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-75 flex items-center justify-center p-4">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-base mb-1">{String(event.date)}</p>
                <p className="text-sm italic">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Programmes = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Anniversaries title="Monthly Programmes" events={eventData.monthly} />
      </div>
      <Anniversaries
        title="Quarterly Programmes"
        events={eventData.quarterly}
      />
    </>
  );
};

export default Programmes;

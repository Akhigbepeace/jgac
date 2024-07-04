import React from "react";

const getNextSunday = () => {
  const today = new Date();
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + ((7 - today.getDay()) % 7));
  return nextSunday.toDateString();
};

const upcomingEvents = [
  {
    name: "Sunday Service",
    date: getNextSunday(),
    description: "Join us for our regular Sunday service at 7 AM.",
  },
  {
    name: "Ankara Sunday",
    date: "August 4, 2024",
    description: "Come and worship God with us with your native attire.",
  },
  {
    name: "Youth Hangout",
    date: "July 20, 2024",
    description: "Enjoy food and fellowship at our annual youth BBQ Hangout.",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="container mx-auto py-12 px-5 xl:px-0">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="space-y-6">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-bold mb-2">{event.name}</h3>
            <p className="text-sm mb-1">{event.date}</p>
            <p className="text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;

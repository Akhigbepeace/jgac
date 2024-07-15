import React from "react";

const getNextSunday = () => {
  const today = new Date();
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + ((7 - today.getDay()) % 7));
  return nextSunday.toDateString();
};

const upcomingEvents = [
  {
    name: "Youth Convention",
    date: "July 21, 2024",
    description:
      "Join us for a vibrant and uplifting Youth Convention filled with inspiring messages, worship, and fellowship. Don't miss out on this spiritual revival!",
  },
  {
    name: "Choir Convention",
    date: "July 28, 2024",
    description:
      "Experience the harmonious melodies at our Choir Convention. Come dressed in your native attire as we worship God together in a cultural celebration of music and praise.",
  },
  {
    name: "Annual Convention",
    date: "October 13, 2024",
    description:
      "Join us for our Annual Convention, a day dedicated to worship, community, and spiritual growth. Experience powerful sermons, uplifting music, and a range of engaging activities for all ages. Come and be blessed!",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="container mx-auto py-12 px-5 xl:px-0">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="space-y-6">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-bold">{event.name}</h3>
            <p className="text-base my-1">{event.date}</p>
            <p className="text-sm italic">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;

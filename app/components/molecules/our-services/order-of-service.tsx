import React from "react";

const orderOfService = {
  Sunday: [
    { event: "English Service", time: "7:00 AM - 9:00 AM" },
    { event: "Sunday School", time: "9:00 AM - 10:00 AM" },
    { event: "Yoruba Service", time: "10:00 AM - 12:00 PM" },
  ],
  Tuesday: [{ event: "Bible Study", time: "6:00 PM - 8:00 PM" }],
  Thursday: [{ event: "Divine Healing", time: "6:00 PM - 8:00 PM" }],
};

const OrderOfService = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Order of Service</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md border rounded-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-6 text-left">Day</th>
              <th className="py-3 px-6 text-center">Event</th>
              <th className="py-3 px-6 text-center">Time</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(orderOfService).map(([day, events], dayIndex) => (
              <React.Fragment key={dayIndex}>
                {events.map((service, eventIndex) => (
                  <tr key={eventIndex} className="border-b border-gray-200">
                    {eventIndex === 0 && (
                      <td
                        className="py-3 px-6 border-r font-semibold"
                        rowSpan={events.length}
                      >
                        {day}
                      </td>
                    )}
                    <td className="py-3 px-6 border-r text-center">
                      {service.event}
                    </td>
                    <td className="py-3 px-6 border-r text-center">
                      {service.time}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderOfService;

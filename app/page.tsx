import React from "react";
import Showcase from "./components/organism/home/showcase";
import BriefDesc from "./components/organism/home/brief-desc";
import EventCards from "./components/organism/home/recent-events";
import UpcomingEvents from "./components/organism/home/upcoming-events";

export default function Home() {
  return (
    <div className="bg-[#00000000]">
      <div className="-mt-[73px] overflow-hidden">
        <Showcase />
      </div>
      <BriefDesc />
      <EventCards />
      <UpcomingEvents />
    </div>
  );
}

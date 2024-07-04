import React from "react";
import Banner from "../components/molecules/banner";
import Description from "../components/molecules/about/description";
import Vision from "../components/molecules/about/vision";
import History from "../components/molecules/about/history";
import Mission from "../components/molecules/about/msision";

const About = () => {
  const aboutBgImage = "/assets/images/welcome-to-church.jpg";
  return (
    <>
      <Banner bgImage={aboutBgImage} page="About" />
      <Description />
      <div className="bg-gray-100 py-12">
        <Mission />
        <Vision />
      </div>
      <History />
    </>
  );
};

export default About;

import React from "react";
import Banner from "../components/molecules/banner";
import OrderOfService from "../components/molecules/our-services/order-of-service";
import FAQAccordion from "../components/organism/what-we-do/faq";
import ServiceHighlights from "../components/organism/what-we-do/service-highlights";
import Programmes from "../components/molecules/our-services/programmes";

const Services = () => {
  const serviceBgImage = "/assets/images/welcome-to-church.jpg";

  return (
    <>
      <Banner bgImage={serviceBgImage} page="Our Services" />
      <OrderOfService />
      <Programmes />
      <ServiceHighlights />
      <FAQAccordion />
    </>
  );
};

export default Services;

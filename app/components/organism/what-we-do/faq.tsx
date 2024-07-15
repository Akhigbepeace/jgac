"use client";

import { faqs } from "@/app/config/media";
import React, { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 border-b">
              <button
                className="w-full text-left text-xl font-semibold py-4 px-6 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              <div
                className={`px-6 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
                style={{ maxHeight: activeIndex === index ? "200px" : "0px" }}
              >
                <p className="py-2 italic">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQAccordion;

import React from "react";
import Banner from "../components/molecules/banner";
import Script from "next/script";

const Contact = () => {
  const contactBgImage = "/assets/images/welcome-to-church.jpg";

  return (
    <>
      <Banner bgImage={contactBgImage} page="Contact Us" />

      <section className="container mx-auto py-12 px-5 lg:px-0">
        <p className="text-lg mb-5">
          Feel free to always reach out to us <strong>ANYTIME !</strong>
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <iframe
              // width="520"
              // height="400"
              // frameBorder="0"
              // scrolling="no"
              // marginHeight={0}
              // marginWidth={0}
              className="w-full h-full"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&height=400&hl=en&q=1,%20Church%20Street,%20Off%20Old%20Olowora%20Road,%20Isheri,%20Lagos.%20Isheri+(Jesus%20Gospel%20Apostolic%20Church)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
            <span>1, Church Street, Off Old Olowora Road, Isheri, Lagos.</span>
            <Script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=9e0b185614b5fcc8cd5379e5c9269c0d2fb20826"
            ></Script>
            {/* <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=9e0b185614b5fcc8cd5379e5c9269c0d2fb20826"
            ></script> */}
          </div>

          <div className="lg:w-1/2">
            <form className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message"
                  rows={5}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center bg-gray-100 py-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Bible Passage</h3>
          <p className="text-lg">
            &quot;For where two or three are gathered in my name, there am I
            among them.&quot; - Matthew 18:20
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;

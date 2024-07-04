import Image from "next/image";
import Link from "next/link";
import React from "react";

const BriefDesc = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-5">
        <div className="lg:w-[600px] text-justify lg:p-0 p-5">
          <h2 className="text-3xl font-bold mb-4">
            JESUS GOSPEL <br /> APOSTOLIC CHURCH
          </h2>
          <p className="text-lg mb-6">
            Our church is a place where everyone is welcome. We are dedicated to
            sharing the love of Christ with our community and the world. Join us
            to experience uplifting worship, inspiring messages, and a loving
            community.
          </p>
          <p className="text-lg mb-6">
            Established in 1984, our church has been a beacon of hope and faith
            in our community. We offer various ministries and programs to meet
            the spiritual and practical needs of our members.
          </p>
          <Link
            href="/about"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark"
          >
            Learn More
          </Link>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 space-y-4 mt-6 lg:mt-0 lg:ml-6">
          <div className="relative w-[150px] h-[100px] md:w-[254px] md:h-[148px] flex self-end justify-self-end m-5">
            <Image
              src="/assets/images/join-us-for-worship.jpg"
              alt="Church community"
              fill
            />
          </div>

          <div
            className="md:w-[320px] md:h-[214px] w-[170px] h-[130px] text-center text-3xl flex items-center justify-center bg-primary-dark text-white m-0"
            style={{ margin: 0 }}
          >
            <span>
              Impacting <br /> Lives
            </span>
          </div>

          <div
            className="relative md:w-[320px] md:h-[214px] w-[170px] h-[130px] m-0 flex self-end justify-self-end"
            style={{ margin: 0 }}
          >
            <Image
              src="/assets/images/love-of-God.jpeg"
              alt="Church community"
              fill
            />
          </div>

          <div className="relative w-[150px] h-[100px] md:w-[254px] md:h-[148px] m-5">
            <Image
              src="/assets/images/join-us-for-worship.jpg"
              alt="Church community"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefDesc;

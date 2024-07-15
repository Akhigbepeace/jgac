import React from "react";
import Image from "next/image";
import Gallery from "../components/organism/media/gallery";
import {
  departmentalTeam,
  founders,
  hodTeam,
  pastoralTeam,
  Person,
} from "../config/media";

type SectionProps = {
  title: string;
  people: Person[];
  index: number;
};

const Section = (props: SectionProps) => {
  const { title, people, index } = props;

  const bgColor = index % 2 === 0 ? "bg-gray-100" : "bg-white";

  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-5 md:px-0">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg text-center p-4 bg-white"
            >
              <div className="relative w-full h-64">
                <Image
                  src={person.image}
                  alt={person.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg object-top"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{person.name}</h3>
              {person.description && (
                <p className="mt-2">{person.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MediaPage = () => {
  return (
    <>
      <Section title="Founders" people={founders} index={0} />
      <Section title="Pastoral Team" people={pastoralTeam} index={1} />
      <Section title="Heads of Departments (HOD)" people={hodTeam} index={2} />
      <Section title="Departmental Team" people={departmentalTeam} index={3} />
      <Gallery />
    </>
  );
};

export default MediaPage;

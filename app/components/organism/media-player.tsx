"use client";

import Image from "next/image";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import React, { useState } from "react";

export type EventCard = {
  title: string;
  mediaUrl: string;
  thumbnail: string;
  description: string;
  date: string;
};

type MediaPlayerProps = {
  events: EventCard[];
};

const MediaPlayer = ({ events }: MediaPlayerProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventCard | null>(null);

  const openModal = (event: EventCard) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };
  return (
    <>
      {events.map((event, index) => (
        // {events .slice(0, 3).map((event, index) => (
        <div
          key={index}
          className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg bg-[#000000da]"
          onClick={() => openModal(event)}
        >
          <div className="relative w-full h-64  bg-[#000000da]">
            <Image
              src={event.thumbnail}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-lg font-bold mb-1">{event.title}</h3>
              <p className="text-sm mb-2">{event.description}</p>
              <span className="text-xs">{event.date}</span>
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white rounded-lg overflow-hidden w-full max-w-3xl mx-auto my-16 shadow-lg p-6 relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        {selectedEvent && (
          <div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            {selectedEvent.mediaUrl.endsWith(".mp4") ? (
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <ReactPlayer
                  url={selectedEvent.mediaUrl}
                  playing={modalIsOpen}
                  controls
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            ) : (
              <Image
                src={selectedEvent.mediaUrl}
                alt={selectedEvent.title}
                width={800}
                height={450}
                objectFit="cover"
              />
            )}
            <h3 className="text-xl font-bold mb-2 mt-4">
              {selectedEvent.title}
            </h3>
            <p className="mb-4">{selectedEvent.description}</p>
            <span className="text-sm">{selectedEvent.date}</span>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MediaPlayer;

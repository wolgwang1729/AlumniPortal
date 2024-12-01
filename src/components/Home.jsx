import React from "react";
import EntranceImage from "../assets/Entrance.jpg";
import OAT from "../assets/OAT.jpg";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative mx-auto max-w-full">
          <img
            className="w-full h-auto"
            src={EntranceImage}
            alt="DTU Entrance"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-between  bg-black bg-opacity-50 text-white pt-5 ">
            <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl md:mb-4 xl:text-9xl font-bold">
              Welcome Home
            </h1>
            <p className="font-serif text-sm sm:text-2xl md:text-3xl  text-center max-w-screen-lg mb-56">
              Step into the virtual home of DTU’s vibrant community and DCE
              legacy — a place where innovation and excellence extend beyond the
              campus. Reconnect with classmates, explore opportunities, and stay
              engaged with the latest research and ideas from Delhi
              Technological University.
            </p>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(to right, black, #C05621)' }} className=" flex flex-row p-4 md:p-10 text-white">
          <div className="flex flex-col md:p-5 gap-4 justify-center items-center text-center ">
            <div className="text-2xl md:text-5xl" style={{ fontFamily: "'Times New Roman', Times, serif" }}>DTU Looks Forward</div>
            <div className="text-xl md:text-2xl">
              Explore how the University is advancing knowledge in service to
              society, strengthening the DTU community, and fostering open
              dialogue.
            </div>
            <div className="bg-black rounded-xl m-4">
              <button className="text-xl p-2 md:p-4 md:text-2xl "> Learn More</button>
            </div>
          </div>
          <div className="hidden md:flex">
            <img src={OAT} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

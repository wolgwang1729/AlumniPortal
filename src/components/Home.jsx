import React from "react";
import EntranceImage from "../assets/Entrance.jpg";

export default function Home() {
    return (
        <>
            <div className="relative mx-auto max-w-full">
                <img
                    className="w-full h-auto"
                    src={EntranceImage}
                    alt="DTU Entrance"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-between text-white bg-black bg-opacity-50 pt-5 pb-56">
                    <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl md:mb-4 xl:text-9xl font-bold">Welcome Home</h1>
                    <p className="font-serif text-lg sm:text-2xl md:text-3xl  text-center max-w-screen-lg">
                        Step into the virtual home of DTU’s vibrant community and DCE legacy — a place where innovation and excellence extend beyond the campus. Reconnect with classmates, explore opportunities, and stay engaged with the latest research and ideas from Delhi Technological University.
                    </p>
                </div>
            </div>
        </>
    );
}
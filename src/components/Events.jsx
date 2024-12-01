import React from "react";
import { Link } from "react-router-dom";
import Event1Image1 from "../assets/Event1/Image1.jpeg";
import Event1Image2 from "../assets/Event1/Image2.jpeg";
import Event1Image3 from "../assets/Event1/Image3.jpeg";
import Event2Image1 from "../assets/Event2/Image1.jpeg";
import Event2Image2 from "../assets/Event2/Image2.jpeg";
import Event2Image3 from "../assets/Event2/Image3.jpeg";

export default function Events() {
    return (
        <>
            <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mx-4 md:mx-16 mt-4">
                <h1 className="font-serif text-3xl font-bold mb-4">Events</h1>
                <p className="font-serif sm:text-xl text-center max-w-5xl">
                    Stay updated with the latest events and activities happening at DTU. Join us and be a part of our vibrant community.
                </p>
                <div className="flex items-center lg:order-2 mt-5 gap-6">
                    <Link
                        to="/login"
                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm md:text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Attend an Event
                    </Link>
                    <Link
                        to="/login"
                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm md:text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Organise an Event
                    </Link>
                </div>
            </div>

            <div className="mx-auto w-full p-4 py-6 bg-white text-black lg:py-8">
                <div className="md:flex md:justify-between flex-col">
                    <div className="flex flex-col px-8 my-8">
                        <h2 className="font-serif mb-6 text-3xl text-orange-800">International conference and start up expo-2024</h2>
                        <div className="text-gray-600 flex flex-col gap-4 px-8">
                            <div>The International Conference and Startup Expo-24, hosted by University School of Management and Entrepreneurship, Delhi Technological University, was a remarkable two-day event (21-22 February 2024) themed Innovation and Entrepreneurship. The event commenced with a Grand Opening Ceremony, followed by Roundtable Congress, Startup Pitch Sessions, Track Presentations, Founder-Faculty Interaction Session, Panel Discussions, and Exhibition Stalls.</div>

                            <div>The event was a huge success with the participation of startups, corporate executives, and academicians, engaging 80 researchers, 15</div>

                            <div>During the closing ceremony, certificates were awarded to Research Paper presenters and the Organizing Team. Prof. Amit Mookerjee , Director east campus , expressed heartfelt thanks to all involved. Special thanks were extended to our alumni association DCE to Mr. Sanjay Diwan, Mr. Akhil Choudhary, and Mr. Arun Aggarwal, along with Mr. Arun Gupta from the DCE DTU Alumni Association for their generous support.</div>

                        </div>
                        <div className="flex flex-wrap px-12 py-7 justify-center items-center gap-3">
                            <div className="h-54 w-96 overflow-hidden rounded-lg shadow-lg">
                                <img className="h-full w-full object-cover transform transition duration-500 hover:scale-105" src={Event1Image1} alt="Event Image 1" />
                            </div>
                            <div className="h-54 w-96 overflow-hidden rounded-lg shadow-lg">
                                <img className="h-full w-full object-cover transform transition duration-500 hover:scale-105" src={Event1Image2} alt="Event Image 2" />
                            </div>
                            <div className="h-54 w-96 overflow-hidden rounded-lg shadow-lg">
                                <img className="h-full w-full object-cover transform transition duration-500 hover:scale-105" src={Event1Image3} alt="Event Image 3" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-8 my-8">
                        <h2 className="font-serif mb-6 text-3xl text-orange-800">Annual Meet 2024</h2>
                        <div className="text-gray-600 flex flex-col gap-4 px-8">
                            <div>Annual Alumni Meet-2024 was held on 3rd February 2024 at Air Force Auditorium, Subroto Park New Delhi.Vice Chancellor of Delhi Technological University, Prof. Prateek Sharma who is an alumnus himself from DCE 1989 batch was Geust of Honour for the Alumni Meet.</div>

                            <div>As per tradition, distinguished Faculty members of DCE/DTU were honoured on stage. Selected alumni were recognised for their achievements by facilitating them with Distinguished Alumni, Trail Blazer and Young Achiever Awards. Meritorious students of DTU were honored with certificates & medals.</div>

                            <div>Alumni of jubilee batches namely Diamond Jubilee (1963 &1964), Golden Jubilee (1973, 1974) and Silver Jubilee (1998 & 1999) were felicitated on stage with mementoes. More than 1200 alumni participated in the alumni meet this year and enjoyed net-working dinner in sprawling lush green beautifully decorated lawns, with fun, beverages, delicious food and groups' photo-shoots.</div>

                        </div>
                        <div className="flex flex-wrap px-12 py-7 justify-center items-center gap-3">
                            <div className="h-54 w-96 overflow-hidden rounded-lg shadow-lg">
                                <img className="h-full w-full object-cover transform transition duration-500 hover:scale-105" src={Event2Image1} alt="Event Image 1" />
                            </div>
                            <div className="h-54 w-96 overflow-hidden rounded-lg shadow-lg">
                                <img className="h-full w-full object-cover transform transition duration-500 hover:scale-105" src={Event2Image2} alt="Event Image 2" />
                            </div>
                            <div className="h-54 w-96 overflow-hidden rounded-lg shadow-lg">
                                <img className="h-full w-full object-cover transform transition duration-500 hover:scale-105" src={Event2Image3} alt="Event Image 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
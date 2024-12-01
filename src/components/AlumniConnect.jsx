import React from "react";
import { Link } from "react-router-dom";
import CardVin from "./Card/CardVin";
import CardShe from "./Card/CardShe";
import CardRoh from "./Card/CardRoh";

const alumniData = [
  {
    name: "Vinod Dham",
    batch: "1971",
    discipline: "Electrical Engineering",
    notability:
      "Engineer and venture capitalist known as the 'Father of the Pentium' for his work in the Microprocessor Products group at Intel.",
    about:
      "An influential figure in the tech industry with a legacy in microprocessor development.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Vinod_Dham_%28cropped%29.jpg/248px-Vinod_Dham_%28cropped%29.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/vinoddham",
      twitter: "https://twitter.com/vinoddham",
    },
  },
  {
    name: "Rohit Chadda",
    batch: "2005",
    discipline: "Computer Engineering",
    notability: "Co-founder of Foodpanda India.",
    about:
      "Passionate entrepreneur with a knack for building successful startups in the food delivery sector.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Rohit_Chadda.jpg/330px-Rohit_Chadda.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/rohitchadda",
      twitter: "https://twitter.com/rohitchadda",
    },
  },
  {
    name: "Vijay Shekhar Sharma",
    batch: "1998",
    discipline: "Electronics and Communication Engineering",
    notability: "Founder of Paytm.",
    about: "Visionary leader driving the digital payments revolution in India.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Vijay_Shekhar_Sharma_%282019%29.jpg/330px-Vijay_Shekhar_Sharma_%282019%29.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/vijayshekharsharma",
      twitter: "https://twitter.com/vijayshksharma",
    },
  },
  {
    name: "Sanjay Gupta",
    batch: "1981",
    discipline: "Mechanical Engineering",
    notability: "Country Manager of Google India.",
    about:
      "Experienced professional leading Google's initiatives in the Indian market.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Sanjay_Gupta_receives_Influencer_award.jpg/330px-Sanjay_Gupta_receives_Influencer_award.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/sanjaygupta",
      twitter: "https://twitter.com/sanjaygupta",
    },
  },
  {
    name: "Surya Kant",
    batch: "1976",
    discipline: "Electrical Engineering",
    notability:
      "President of North America, UK, and Europe operations of Tata Consultancy Services.",
    about:
      "Strategic leader overseeing TCS's global operations with a focus on growth and innovation.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFgXHFKlvSb1Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713903610279?e=2147483647&v=beta&t=iN8H-727PFucv8kPr9L-OJ2I7kGlwtXkqGWctPBWqlU",
    socials: {
      linkedin: "https://linkedin.com/in/suryakant",
      twitter: "https://twitter.com/suryakant",
    },
  },
  {
    name: "Manish Khera",
    batch: "1991",
    discipline: "Electrical Engineering",
    notability: "Former CEO of Airtel Payments Bank.",
    about: "Expert in financial services and digital banking solutions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Manish_Khera_image.jpg/330px-Manish_Khera_image.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/manishkhera",
      twitter: "https://twitter.com/manishkhera",
    },
  },
];

export default function AlumniConnect() {
  return (
    <div className="min-h-screen text-gray-900 mb-6 justify-center items-center">
      <div className="inset-0 flex flex-col items-center justify-center text-white bg-black py-5 opacity-80 rounded-lg mb-8 mx-16 mt-4">
        <h1 className="font-serif text-xl sm:text-3xl font-bold mb-4">
          Alumni Connect
        </h1>
        <p className="font-serif sm:text-xl text-center max-w-5xl">
          Connect with our esteemed alumni from various batches and industries.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4 lg:mx-24">
        <CardVin />
        <CardShe />
        <CardRoh />
      </div>
    </div>
  );
}

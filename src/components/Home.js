import React, { useRef } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Services } from "./Services";
import sport from "../utils/images/sport.jpg"

export const Home = () => {
  const services = useRef(null);

  const executeScroll = () => services.current.scrollIntoView();

  return (
    <div>
      <div className="lg:flex p-5 justify-center items-center bg-home h-[95vh]">
        <div className="max-w-5xl pt-[10vh] md:pt-0 md:px-24">
          <h2 className="font-Poppins text-xl md:text-3xl">Welcome to</h2>
          <h2 className="font-Poppins text-4xl md:text-7xl text-[#5800FF]">
            Sk Sports
          </h2>

          <p className="font-Inconsolata mt-2 md:text-xl font-semibold">
            We provide coaching in Badminton, Karate, Basketball and much more
          </p>

          <button
            onClick={executeScroll}
            className="bg-blue-600 font-Poppins text-white py-2 px-6 rounded-md mt-5 shadow-md shadow-sky-200"
          >
            Lets Play
          </button>
        </div>

        <img src={sport} className="w-90 h-96 object-contain rounded-lg"/>
      </div>

      {/* <div ref={services}>
        <Services />
      </div> */}
    </div>
  );
};

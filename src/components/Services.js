import React from "react";
import basketball from "../utils/images/basket.png";
import karate from "../utils/images/karate.jpg";
import badminton from "../utils/images/badmin.png";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="max-w-5xl mx-2 lg:mx-auto my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 p-2 mx-1 max-w-fullxl sm:mx-auto gap-3 mt-2 z-0">

      <div className=" bg-white p-3 shadow-md cursor-pointer border-2 rounded-lg border-gray-900">
          <h2 className="font-Poppins text-lg text-[#4c6dff] font-semibold tracking-widest flex justify-between">
            Karate
          </h2>
          <img src={karate} className="w-90 h-80 object-contain rounded-lg" />

          <Link to="/karate">
            <h3 className="font-Inconsolata font-semibold text-right shadow-sm rounded-sm bg-blue-100 px-4 py-1 inline-flex float-right">
              Details
            </h3>
          </Link>
        </div>
        
        <div className=" bg-white p-3 shadow-md cursor-pointer rounded-lg border-2 border-gray-900">
          <h2 className="font-Poppins text-lg text-[#4c6dff] font-semibold tracking-widest flex justify-between">
            Basketball
          </h2>
          <img
            src={basketball}
            className="w-90 h-80 object-contain rounded-lg"
          />
          <Link to="/basketball">
            <h3 className="font-Inconsolata font-semibold text-right shadow-sm rounded-sm bg-blue-100 px-4 py-1 inline-flex float-right">
              Details
            </h3>
          </Link>
        </div>

        <div className=" bg-white p-3 shadow-md cursor-pointer rounded-lg border-2 border-gray-900">
          <h2 className="font-Poppins text-lg text-[#4c6dff] font-semibold tracking-widest flex justify-between">
            Badminton
          </h2>
          <img
            src={badminton}
            className="w-90 h-80 object-contain rounded-lg"
          />
          <Link to="/badminton">
            <h3 className="font-Inconsolata font-semibold text-right shadow-sm rounded-sm bg-blue-100 px-4 py-1 inline-flex float-right">
              Details
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

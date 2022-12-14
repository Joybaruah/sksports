import React, { useEffect } from "react";
import { MdOutlineCall, MdOutlineLocationOn } from "react-icons/md";
import { useLocation } from "react-router-dom";

export const BasketBallDetails = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="sm:max-w-5xl mx-auto min-h-screen">
      <header className="font-Poppins text-4xl sm:text-6xl md:text-7xl m-2 md:mt-4 text-[#4c6dff]">
        Basketball
      </header>

      <div className="mx-2 font-Poppins">
        {/* <h2 className="text-xl sm:text-2xl inline-flex shadow-md rounded-md md:text-3xl bg-sky-100 p-2">
          Tezpur Airforce Station Branch
        </h2> */}

        <div className="px-3">
          <h3 className="text-sm mt-2">Fees Structure</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Rs 500/- Monthly Fee <br />
            • Rs 1000/- Uniform & Registration Fee <br />• Total 1500/-
          </p>
          <h3 className="text-sm mt-2">Schedule</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Weekly 5 Days (Monday to Friday)
            <br />
            • Begginners Batch 4:00pm - 5:30pm <br />• Senior Batch 5:30pm -
            7:00pm
          </p>

          <h3 className="text-sm mt-2">Coach Detail</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Md Asif Alam
          </p>
          <p className="sm:text-base md:text-md text-violet-500 font-Inconsolata font-semibold pl-6">
            National Level Player
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineCall className="mr-2" />
            Contact Details
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • 8638608616/709964659/9957827283
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineLocationOn className="mr-2" />
            Address
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Airforce Station, Tezpur Assam
          </p>
        </div>
      </div>
    </div>
  );
};

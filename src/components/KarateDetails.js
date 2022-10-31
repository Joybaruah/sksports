import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineCall, MdOutlineLocationOn } from "react-icons/md";

export const KarateDetails = () => {
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
        Karate
      </header>

      <div className="mx-2 font-Poppins">
        <h2 className="text-xl sm:text-2xl inline-flex shadow-md rounded-md md:text-3xl bg-sky-100 p-2">
          Tezpur Airforce Station Branch
        </h2>

        <div className="px-3">
          <h3 className="text-sm mt-2">Fees Structure</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Rs 500/- Monthly Fee <br/>
            • Rs 1000/- Uniform & Registration Fee <br/>
            • Total 1500/-
          </p>
          <h3 className="text-sm mt-2">Schedule</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Weekly 4 Days <br />
            • Begginners Batch 4:00pm - 5:00pm <br />
            • Senior Batch 5:00pm - 6:00pm
          </p>

          <h3 className="text-sm mt-2">Coach Detail</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Mr. Sonu Kapoor & Rintu Ali
          </p>
          <p className="sm:text-base md:text-md text-violet-500 font-Inconsolata font-semibold pl-6">
            National Level Player & Black Belt
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineCall className="mr-2" />
            Contact Details
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • 8638608616/709964659
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineLocationOn className="mr-2" />
            Address
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Ashoka Stadium, Airforce Station Tezpur
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl inline-flex mt-4 shadow-md rounded-md md:text-3xl bg-sky-100 p-2">
          Misamari Airforce Station Branch
        </h2>

        <div className="px-3 pb-6">
          <h3 className="text-sm mt-2">Fees Structure</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Rs 800/- Monthly Fee <br/>
            • Rs 700/- Uniform & Registration Fee <br/>
            • Total 1500/-
          </p>
          <h3 className="text-sm mt-2">Schedule</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Weekly 4 Days <br />
            • Begginners Batch 4:00pm - 5:30pm <br />
            • Senior Batch 5:30pm - 7:00pm
          </p>

          <h3 className="text-sm mt-2">Coach Detail</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Mr. Sonu Kapoor & Rintu Ali
          </p>
          <p className="sm:text-base md:text-md text-violet-500 font-Inconsolata font-semibold pl-6">
            National Level Player & Black Belt
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineCall className="mr-2" />
            Contact Details
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • 8638608616/709964659
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineLocationOn className="mr-2" />
            Address
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • AFWWA COMPLEX, Airforce Station Tezpur
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl inline-flex mt-4 shadow-md rounded-md md:text-3xl bg-sky-100 p-2">
          Misamari Army Camp Branch
        </h2>

        <div className="px-3 pb-6">
          <h3 className="text-sm mt-2">Fees Structure</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Rs 800/- Monthly Fee <br/>
            • Rs 700/- Uniform & Registration Fee <br/>
            • Total 1500/-
          </p>
          <h3 className="text-sm mt-2">Schedule</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Weekly 4 Days <br />
            • Begginners Batch 4:00pm - 5:30pm <br />
            • Senior Batch 5:30pm - 7:00pm
          </p>

          <h3 className="text-sm mt-2">Coach Detail</h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • Mr. Sonu Kapoor & Rintu Ali
          </p>
          <p className="sm:text-base md:text-md text-violet-500 font-Inconsolata font-semibold pl-6">
            National Level Player & Black Belt
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineCall className="mr-2" />
            Contact Details
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • 8638608616/709964659
          </p>

          <h3 className="text-md mt-4 flex items-center">
            <MdOutlineLocationOn className="mr-2" />
            Address
          </h3>
          <p className="sm:text-md md:text-lg font-Inconsolata font-semibold">
            • ARMY SHOPPING COMPLEX , Misamari Army Camp Tezpur
          </p>
        </div>
      </div>
    </div>
  );
};

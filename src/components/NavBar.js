import React from "react";
import { MdOutlineSportsHandball } from "react-icons/md";

export const NavBar = () => {
  return (
    <div className="border-b-2 border-b-[#EEF1FF]">
      <div className="p-4 md:text-xl flex justify-between items-center">
        <h2 className="font-Poppins flex items-center">
            Sk-Sports
            <MdOutlineSportsHandball />
        </h2>

        <p className="text-sm text-red-400 font-Poppins">Site under construction!</p>
      </div>
    </div>
  );
};

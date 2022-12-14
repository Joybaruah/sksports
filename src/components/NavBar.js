import React from "react";
import { MdOutlineSportsHandball } from "react-icons/md";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="border-b-2 border-b-[#EEF1FF]">
      <div className="p-4 md:text-xl flex justify-between items-center">
        <Link to={"/"}>
          <h2 className="font-Poppins flex items-center">
            Sk-Sports
            <MdOutlineSportsHandball />
          </h2>
        </Link>

      </div>
    </div>
  );
};

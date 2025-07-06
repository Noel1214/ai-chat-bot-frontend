"use client";
import React, { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div>
      <div className="w-screen h-24 px-7 flex items-center justify-between bg-[#1E293B]">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#427BF5] to-[#8A3AEB]">
            <h1 className="text-2xl font-bold">AI</h1>
          </div>
          <div>
            <h1 className="text-lg">AI Assistant</h1>
            <h1 className="text-xs text-[#94A3B8]">Always here to Help</h1>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <div>
              <MdOutlineSettings size={25} />
            </div>
            <div>
              {darkMode ? (
                <div>
                  <MdOutlineWbSunny size={26} />
                </div>
              ) : (
                <div>
                  <IoMoonOutline size={24} />
                </div>
              )}
            </div>
            <div>
              <MdDeleteOutline size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
// 0F172A
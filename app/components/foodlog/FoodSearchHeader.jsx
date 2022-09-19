import React from "react";
import { AiOutlineClose, AiOutlineFire } from "react-icons/ai";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { SliderDot } from "/app/components/dashboard/SliderDot";

export const FoodSearchHeader = ({ isVisible, setIsModalVisible, selectedFood, setSelectedFood }) => {
  const options = {
    weekday: "long",
  };
  const today = new Date();
  const hours = ((today.getHours() + 11) % 12) + 1;

  return (
    <header className="fixed w-full">
      {isVisible ? (
        <div className="flex justify-between items-center p-2">
          <button onClick={() => setIsModalVisible(false)}>
            <AiOutlineClose size={25} />
          </button>
          <div className="flex">
            {today.toLocaleDateString("en-US", options)} <BsDot /> {hours}
          </div>
          <button>
            <MdOutlineSettingsSuggest size={25} />
          </button>
        </div>
      ) : null}

      <div className="flex justify-evenly py-3 fixed w-full">
        <div className="w-full px-2">
          <div className="flex space-x-1">
            <AiOutlineFire />
            <p>0/1987</p>
          </div>
          <div className="w-full h-1 bg-slate-300"></div>
        </div>
        <div className="w-full px-2">
          P 0/206<div className="w-full h-1 bg-slate-300"></div>
        </div>
        <div className="w-full px-2">
          F 0/66<div className="w-full h-1 bg-slate-300"></div>
        </div>
        <div className="w-full px-2">
          C 0/140<div className="w-full h-1 bg-slate-300"></div>
        </div>
      </div>

      {isVisible ? (
        <div className="border-b border-solid border-slate-300 fixed top-20 w-full">
          <SliderDot />
        </div>
      ) : null}
    </header>
  );
};

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineFire } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SliderDot } from "/app/components/dashboard/SliderDot";
import { BsDot } from "react-icons/bs";
import { LogSlider } from "./LogSlider";

export const FoodSearchModal = ({ setIsModalVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [y, setY] = useState(0);
  const [height, setHeight] = useState();
  const [selected, setSelected] = useState("Search");

  const options = {
    weekday: "long",
  };
  const today = new Date();
  const hours = ((today.getHours() + 11) % 12) + 1;

  return (
    <>
      <div className="bg-slate-50 h-screen overflow-hidden overscroll-y-none ">
        {isVisible ? (
          <div className="flex justify-between items-center p-2 pt-5">
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

        <div className="flex justify-evenly py-3">
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
          <div className="border-b border-solid border-slate-300">
            <SliderDot />
          </div>
        ) : null}
        <div className="flex justify-center space-x-5 text-slate-300 fixed right-0 left-0 top-40 ">
          <GiKnifeFork />

          <p>Add one or more items below</p>
        </div>
        <div className={y <= 50 ? " overflow-auto h-full " : null}>
          <LogSlider
            y={y}
            setY={setY}
            height={height}
            setHeight={setHeight}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
    </>
  );
};

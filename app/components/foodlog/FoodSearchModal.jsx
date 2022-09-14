import React, { useCallback, useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineFire, AiOutlineSearch } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import {
  MdEditCalendar,
  MdOutlineSettingsSuggest,
  MdPlaylistAdd,
} from "react-icons/md";
import { SliderDot } from "/app/components/dashboard/SliderDot";
import { BsDot } from "react-icons/bs";
import { BiBarcodeReader, BiBook } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { RiFridgeLine } from "react-icons/ri";

export const FoodSearchModal = ({ setIsModalVisible }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [y, setY] = useState(50);
  const [height, setHeight] = useState(0);

  const options = {
    weekday: "long",
  };
  const today = new Date();
  const hours = ((today.getHours() + 11) % 12) + 1;

  return (
    <div className="bg-slate-50 h-[915px] max-h-full overflow-hidden">
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

      <div className="flex justify-evenly pt-2">
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
      <div>
        <LogSlider
          y={y}
          setY={setY}
          height={height}
          setHeight={setHeight}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </div>
    </div>
  );
};

const LogSlider = ({ y, setY, setIsVisible, height, setHeight }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 0;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isDownSwipe = distance > minSwipeDistance;
    const isUpSwipe = distance < -minSwipeDistance;
    if (isDownSwipe || isUpSwipe)
      console.log("swipe", isUpSwipe ? "down" : "up");
    // add your conditional logic here
    if (isUpSwipe) {
      console.log("idiot");
    }
    if (isDownSwipe) {
      setY(725);
    }
  };
  useEffect(() => {
    if (y > 400) {
      setIsVisible(true);
    } else if (y < 50) {
      setIsVisible(false);
    }
  }, [y]);

  const handleSwiping = (e) => {
    const desiredYBottom = 725;
    const desiredYTop = 49;
    const swipeY = e.touches[0].clientY - 118;
    // setTouchEnd();

    setY(
      swipeY < desiredYTop
        ? desiredYTop
        : desiredYBottom < swipeY
        ? desiredYBottom
        : swipeY
    );
  };

  return (
    <>
      <div
        className="bg-white"
        style={{
          transform: `translateY(${y}px)`,
          height: `${y - height}px`,
        }}
      >
        <div className="space-x-3 pt-2 absolute right-0 -top-12 ">
          <button className="rounded-full bg-slate-300 p-2">
            <MdEditCalendar />
          </button>
          <button className="rounded-2xl bg-black text-white px-3 py-1">
            Log Items
          </button>
        </div>
        <div>
          <div className="flex justify-center">
            <button
              onTouchMove={handleSwiping}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              // Use touch start and touch end events to compare the
              // y position to see if you are moving up or down.

              // Maybe store the y position in a state variable for comparison.
              // onTouchStart={}
              // onTouchEnd={}
              className="flex justify-center items-center bg-white pt-2 px-60"
            >
              <SliderBar />
            </button>
          </div>

          <div className="pt-2 ">
            <SliderIcons />
          </div>
        </div>
      </div>
      <div className="bg-white h-[900px] "></div>
    </>
  );
};

const SliderBar = () => {
  return <div className="rounded w-8 bg-slate-300 h-2 "></div>;
};

const SliderIcons = () => {
  return (
    <>
      <div className="bg-white flex items-center justify-between space-x-3 overflow-auto scrollbar-hide  p-3 ">
        <div className="flex flex-col">
          <button className="flex items-center">
            <BiBarcodeReader /> <p className="w-20">Barcode</p>
          </button>
          <div className="w-full bg-black h-1 my-2.5 hidden"></div>
        </div>
        <div className="flex flex-col">
          <button className="flex items-center">
            <AiOutlineSearch />
            <p className="w-16">Search</p>
          </button>
          <div className="w-full bg-black h-1 my-2.5 hidden"></div>
        </div>
        <div className="flex flex-col">
          <button className="flex items-center">
            <MdPlaylistAdd />
            <p className="w-24">Quick Add</p>
          </button>
          <div className="w-full bg-black h-1 my-2.5 hidden"></div>
        </div>

        <div className="flex flex-col">
          <button className="flex items-center">
            <FaRobot />
            <p className="w-24">AI Describe</p>
          </button>
          <div className="w-full bg-black h-1 my-2.5 hidden"></div>
        </div>

        <div className="flex flex-col">
          <button className="flex items-center">
            <RiFridgeLine />
            <p className="w-24">Custom</p>
          </button>
          <div className="w-full bg-black h-1 my-2.5 hidden"></div>
        </div>

        <div className="flex flex-col">
          <button className="flex items-center">
            <BiBook />
            <p className="w-24">Recipe</p>
          </button>
          <div className="w-full bg-black h-1 my-2.5 hidden"></div>
        </div>
      </div>
      <div className="w-full bg-slate-500 h-1.5 absolute top-[229px] hidden"></div>
    </>
  );
};

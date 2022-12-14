import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineFire } from "react-icons/ai";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsDot } from "react-icons/bs";

export const FoodSearchHeader = ({
  isVisible,
  setIsModalVisible,
  reducedCalories,
  reducedProtein,
  reducedCarbs,
  reducedFats,
  nutritionData,
  scrollPosition,
  setScrollPosition,
}) => {
  const options = {
    weekday: "long",
  };
  const today = new Date();
  const hours = ((today.getHours() + 11) % 12) + 1;

  return (
    <div>
      <header>
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
      </header>

      <MacroProgressBars
        reducedCalories={reducedCalories}
        reducedProtein={reducedProtein}
        reducedFats={reducedFats}
        reducedCarbs={reducedCarbs}
        scrollPosition={scrollPosition}
        setScrollPosition={setScrollPosition}
        nutritionData={nutritionData}
      />

      {isVisible ? (
        <div className="border-b border-solid border-slate-300 fixed top-20 w-full">
          <div className="flex justify-center -space-x-11">
            <BsDot
              size={30}
              color={scrollPosition > 200 ? "black" : "lightgray"}
            />
            <BsDot
              size={30}
              color={scrollPosition > 200 ? "lightgray" : "black"}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

const MacroProgressBars = ({
  reducedCalories,
  reducedProtein,
  reducedCarbs,
  reducedFats,
  scrollPosition,
  setScrollPosition,
  nutritionData,
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 150;
  const distance = touchStart - touchEnd;
  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < minSwipeDistance;

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (scrollPosition > 200 && isLeftSwipe) {
      document.getElementById("macroProgressBars").scrollTo(500, 0);
    } else if (scrollPosition < 300 && isRightSwipe) {
      document.getElementById("macroProgressBars").scrollTo(0, 0);
    }
  };

  const handleSwiping = (e) => {
    const swipeX = e.touches[0].clientX;
    setTouchEnd(swipeX);
  };

  const totalCalories = 1987;
  const totalProtein = 206;
  const totalCarbs = 140;
  const totalFats = 66;

  const completedDailyMacro = 100;

  const caloriePercentage = Math.round((reducedCalories / totalCalories) * 100);

  const proteinPercentage = Math.round((reducedProtein / totalProtein) * 100);

  const carbsPercentage = Math.round((reducedCarbs / totalCarbs) * 100);

  const fatsPercentage = Math.round((reducedFats / totalFats) * 100);
  return (
    <section
      className="overflow-x-scroll scrollbar-hide"
      id="macroProgressBars"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={handleSwiping}
      onScroll={handleScroll}
    >
      <MacroProgressBarsLeft
        reducedCalories={reducedCalories}
        reducedProtein={reducedProtein}
        reducedFats={reducedFats}
        reducedCarbs={reducedCarbs}
        totalCalories={totalCalories}
        totalProtein={totalProtein}
        totalCarbs={totalCarbs}
        totalFats={totalFats}
        caloriePercentage={caloriePercentage}
        proteinPercentage={proteinPercentage}
        carbsPercentage={carbsPercentage}
        fatsPercentage={fatsPercentage}
        completedDailyMacro={completedDailyMacro}
        nutritionData={nutritionData}
      />
      <MacroProgressBarsTotals
        reducedCalories={reducedCalories}
        reducedProtein={reducedProtein}
        reducedFats={reducedFats}
        reducedCarbs={reducedCarbs}
        totalCalories={totalCalories}
        caloriePercentage={caloriePercentage}
        proteinPercentage={proteinPercentage}
        carbsPercentage={carbsPercentage}
        fatsPercentage={fatsPercentage}
        completedDailyMacro={completedDailyMacro}
      />
    </section>
  );
};

const MacroProgressBarsLeft = ({
  reducedCalories,
  reducedProtein,
  reducedCarbs,
  reducedFats,
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFats,
  caloriePercentage,
  proteinPercentage,
  carbsPercentage,
  fatsPercentage,
  completedDailyMacro,
  nutritionData,
}) => {

  return (
    <div className="flex justify-evenly  relative left-[500px] top-5 w-full">
      <div className="w-full px-2">
        <div className="flex space-x-1">
          <AiOutlineFire />
          <p>
            {totalCalories >= reducedCalories
              ? totalCalories - reducedCalories
              : "0"}{" "}
            Left
          </p>
        </div>
        <div className="w-full h-1 bg-slate-300">
          <div
            className="h-1 bg-blue-600"
            style={{
              width: `${
                caloriePercentage >= completedDailyMacro
                  ? 0 + "%"
                  : completedDailyMacro - caloriePercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full px-2">
        P {totalProtein >= reducedProtein ? totalProtein - reducedProtein : "0"}{" "}
        Left
        <div className={"w-full h-1 bg-slate-300"}>
          <div
            className="h-1 bg-orange-500"
            style={{
              width: `${
                proteinPercentage >= completedDailyMacro
                  ? 0 + "%"
                  : completedDailyMacro - proteinPercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full px-2">
        F {totalFats >= reducedFats ? totalFats - reducedFats : "0"} Left
        <div className={"w-full h-1 bg-slate-300"}>
          <div
            className="h-1 bg-amber-400"
            style={{
              width: `${
                fatsPercentage >= completedDailyMacro
                  ? 0 + "%"
                  : completedDailyMacro - fatsPercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full px-2">
        C {totalCarbs >= reducedCarbs ? totalCarbs - reducedCarbs : "0"} Left
        <div className={"w-full h-1 bg-slate-300"}>
          <div
            className="h-1 bg-green-700"
            style={{
              width: `${
                carbsPercentage >= completedDailyMacro
                  ? 0 + "%"
                  : completedDailyMacro - carbsPercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const MacroProgressBarsTotals = ({
  reducedCalories,
  reducedProtein,
  reducedCarbs,
  reducedFats,
  totalCalories,
  caloriePercentage,
  proteinPercentage,
  carbsPercentage,
  fatsPercentage,
  completedDailyMacro,
}) => {
  return (
    <div className="flex justify-evenly   w-full ">
      <div className="w-full px-2">
        <div className="flex space-x-1">
          <AiOutlineFire />
          <p>
            {reducedCalories}/{totalCalories}
          </p>
        </div>
        <div className="w-full h-1 bg-slate-300">
          <div
            className="h-1 bg-blue-600"
            style={{
              width: `${
                caloriePercentage > completedDailyMacro
                  ? "100%"
                  : caloriePercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full px-2">
        P {reducedProtein}/206
        <div className={"w-full h-1 bg-slate-300"}>
          <div
            className="h-1 bg-orange-500"
            style={{
              width: `${
                proteinPercentage > completedDailyMacro
                  ? "100%"
                  : proteinPercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full px-2">
        F {reducedFats}/66
        <div className={"w-full h-1 bg-slate-300"}>
          <div
            className="h-1 bg-amber-400"
            style={{
              width: `${
                fatsPercentage > completedDailyMacro
                  ? "100%"
                  : fatsPercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full px-2">
        C {reducedCarbs}/140
        <div className={"w-full h-1 bg-slate-300"}>
          <div
            className="h-1 bg-green-700"
            style={{
              width: `${
                carbsPercentage > completedDailyMacro
                  ? "100%"
                  : carbsPercentage + "%"
              }`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

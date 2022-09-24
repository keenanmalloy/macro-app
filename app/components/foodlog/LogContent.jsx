import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FcPieChart } from "react-icons/fc";

export const LogContent = ({ nutritionData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const nutritionDataByHour = Array.from({ length: 24 }, () => []);
  !nutritionData
    ? null
    : nutritionData.forEach((item) => {
        const hour = new Date(item.timestamp).getHours();
        nutritionDataByHour[hour].push(item);
      });

  nutritionDataByHour.forEach((hour) => {
    const hourIndex = nutritionDataByHour.indexOf(hour);
    nutritionDataByHour[hourIndex] = {
      time: hourIndex,
      nutritionData: hour,
    };
  });

  console.log(nutritionDataByHour);

  const totalCalories = !nutritionData
    ? null
    : nutritionData.map((food) => food.calories).reduce((a, b) => a + b, 0);
  const totalProtein = !nutritionData
    ? null
    : nutritionData.map((food) => food.protein).reduce((a, b) => a + b, 0);
  const totalCarbs = !nutritionData
    ? null
    : nutritionData.map((food) => food.carbs).reduce((a, b) => a + b, 0);
  const totalFats = !nutritionData
    ? null
    : nutritionData.map((food) => food.fats).reduce((a, b) => a + b, 0);

  return (
    <div className="scrollbar-hide  flex flex-col  pt-32 pb-48">
      {nutritionDataByHour.map((hour) => (
        <ContentRow
          key={hour.time}
          hour={hour.time}
          time={
            hour.time === 0
              ? "12am"
              : hour.time + "am"
              ? hour.time > 12
                ? hour.time - 12 + "pm"
                : hour.time + "am"
              : null
          }
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          nutritionData={hour.nutritionData.map((nutrition, i) => {
            return (
              <div
                key={i}
                className="flex flex-row justify-between items-center border-y border-slate-300 border-solid pl-5"
              >
                <div className="flex flex-row items-center">
                  <img
                    src={nutrition.image}
                    alt="food"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-sm font-medium truncate">
                      {nutrition.name.replace(/(^\w)|([-\s]\w)/g, (match) =>
                        match.toUpperCase()
                      )}
                    </p>
                    <div className="text-xs text-gray-400 flex">
                      {nutrition.servingweightgrams && (
                        <p className="px-1">
                          {Math.round(nutrition.servingweightgrams)} g
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium w-full py-2 pr-3 flex flex-col items-end">
                  {nutrition.calories}
                  <p>kcal</p>
                </div>
              </div>
            );
          })}
        />
      ))}

      {/* {isExpanded ? (
        <ContentRow
          time="12 AM"
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          nutritionData={
            <div className="flex flex-row justify-between items-center border-y border-slate-300 border-solid pl-5 bg-slate-100">
              <div className="flex flex-row items-center">
                <FcPieChart size={40} />
                <div className="flex flex-col ml-2">
                  <p className="text-sm font-medium truncate">
                    {nutritionData.length} Food Summary
                  </p>
                  <p className="text-xs text-gray-400 flex truncate">
                    {totalProtein}g Pro, {totalFats}g Fat, {totalCarbs}g Carb
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium pl-28 pr-3 py-1 flex flex-col items-end">
                <p>{totalCalories}</p>
                <p>kcal</p>
              </div>
            </div>
          }
        />
      ) : (
        <ContentRow
          time="12 AM"
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          nutritionData={
            !nutritionData
              ? null
              : //filter the nutrition data by the time
                nutritionData.map((nutrition, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-row justify-between items-center border-y border-slate-300 border-solid pl-5"
                    >
                      <div className="flex flex-row items-center">
                        <img
                          src={nutrition.image}
                          alt="food"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col ml-2">
                          <p className="text-sm font-medium truncate">
                            {nutrition.name.replace(
                              /(^\w)|([-\s]\w)/g,
                              (match) => match.toUpperCase()
                            )}
                          </p>
                          <div className="text-xs text-gray-400 flex">
                            {nutrition.servingweightgrams && (
                              <p className="px-1">
                                {Math.round(nutrition.servingweightgrams)} g
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium w-full py-2 pr-3 flex flex-col items-end">
                        {nutrition.calories}
                        <p>kcal</p>
                      </div>
                    </div>
                  );
                })
          }
        />
      )}
      <ContentRow time="1 AM" />
      <ContentRow time="2 AM" />
      <ContentRow time="3 AM" />
      <ContentRow time="4 AM" />
      <ContentRow time="5 AM" />
      <ContentRow time="6 AM" />
      <ContentRow time="7 AM" />
      <ContentRow time="8 AM" />
      <ContentRow time="9 AM" />
      <ContentRow time="10 AM" />
      <ContentRow time="11 AM" />
      <ContentRow time="12 AM" />
      <ContentRow time="1 PM" />
      <ContentRow time="2 PM" />
      <ContentRow time="3 PM" />
      <ContentRow time="4 PM" /> */}
      {/* <ContentRow time="1 AM" nutritionData="hello" /> */}
      {/* <article className="relative bg-blue-600 p-5">
        <div>hello</div>
        <div className="bg-white absolute top-0 bottom-0 right-0 px-2 border-l border-solid border-slate-200 w-16">
          <p>1 AM</p>
        </div>
      </article> */}
    </div>
  );
};

const ContentRow = ({ time, isExpanded, nutritionData, setIsExpanded }) => {
  return (
    <article className="relative  flex justify-between w-full ">
      <div className="w-full">{nutritionData}</div>
      <div className="bg-white  px-2 border-l border-solid border-slate-200 w-16 text-center flex-col flex justify-center relative">
        <p className="text-xs absolute -top-2 left-0 right-0 text-center">
          {time}
        </p>
        <div className="flex flex-col items-center justify-center">
          {!isExpanded ? (
            <button className="p-2" onClick={() => setIsExpanded(true)}>
              <MdExpandMore size={12} />
              <MdExpandLess size={12} />
            </button>
          ) : (
            <button className="p-2" onClick={() => setIsExpanded(false)}>
              <MdExpandLess size={12} />
              <MdExpandMore size={12} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { FcPieChart } from "react-icons/fc";

export const LogContent = ({ nutritionData }) => {
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

  return (
    <div className="scrollbar-hide  flex flex-col  pt-32 pb-32">
      {nutritionDataByHour.map((hour) => (
        <ContentRow
          key={hour.time}
          id={hour.time}
          hour={hour}
          time={
            hour.time === 0
              ? "12 AM"
              : hour.time + " AM"
              ? hour.time > 12
                ? hour.time - 12 + " PM"
                : hour.time + " AM"
              : null
          }
          isHidden={!hour.nutritionData.length}
        />
      ))}
    </div>
  );
};

const ContentRow = ({ time, isHidden, id, hour }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = (id) => {
    setIsExpanded(!isExpanded);
  };
  return (
    <article
      className="flex justify-between w-full min-h-[60px]"
      key={id}
      id={id}
    >
      <div className="w-full ">
        {isExpanded
          ? hour.nutritionData.slice(0, 1).map((i) => {
              return (
                <div
                  className="flex flex-row justify-between items-center border-y border-slate-300 border-solid pl-3 bg-slate-100"
                  key={i}
                >
                  <div className="flex flex-row items-center">
                    <FcPieChart size={40} />
                    <div className="flex flex-col ml-2">
                      <p className="text-sm font-medium truncate">
                        {hour.nutritionData.length} Food Summary
                      </p>
                      <p className="text-xs text-gray-400 flex truncate">
                        {hour.nutritionData.reduce((acc, pro) => {
                          return acc + pro.protein;
                        }, 0)}
                        g Pro,
                        {hour.nutritionData.reduce((acc, fat) => {
                          return acc + fat.fats;
                        }, 0)}
                        g Fat,
                        {hour.nutritionData.reduce((acc, carbs) => {
                          return acc + carbs.carbs;
                        }, 0)}
                        g Carb
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-medium pl-28 pr-3 py-1 flex flex-col items-end">
                    {hour.nutritionData.reduce((acc, cal) => {
                      return acc + cal.calories;
                    }, 0)}
                    <p className="text-xs text-gray-400">kcal</p>
                  </div>
                </div>
              );
            })
          : hour.nutritionData.map((nutrition, i) => {
              return (
                <div>
                  <div
                    id={hour.time}
                    key={i}
                    className="flex  items-center border-y border-slate-300 border-solid pl-3"
                  >
                    <div className="flex items-center">
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
                      {nutrition.calories} <p>kcal</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="bg-white  border-l border-solid border-slate-200 w-14 flex flex-col items-center ">
        <p className="text-xs text-center">{time}</p>
        {isHidden ? null : (
          <div className="flex flex-col items-center h-full justify-center">
            {!isExpanded ? (
              <button className="p-2" onClick={() => handleExpand(id)}>
                <MdExpandMore size={12} />
                <MdExpandLess size={12} />
              </button>
            ) : (
              <button className="p-2" onClick={() => handleExpand(id)}>
                <MdExpandLess size={12} />
                <MdExpandMore size={12} />
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

import React from "react";

export const ProgramProgressBar = ({ step, setStep }) => {
  return (
    <div>
      <div className="flex justify-center space-x-1 p-3">
        <Bar isFull={step >= 0} />

        <Bar isFull={step >= 1} />

        <Bar isFull={step >= 2} />
        <Bar isFull={step >= 3} />
        <Bar isFull={step >= 4} />
        <Bar isFull={step >= 5} />
      </div>
    </div>
  );
};

const Bar = ({ isFull }) => {
  return (
    <div className="w-20 flex bg-gray-200 h-2.5 dark:bg-gray-700">
      <div
        className="bg-green-400 h-2.5"
        style={{ width: isFull ? "100%" : "0%" }}
      ></div>
    </div>
  );
};

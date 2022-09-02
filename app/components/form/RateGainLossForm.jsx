import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export const RatetGainLossForm = () => {
  const [value, setValue] = useState(0.05);
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <form action="">
      <h2 className="font-bold text-3xl p-2">At what rate?</h2>
      <p className="p-2">Set your desired rate of weight gain.</p>
      <div className="flex justify-center pt-60">
        <Box sx={{ width: 350 }}>
          <Slider
            aria-label="Small steps"
            defaultValue={0.05}
            getAriaValueText={valuetext}
            step={0.01}
            marks
            onChangeCommitted={(e, value) => setValue(value)}
            min={0.05}
            max={0.75}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
      <div className="flex flex-col justify-center items-center leading-normal">
        <p>+{value} lbs (0.00 % BW) / Week</p>
        <p>+{value * 4} lbs (0.00 % BW) / Month</p>
      </div>
    </form>
  );
};

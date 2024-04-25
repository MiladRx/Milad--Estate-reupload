import React, { useState } from "react";
import Slider, { SliderTrack, SliderThumb } from "react-slider";

const MIN = 0;
const MAX = 50000000;

export default function RangeSlider() {
  const [values, setValues] = useState([MIN, MAX]);
  const [startValue, setStartValue] = useState(MIN);
  const [endValue, setEndValue] = useState(MAX);
  return (
    <div>
      <Slider
        className="w-[45rem] max-w-lg bg-slate-500 mt-3"
        onChange={(newValues) => {
          const [newStartValue, newEndValue] = newValues;
          setValues(newValues);
          setStartValue(newStartValue);
          setEndValue(newEndValue);
        }}
        value={values}
        min={MIN}
        max={MAX}
        renderTrack={(props, state) => (
          <div
            {...props}
            style={{
              ...props.style,
              backgroundColor: state.index === 2 ? "#D3DEE8" : "#D3DEE8",
              height: "2px",
            }}
          />
        )}
        renderThumb={(props, state) => (
          <div
            {...props}
            style={{
              ...props.style,
              top:"-7px",
              height: "15px",
              width: "15px",
              borderRadius:"50%",
              backgroundColor: "#C4C4C4",
            }}
          />
        )}
      />
      <div className="flex w-full justify-between pt-5 text-gray-400">
        <p>{startValue} Kr.</p>
        <p>{endValue} Kr.</p>
      </div>
    </div>
  );
}

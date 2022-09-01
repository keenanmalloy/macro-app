import React, { useState } from "react";

export const HeightForm = ({ step, setStep }) => {
  const [isCm, setIsCm] = useState(false);

  return (
    <div>
      <form>
        <h2 className="font-bold text-3xl p-2">What is your height?</h2>
        <p className="p-2 leading-snug">
          Your height will be used to better estimate your caloric demands.
        </p>
        <div className="flex justify-around pt-10">
          <button
            className="border-2 border-solid border-slate-600 h-20 w-full focus:bg-black focus:text-white decoration-2 focus:underline focus:underline-offset-4 z-50"
            type="button"
            onClick={() => {
              setIsCm(false);
            }}
          >
            Feet & Inches
          </button>
          <button
            className="border-2 border-solid border-slate-600 h-20 w-full focus:bg-black focus:text-white  decoration-2 focus:underline focus:underline-offset-4 z-50"
            type="button"
            onClick={() => {
              setIsCm(true);
            }}
          >
            Centimeters
          </button>
        </div>
        <div
          className={
            "flex justify-center items-center fixed top-0 right-0 bottom-0 left-0"
          }
        >
          <select className={!isCm ? "h-14" : "hidden"}>
            <option value="1">4 ft</option>
            <option value="2">4 ft 1 in</option>
            <option value="3">4 ft 2 in</option>
            <option value="4">4 ft 3 in</option>
            <option value="5">4 ft 4 in</option>
            <option value="6">4 ft 5 in</option>
            <option value="7">4 ft 6 in</option>
            <option value="8">4 ft 7 in</option>
            <option value="9">4 ft 8 in</option>
            <option value="10">4 ft 9 in</option>
            <option value="11">4 ft 10 in</option>
            <option value="12">4 ft 11 in</option>
            <option value="13">5 ft</option>
            <option value="14">5 ft 1 in</option>
            <option value="15">5 ft 2 in</option>
            <option value="16">5 ft 3 in</option>
            <option value="17">5 ft 4 in</option>
            <option value="18">5 ft 5 in</option>
            <option value="19">5 ft 6 in</option>
            <option value="20">5 ft 7 in</option>
            <option value="20">5 ft 8 in</option>
            <option value="20">5 ft 9 in</option>
            <option value="20">5 ft 10 in</option>
            <option value="20">5 ft 11 in</option>
            <option value="20">6 ft</option>
            <option value="20">6 ft 1 in</option>
            <option value="20">6 ft 2 in</option>
            <option value="20">6 ft 3 in</option>
            <option value="20">6 ft 4 in</option>
            <option value="20">6 ft 5 in</option>
            <option value="20">6 ft 6 in</option>
            <option value="20">6 ft 7 in</option>
            <option value="20">6 ft 8 in</option>
            <option value="20">6 ft 9 in</option>
            <option value="20">6 ft 10 in</option>
            <option value="20">6 ft 11 in</option>
            <option value="20">7 ft</option>
          </select>
          <select className={isCm ? "h-14" : "hidden"}>
            <option value="1">122 cm </option>
            <option value="2">123 cm</option>
            <option value="3">124 cm</option>
            <option value="4">125 cm</option>
            <option value="4">126 cm</option>
            <option value="4">127 cm</option>
            <option value="4">128 cm</option>
            <option value="4">129 cm</option>
            <option value="4">130 cm</option>
            <option value="4">131 cm</option>
            <option value="4">132 cm</option>
            <option value="4">133 cm</option>
            <option value="4">134 cm</option>
            <option value="4">135 cm</option>
            <option value="4">136 cm</option>
            <option value="4">137 cm</option>
            <option value="4">138 cm</option>
            <option value="4">139 cm</option>
            <option value="4">140 cm</option>
            <option value="4">141 cm</option>
            <option value="4">142 cm</option>
            <option value="4">143 cm</option>
            <option value="4">144 cm</option>
            <option value="4">145 cm</option>
            <option value="4">146 cm</option>
            <option value="4">147 cm</option>
            <option value="4">148 cm</option>
            <option value="4">149 cm</option>
            <option value="4">150 cm</option>
            <option value="4">151 cm</option>
            <option value="4">152 cm</option>
            <option value="4">153 cm</option>
            <option value="4">154 cm</option>
            <option value="4">155 cm</option>
            <option value="4">156 cm</option>
            <option value="4">157 cm</option>
            <option value="4">158 cm</option>
            <option value="4">159 cm</option>
            <option value="4">160 cm</option>
            <option value="4">161 cm</option>
            <option value="4">162 cm</option>
            <option value="4">163 cm</option>
            <option value="4">164 cm</option>
            <option value="4">165 cm</option>
            <option value="4">166 cm</option>
            <option value="4">167 cm</option>
            <option value="4">168 cm</option>
            <option value="4">169 cm</option>
            <option value="4">170 cm</option>
            <option value="4">171 cm</option>
            <option value="4">172 cm</option>
            <option value="4">173 cm</option>
            <option value="4">174 cm</option>
            <option value="4">175 cm</option>
            <option value="4">176 cm</option>
            <option value="4">177 cm</option>
            <option value="4">178 cm</option>
            <option value="4">179 cm</option>
            <option value="4">180 cm</option>
            <option value="4">181 cm</option>
            <option value="4">182 cm</option>
            <option value="4">183 cm</option>
            <option value="4">184 cm</option>
            <option value="4">185 cm</option>
            <option value="4">186 cm</option>
            <option value="4">187 cm</option>
            <option value="4">188 cm</option>
            <option value="4">189 cm</option>
            <option value="4">190 cm</option>
            <option value="4">191 cm</option>
            <option value="4">192 cm</option>
            <option value="4">193 cm</option>
            <option value="4">194 cm</option>
            <option value="4">195 cm</option>
            <option value="4">196 cm</option>
            <option value="4">197 cm</option>
            <option value="4">198 cm</option>
            <option value="4">199 cm</option>
            <option value="4">200 cm</option>
            <option value="4">201 cm</option>
            <option value="4">202 cm</option>
            <option value="4">203 cm</option>
            <option value="4">204 cm</option>
            <option value="4">205 cm</option>
            <option value="4">206 cm</option>
            <option value="4">207 cm</option>
            <option value="4">208 cm</option>
            <option value="4">209 cm</option>
            <option value="4">210 cm</option>
            <option value="4">211 cm</option>
            <option value="4">212 cm</option>
            <option value="4">213 cm</option>
          </select>
        </div>
      </form>
    </div>
  );
};

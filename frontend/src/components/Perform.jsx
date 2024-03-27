"use client";

import { useState } from "react";
import { PERFORM_YEAR_BUTTONS, PERFROM_STATS } from "@/app/needed/constans";
import { PerformIcon } from "../app/needed/PerformIcon";

export const Perform = () => {
  const [activeYear, setActiveYear] = useState(PERFORM_YEAR_BUTTONS[0]);

  return (
    <section id="perform" className="py-10">
      <div className="container ">
        <div className="text-def_black text-4xl font-bold">Наши показатели</div>
        <div className="mt-14 flex gap-6">
          {PERFORM_YEAR_BUTTONS.map((year) => (
            <button
              key={year}
              className={`py-1 px-7 rounded-sm ${
                activeYear === year
                  ? "text-lg bg-prime text-white"
                  : " text-lg bg-gray-300 text-base-color hover:scale-105 transition-all"
              }`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          {PERFROM_STATS.map((item) => (
            <PerfromItem
              key={item.id}
              title={item.title}
              number={item.number}
              unit={item.unit}
              icon={item.icon}
              activeYear={activeYear}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PerfromItem = ({ title, icon, number, unit, activeYear }) => {
  return (
    <div className="pb-6 pt-2 px-3 border-2 border-prime bg-white transition-all w-[168px] hover:scale-105 hover:shadow-main shadow-prime">
      <div className="flex items-center justify-center">
        <PerformIcon key={icon} icon={icon} className="w-12" />
      </div>
      <div className="mt-3 text-prime text-center text-xl font-semibold">
        {number[activeYear]}
      </div>
      <div className="text-prime text-center text-base font-semibold">
        {unit}
      </div>
      <div className="mt-3 text-def_black text-center text-sm font-normal leading-tight">
        {title}
      </div>
    </div>
  );
};

import { IoRainy } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa6";
import { IoPartlySunny } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { MdThunderstorm } from "react-icons/md";

const data = [
  {
    time: "6:00 AM",
    icon: <IoRainy />,
    temp: "25°C",
  },
  {
    time: "6:00 AM",
    icon: <IoRainy />,
    temp: "25°C",
  },
  {
    time: "6:00 AM",
    icon: <IoRainy />,
    temp: "25°C",
  },
  {
    time: "6:00 AM",
    icon: <IoRainy />,
    temp: "25°C",
  },
  {
    time: "6:00 AM",
    icon: <IoRainy />,
    temp: "25°C",
  },
  {
    time: "6:00 AM",
    icon: <IoRainy />,
    temp: "25°C",
  },
];

export default function DayForeCast() {
  return (
    <div>
      <div className="h-64 bg-[#202b3b] ml-11 rounded-2xl">
        <div className="p-3 text-gray-400 font-mono ml-6 pt-7">
          Today&apos;s Forecast
        </div>
        <div className="flex">
          <div className="flex justify-around w-full mt-4">
            {data.map((card, index) => {
              return (
                <div
                  key={index}
                  className="single time border-r-2 border-slate-300  w-32 text-white"
                >
                  <div className="text-center mr-6 text-xl font-bold ">
                    {card.time}
                  </div>
                  <div className="text-white text-6xl text-center ml-5">
                    {card.icon}
                  </div>
                  <div className="text-center mt-5 text-xl font-bold mr-4">
                    {card.temp}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

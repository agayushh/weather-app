import { FaSun } from "react-icons/fa";
import { IoRainy } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa6";

const currentDayForecast = [
  {
    time: "6:00 AM",
    icon: <IoRainy />,
    temp: "25°C",
  },
  {
    time: "6:00 AM",
    icon: <FaCloud />,
    temp: "25°C",
  },
  {
    time: "6:00 AM",
    icon: <FaRegSnowflake />,
    temp: "25°C",
  },
];

export default function CitySelected() {
  return (
    <div className="h-full w-full ml-10 mt-56 mr-7 rounded-2xl">
      <div className="border-b-2 border-slate-400 flex justify-between ">
        <div>
          <p className="text-5xl p-5 text-white font-bold">Delhi</p>
          <p className="text-slate-400 ml-5 font-mono text-lg">
            Chances of rain: 0%
          </p>
          <p className="text-5xl text-white ml-5 mt-6 font-bold mb-4">31°</p>
        </div>
        <FaSun className="text-7xl mr-20 text-white mt-15" />
      </div>
      <div className="border-b-2 border-slate-400">
        <p className="text-slate-400 text-lg ml-5 mt-5 font-mono ">
          Today&apos; s Forecast
        </p>
        <div className="flex justify-around mt-4 mb-5 ">
          {currentDayForecast.map((forecast, index) => (
            <div
              key={index}
              className="single time border-r-2 border-slate-300  w-32 text-white"
            >
              <div className="text-center mr-12 text-xl font-bold ">
                {forecast.time}
              </div>
              <div className="text-white text-6xl text-center">
                {forecast.icon}
              </div>
              <div className="text-center mt-5 text-xl font-bold mr-14">
                {forecast.temp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

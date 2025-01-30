import { IoRainy } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa6";
import { IoPartlySunny } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { MdThunderstorm } from "react-icons/md";
import { PiSunFill } from "react-icons/pi";

export default function SevenDayForecast() {
  const data = [
    {
      day: "Today",
      icon: <IoRainy />,
      weather: "Rainy",
      maxTemp: 32,
      minTemp: 28,
    },
    {
      day: "Today",
      icon: <FaCloud />,
      weather: "Rainy",
      maxTemp: 32,
      minTemp: 28,
    },
    {
      day: "Today",
      icon: <FaRegSnowflake />,
      weather: "Rainy",
      maxTemp: 32,
      minTemp: 28,
    },
    {
      day: "Today",
      icon: <IoPartlySunny />,
      weather: "Rainy",
      maxTemp: 32,
      minTemp: 28,
    },
    {
      day: "Today",
      icon: <LuWind />,
      weather: "Rainy",
      maxTemp: 32,
      minTemp: 28,
    },
    {
      day: "Today",
      icon: <MdThunderstorm />,
      weather: "Rainy",
      maxTemp: 32,
      minTemp: 28,
    },
    {
      day: "Today",
      icon: <PiSunFill />,
      weather: "Rainy",
      maxTemp: 32,
      minTemp: 28,
    },
  ];
  return (
    <div className="text-white bg-[#202b3b] h-[88%] w-full p-5 rounded-2xl mr-10 mt-10 hover:border hover:border-sky-300">
      <p className="text-xl text-slate-300 mt-10 ml-5 font-mono">
        7 DAYS FORECAST
      </p>
      <div>
        {data.map((forecastCard, index) => (
          <div
            key={index}
            className="text-lg font-mono text-slate-400 border-b-2 border-slate-400"
          >
            <div className="flex justify-between mx-9 mt-8 mb-5">
              <div className="text-slate-400 font-mono text-lg mt-2 ">
                {forecastCard.day}
              </div>

              <div className="flex ">
                <div className="text-5xl mr-3 text-gray-700">
                  {forecastCard.icon}
                </div>
                <div className="mt-2">{forecastCard.weather}</div>
              </div>
              <div className="flex mt-2">
                <div className="text-white font-bold">
                  {forecastCard.maxTemp}
                </div>{" "}
                /<div>{forecastCard.minTemp}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

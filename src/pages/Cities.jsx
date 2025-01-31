import { IoRainy } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { IoPartlySunny } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CitySelected from "../components/CitySelected";
import Input from "../components/Input";

export default function Cities() {
  const [time, setTime] = useState("");

  const data = [
    {
      cityName: "Delhi",
      icon: <FaCloud />,
      localTime: time,
      temp: "31°",
    },
    {
      cityName: "Delhi",
      icon: <IoPartlySunny />,
      localTime: time,
      temp: "31°",
    },
    {
      cityName: "Delhi",
      icon: <IoRainy />,
      localTime: time,
      temp: "31°",
    },
    {
      cityName: "Delhi",
      icon: <LuWind />,
      localTime: time,
      temp: "31°",
    },
  ];

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(currentTime);
    };
    updateTimer();
    const interval = setInterval(() => {
      updateTimer();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-[#0b131e] h-[100vh] w-full">
        <div className="flex">
          <Navbar />
          <div className="mt-8">
          <Input />
            <div>
              {data.map((cityCard, index) => (
                <div
                  key={index}
                  className="bg-[#202b3b] h-40 ml-12 mt-10 rounded-2xl hover:border hover:border-sky-300"
                >
                  <div className="text-white flex justify-between ">
                    <div className="flex mx-20">
                      <div className="text-7xl mt-9  mr-5">{cityCard.icon}</div>
                      <div className="mt-8">
                        <div className="text-4xl font-bold mr-20 mb-2">
                          {cityCard.cityName}
                        </div>
                        <div className="text-slate-400 font-mono ml-3 text-xl">
                          {cityCard.localTime}
                        </div>
                      </div>
                    </div>
                    <div className="mr-10 text-4xl mt-8 font-thin font-mono">
                      {cityCard.temp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CitySelected />
        </div>
      </div>
    </div>
  );
}

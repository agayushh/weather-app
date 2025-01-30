import { IoRainy } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa6";
import { IoPartlySunny } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { MdThunderstorm } from "react-icons/md";
import { PiSunFill } from "react-icons/pi";

export default function Cities() {
  const data = [
    {
      cityName: "Delhi",
      icon: <FaCloud />,
      time: Date().toLocaleLowerCase().split("/"),
      temp: "31°",
    },
  ];

  return (
    <div>
      <div className="bg-[#0b131e] h-[100vh] w-full">
        <div className="flex grow">
          <div className="flex items-center h-[100vh] ml-10">
            <div className="bg-[#202b3b] h-[95%] w-24 rounded-2xl">city</div>
          </div>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Search For Cities"
              className="bg-[#202b3b] w-[900px] ml-12 p-4 rounded-2xl text-white placeholder:text-slate-200 hover:border hover:border-sky-300"
            />
            <div>
              <div className="bg-[#202b3b] h-40 ml-12 mt-10 rounded-2xl">
                {data.map((cityCard, index) => (
                  <div key={index} className="text-white ">
                    <div>{cityCard.icon}</div>
                    <div>{cityCard.cityName}</div>
                    <div>{cityCard.temp}</div>
                    <div>{cityCard.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { TiWeatherCloudy } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { IoMapSharp } from "react-icons/io5";
import umbrella from "../assets/umbrella.png";
import CurrentCity from "../components/CurrentCity";
import DayForeCast from "../components/DayForeCast";
import AirConditions from "../components/AirConditions";
import SevenDayForecast from "../components/SevenDayForecast";
import Input from "../components/Input";

const navbarItems = [
  {
    name: "Weather",
    Icon: TiWeatherCloudy,
  },
  {
    name: "Cities",
    Icon: FaCity,
  },
  {
    name: "Maps",
    Icon: IoMapSharp,
  },
  {
    name: "Settings",
    Icon: IoIosSettings,
  },
];

export default function Dashboard() {
  return (
    <div className="bg-[#0b131e] h-[100vh] w-full">
      <div className="flex grow">
        <div className="flex items-center justify-center h-[100vh] ml-10">
          <div className="bg-[#202b3b] h-[95%] w-24 rounded-2xl p-2 flex justify-center">
            <div className="flex flex-col items-center gap-y-7">
              <img src={umbrella} alt="" className="mb-3" />
              {navbarItems.map(({ Icon, name }, index) => (
                <div
                  className="flex flex-col gap-1 items-center justify-center"
                  key={index}
                >
                  <Icon className="text-4xl text-white hover:scale-125 duration-500" />
                  <p className="text-white text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Input />
          <CurrentCity />
          <DayForeCast />
          <AirConditions />
        </div>
        <div className="flex grow items-center h-[100vh] ml-10">
          <SevenDayForecast />
        </div>
      </div>
    </div>
  );
}

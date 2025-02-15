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
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-[#0b131e] h-[100vh] w-full">
      <div className="flex grow">
        <Navbar />

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

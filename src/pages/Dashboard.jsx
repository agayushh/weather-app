import { TiWeatherCloudy } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { IoMapSharp } from "react-icons/io5";
import umbrella from "../assets/umbrella.png";
import { IoSearchOutline } from "react-icons/io5";
import CurrentCity from "../components/CurrentCity";

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

const Input = () => {
  return (
    <label className="bg-[#202b3b] w-[900px] ml-12 p-4 flex items-center text-white justify-center gap-2 rounded-2xl">
      <IoSearchOutline className="text-lg" />
      <input
        type="text"
        placeholder="Search For Cities"
        className="border-none outline-none flex grow bg-transparent"
      />
    </label>
  );
};

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
          {/* <input
            type="text"
            placeholder="Search For Cities"
            className="bg-[#202b3b] w-[900px] ml-12 p-4 rounded-2xl text-white placeholder:text-slate-200 hover:border hover:border-sky-300"
          /> */}
          <Input />
          <CurrentCity />
        </div>
        <div className="flex grow items-center h-[100vh] ml-10">
          <div className="text-white bg-[#202b3b] h-[88%] w-full p-5 rounded-2xl mr-10 mt-16 hover:border hover:border-sky-300">
            <p className="text-xl text-slate-300 mt-10 ml-5 font-mono">
              7 DAYS FORECAST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { IoMapSharp } from "react-icons/io5";
import umbrella from "../assets/umbrella.png";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

export default function Navbar() {
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
  return (
    <div>
      <div>
        <div className="flex items-center justify-center h-[100vh] ml-10 ">
          <div className="bg-[#202b3b] h-[95%] w-24 rounded-2xl p-2 flex justify-center ">
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
      </div>
    </div>
  );
}

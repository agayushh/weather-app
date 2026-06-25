import { IoMapSharp } from "react-icons/io5";
import umbrella from "../assets/umbrella.png";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navbarItems = [
    {
      name: "Weather",
      Icon: TiWeatherCloudy,
      path: "/dashboard",
    },
    {
      name: "Cities",
      Icon: FaCity,
      path: "/cities",
    },
    {
      name: "Maps",
      Icon: IoMapSharp,
      path: "/maps",
    },
    {
      name: "Settings",
      Icon: IoIosSettings,
      path: "/settings",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#202b3b]/95 backdrop-blur-md h-16 border-t border-slate-700/50 flex flex-row items-center justify-around px-4 z-50 md:relative md:w-24 md:h-auto md:self-stretch md:rounded-3xl md:flex-col md:justify-between md:py-10 md:border-t-0 md:border-r md:bg-[#202b3b]">
      {/* Brand logo (desktop only) */}
      <div className="hidden md:block">
        <Link to="/">
          <img src={umbrella} alt="Umbrella Logo" className="w-12 h-12 hover:scale-105 transition-transform" />
        </Link>
      </div>

      {/* Nav items */}
      <div className="flex flex-row w-full justify-around md:flex-col md:justify-around md:grow md:mt-10 md:mb-6 md:w-auto">
        {navbarItems.map(({ Icon, name, path }, index) => {
          const isActive = location.pathname === path;
          return (
            <Link
              to={path}
              className={`flex flex-col gap-1 items-center justify-center transition-all ${
                isActive ? "text-sky-400 scale-110 font-semibold" : "text-slate-400 hover:text-white"
              }`}
              key={index}
            >
              <Icon className="text-2xl md:text-3xl transition-transform duration-300" />
              <p className="text-[10px] md:text-xs font-mono">{name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

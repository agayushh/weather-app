import { IoRainy } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa6";
import { IoPartlySunny } from "react-icons/io5";
import { LuWind } from "react-icons/lu";
import { MdThunderstorm } from "react-icons/md";

export default function DayForeCast() {
  return (
    <div>
      <div className="h-80 bg-[#202b3b] ml-11 rounded-2xl">
        <div className="p-3 text-gray-400 font-mono ml-6 pt-7">
          Today&apos;s Forecast
        </div>
        <div>
          <div>6:00 AM</div>
        </div>
      </div>
    </div>
  );
}

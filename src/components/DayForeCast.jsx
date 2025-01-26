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
        <div className="flex">
          <div>
            <div className="single time border-r-2 border-slate-300  w-16">
              <div>6:00 AM</div>
              <div>
                <IoRainy />
              </div>
              <div>25°</div>
            </div>
          </div>
          <div>
            <div className="single time border-r-2 border-slate-300">
              <div>6:00 AM</div>
              <div>
                <IoRainy />
              </div>
              <div>25°</div>
            </div>
          </div>
          <div>
            <div className="single time border-r-2 border-slate-300">
              <div>6:00 AM</div>
              <div>
                <IoRainy />
              </div>
              <div>25°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

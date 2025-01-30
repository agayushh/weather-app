import { FaThermometerHalf } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function AirConditions() {
  return (
    <div>
      <div className="bg-[#202b3b] mt-5 ml-10 rounded-2xl h-64 p-5">
        <div className="flex justify-between mt-2">
          <p className="text-mg text-slate-400 font-mono ml-5">
            Air Conditions
          </p>
          <button className="bg-[#0095ff] mr-8 rounded-2xl py-1 w-28 text-white font-bold hover:bg-sky-500">
            See more
          </button>
        </div>

        <div className="flex m-5 justify-between">
          <div>
            <div className="flex ml-5">
              <FaThermometerHalf className="text-2xl text-slate-400 mr-2" />
              <div className="text-slate-400 text-xl">Real Feel</div>
            </div>
            <p className="ml-16 text-3xl text-white font-bold">29°C</p>
            <div className="flex ml-5 mt-4">
              <FaDroplet className="text-2xl text-slate-400 mr-2" />
              <div className="text-xl text-slate-400">Chances of Rain</div>
            </div>
            <p className="ml-16 text-3xl text-white font-bold">0</p>
          </div>
          <div className="mr-48">
            <div className="flex">
              <FaWind className="text-2xl text-slate-400 mr-2" />
              <div className="text-xl text-slate-400">Wind</div>
            </div>
            <p className="ml-9 text-2xl text-white font-bold">3 km/h</p>
            <div className="flex mt-4">
              <FaSun className="text-2xl text-slate-400 mr-2" />
              <div className="text-xl text-slate-400">UV Index</div>
            </div>
            <p className="ml-9 text-3xl text-white font-bold">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

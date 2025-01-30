import { FaSun } from "react-icons/fa";

export default function CitySelected() {
  return (
    <div className="h-full w-full ml-10 mt-56 mr-7 rounded-2xl">
      <div className="border-b-2 border-slate-400 flex justify-between ">
        <div>
          <p className="text-5xl p-5 text-white font-bold">Delhi</p>
          <p className="text-slate-400 ml-5 font-mono text-lg">
            Chances of rain
          </p>
          <p className="text-5xl text-white ml-5 mt-6 font-bold mb-4">31°</p>
        </div>
        <FaSun className="text-7xl mr-20 text-white mt-15" />
      </div>
    </div>
  );
}

import { PiSunFill } from "react-icons/pi";

export default function CurrentCity() {
  return (
    <div className="flex justify-between  m-5">
      <div className="ml-20">
        <div className="cityName text-5xl text-white font-bold mt-10 ">
          Delhi
        </div>
        <p className="text-lg text-gray-400 mt-5">Chances of Rain: 0%</p>
        <div className="text-6xl font-extrabold text-white mt-15 font-sans">
          31°
        </div>
      </div>
      <div className="mr-20 flex items-center">
        <PiSunFill className="text-amber-200 text-8xl hover:rotate-90 transition-transform duration-1000 " />
      </div>
    </div>
  );
}

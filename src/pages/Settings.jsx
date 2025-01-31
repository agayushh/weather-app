import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Settings() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="bg-[#0b131e] h-[120vh] w-full">
        <div className="flex">
          <Navbar />
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search For Cities"
              className="bg-[#202b3b] w-[900px] ml-12 p-4 rounded-2xl text-white placeholder:text-slate-200 hover:border hover:border-sky-300"
            />
            <div>
              <p className="text-xl text-white font-bold ml-16 mt-5">Units</p>
              <div className="h-[550px] w-[49vw] bg-[#202b3b] ml-12 mt-2 rounded-2xl flex flex-col gap-2">
                <p className="pt-3 ml-6 text-slate-400 font-mono">
                  Temperature
                </p>
                <div className="w-[95%] mt-3 bg-[#0b131e] rounded-2xl text-white h-10 ml-6 flex justify-between pt-1.5 font-bold">
                  <div className="w-[50%] ml-1.5 bg-[#202b3b] text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Celcius
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Fahrenheit
                  </div>
                </div>
                <p className="pt-3 ml-6 text-slate-400 font-mono">Wind Speed</p>
                <div className="w-[95%] mt-3 bg-[#0b131e] rounded-2xl text-white h-10 ml-6 flex justify-between pt-1.5 font-bold">
                  <div className="w-[50%] ml-1.5 bg-[#202b3b] text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Km/hr
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    m/s
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Knots
                  </div>
                </div>
                <p className="pt-3 ml-6 text-slate-400 font-mono">Pressure</p>
                <div className="w-[95%] mt-3 bg-[#0b131e] rounded-2xl text-white h-10 ml-6 flex justify-between pt-1.5 font-bold">
                  <div className="w-[50%] ml-1.5 bg-[#202b3b] text-center mb-1.5 rounded-2xl pt-0.5 ">
                    hPa
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Inches
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    kPa
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    mm
                  </div>
                </div>
                <p className="pt-3 ml-6 text-slate-400 font-mono">
                  Precipitation
                </p>
                <div className="w-[95%] mt-3 bg-[#0b131e] rounded-2xl text-white h-10 ml-6 flex justify-between pt-1.5 font-bold">
                  <div className="w-[50%] ml-1.5 bg-[#202b3b] text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Millimeters
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Inches
                  </div>
                </div>
                <p className="pt-3 ml-6 text-slate-400 font-mono">Distance</p>
                <div className="w-[95%] mt-3 bg-[#0b131e] rounded-2xl text-white h-10 ml-6 flex justify-between pt-1.5 font-bold">
                  <div className="w-[50%] ml-1.5 bg-[#202b3b] text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Kilometers
                  </div>
                  <div className="w-[50%] mr-1.5 text-center mb-1.5 rounded-2xl pt-0.5 ">
                    Miles
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="text-lg text-white ml-16 mt-4 font-bold ">
              Notifications
            </div>
            <div className="h-23 mt-3 w-[49vw] bg-[#202b3b] ml-12 rounded-2xl ">
              <p className="p-2 ml-3 text-white font-bold pt-5">
                Notifications
              </p>
              <div className="flex justify-between mx-5">
                <p className="text-slate-400 ">Be aware of the weather</p>
                <div
                  className={`w-14 h-7 flex items-center mt-[-20px] rounded-full p-1 cursor-pointer transition-all duration-300 mr-5 ${
                    toggle ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  {" "}
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      toggle ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="text-lg text-white ml-16 mt-4 font-bold">
              General
            </div>
            <div className="h-48 mt-3 w-[49vw] bg-[#202b3b] ml-12 rounded-2xl ">
              {" "}
              Notifications
            </div>
          </div>
          <div>
            <div className="bg-[#202b3b] h-[450px] w-2xl ml-14 mt-36 rounded-2xl ">
              <p className="text-4xl font-bold text-white pt-10 ml-12">
                Advnaced
                <div className="border-b-2 border-slate-600 w-[90%] mt-6"></div>
              </p>
              <p className="text-2xl text-white ml-12 mt-6 mb-5 ">
                Get new Experience
              </p>
              <ol className="list-disc ml-16 ]">
                <li className="text-slate-400 font-mono">Ad free</li>
                <li className="text-slate-400 font-mono">
                  Health activities overview
                </li>
                <li className="text-slate-400 font-mono">
                  Severe weather notification
                </li>
              </ol>
              <div className="bg-slate-600 h-20 ml-8 mt-14 rounded-2xl w-[90%] text-4xl text-center font-extrabold text-white hover:bg-slate-500">
                <p className="pt-5">
                  $5.99 <span className="text-sm text-slate-200">/ month</span>
                </p>
              </div>
            </div>
            <div className=" ml-14 bg-[#202b3b] w-2xl mt-5 rounded-2xl h-[300px]">
              <p className="font-bold text-white pt-7 text-3xl ml-16 ">
                Never Forget your Umbrella!
                <div className="border-b-2 border-slate-600 w-[90%] mt-6"></div>
              </p>
              <p className="ml-16 text-slate-400 text-md w-[60%] mt-5 font-mono">
                Sign up for our daily weather newsletter personalized just for
                you.
              </p>
              <button className=" w-[70%] bg-[#0095ff] ml-28 mt-16 rounded-4xl text-white p-3 font-bold hover:bg-sky-500">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "../components/Navbar";

export default function Settings() {
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
              <div className="h-[550px] w-[49vw] bg-[#202b3b] ml-12 mt-2 rounded-2xl">
                units daal de
              </div>
            </div>
            <div className="text-lg text-white ml-16 mt-4 font-bold ">
              Notifications
            </div>
            <div className="h-23 mt-3 w-[49vw] bg-[#202b3b] ml-12 rounded-2xl ">
              {" "}
              Notifications
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
                Advnaced{" "}
                <div className="border-b-2 border-slate-600 w-[90%] mt-6"></div>
              </p>
              $5.99
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
                you.{" "}
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

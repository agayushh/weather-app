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
              Advnaced
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

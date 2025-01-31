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
              ga
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

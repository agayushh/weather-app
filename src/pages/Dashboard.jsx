export default function Dashboard() {
  return (
    <div className="bg-[#0b131e] h-[100vh] w-full">
      <div className="flex">
        <div className="flex items-center h-[100vh] ml-10">
          <div className="bg-[#202b3b] h-[95%] w-24 rounded-2xl">fda</div>
        </div>

        <div className="mt-8"> 
          <input
            type="text"
            placeholder="Search For Cities"
            className="bg-[#202b3b] w-[900px] ml-12 p-5 rounded-3xl text-white placeholder:text-slate-200 hover:border hover:border-sky-300 "
          />
        </div>
      </div>
    </div>
  );
}

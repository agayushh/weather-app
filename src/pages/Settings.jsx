export default function Settings() {
  return <div>
     <div className="bg-[#0b131e] h-[100vh] w-full">
      <div className="flex grow">
        <div className="flex items-center h-[100vh] ml-10">
          <div className="bg-[#202b3b] h-[95%] w-24 rounded-2xl">Settings</div>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search For Cities"
            className="bg-[#202b3b] w-[900px] ml-12 p-4 rounded-2xl text-white placeholder:text-slate-200 hover:border hover:border-sky-300"
          />
        </div>   
      </div>
    </div>
  </div>;
}

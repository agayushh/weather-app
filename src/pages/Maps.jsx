import Navbar from "../components/Navbar";
export default function Maps() {
  return (
    <div>
      <div className="bg-[#0b131e] h-[100vh] w-full">
        <div className="flex">
          <Navbar />

          <div className="mt-8">
            <input
              type="text"
              placeholder="Search For Cities"
              className="bg-[#202b3b] w-[900px] ml-12 p-4 rounded-2xl text-white placeholder:text-slate-200 hover:border hover:border-sky-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

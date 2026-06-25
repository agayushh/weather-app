import { Link } from "react-router-dom";
import umbrella from "../assets/umbrella.png";

export default function Home() {
  return (
    <div className="bg-[#0b131e] min-h-screen w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 md:gap-16">
      
      {/* Decorative logo container */}
      <div className="bg-[#202b3b]/60 border border-slate-700/30 w-full max-w-md aspect-square rounded-3xl flex items-center justify-center p-8 md:p-16 shadow-2xl relative">
        <div className="absolute inset-0 bg-sky-500/5 blur-3xl rounded-full"></div>
        <img
          src={umbrella}
          alt="Umbrella"
          className="w-4/5 h-4/5 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] animate-pulse"
        />
      </div>

      {/* Content area */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
        <img
          src={umbrella}
          alt="Umbrella Logo"
          className="w-20 h-20 md:w-28 md:h-28 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] mb-4"
        />
        <h1 className="text-[#f0f1f1] text-5xl md:text-7xl font-bold tracking-tight">
          Breeze
        </h1>
        <p className="text-xl md:text-2xl text-[#646b75] mt-4 font-mono font-medium">
          Modern Weather Application
        </p>
        <p className="text-slate-400 mt-3 text-sm md:text-base">
          Get real-time updates, custom unit preferences, and detailed weather maps.
        </p>
        <Link
          to="/dashboard"
          className="bg-[#0095ff] hover:bg-sky-500 text-white font-bold py-4 px-8 rounded-2xl text-lg mt-8 shadow-lg shadow-sky-500/10 hover:shadow-sky-500/25 transition-all transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>

    </div>
  );
}

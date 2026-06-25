import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { CITY_ATOM } from "../state/atom/city";

export default function Input() {
  const selectedCity = useRecoilValue(CITY_ATOM);
  const [city, setCity] = useState(selectedCity);
  const setMainCity = useSetRecoilState(CITY_ATOM);

  // Keep local input sync'd with selected global city
  useEffect(() => {
    setCity(selectedCity);
  }, [selectedCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setMainCity(city.trim());
    }
  };

  return (
    <div className="w-full px-4 md:px-0 mb-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#202b3b] border border-slate-700/30 w-full max-w-4xl p-4 flex items-center justify-between gap-3 rounded-2xl shadow-lg focus-within:border-sky-500/50 focus-within:shadow-sky-500/5 transition-all"
      >
        <div className="flex items-center gap-3 w-full">
          <IoSearchOutline
            onClick={handleSubmit}
            className="text-slate-400 text-xl cursor-pointer hover:text-sky-400 transition-colors"
          />
          <input
            type="text"
            value={city}
            placeholder="Search for cities..."
            className="border-none outline-none w-full bg-transparent text-white font-mono text-sm md:text-base placeholder-slate-500"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

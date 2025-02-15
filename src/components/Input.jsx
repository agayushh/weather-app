import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CITY_ATOM } from "../state/atom/city";

export default function Input() {
  const [city, setcity] = useState("");
  const setMainCity = useSetRecoilState(CITY_ATOM);

  return (
    <label className="bg-[#202b3b] w-[900px] ml-12 p-4 flex items-center text-white justify-center gap-2 rounded-2xl">
      <IoSearchOutline
        onClick={() => {
          setMainCity(city);
        }}
        className="text-lg cursor-pointer"
      />
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setMainCity(city);
        }}
      >
        <input
          type="text"
          value={city}
          placeholder="Search For Cities"
          className="border-none outline-none flex grow bg-transparent"
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
      </form>

      {/* <input
        {...{
          type: "text",
          value: city,
          placeholder: "Search for cities",
          className: "border-none outline-none flex grow bg-transparent",
          onChange: (e) => setcity(e.target.value),
        }}
      /> */}
    </label>
  );
}

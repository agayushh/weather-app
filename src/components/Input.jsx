import { IoSearchOutline } from "react-icons/io5";

export default function Input() {
  return (
    <label className="bg-[#202b3b] w-[900px] ml-12 p-4 flex items-center text-white justify-center gap-2 rounded-2xl">
      <IoSearchOutline className="text-lg" />
      <input
        type="text"
        placeholder="Search For Cities"
        className="border-none outline-none flex grow bg-transparent"
      />
    </label>
  );
}

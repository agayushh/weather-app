import Input from "../components/Input";
import Navbar from "../components/Navbar";
export default function Maps() {
  return (
    <div>
      <div className="bg-[#0b131e] h-[100vh] w-full">
        <div className="flex">
          <Navbar />

          <div className="mt-8">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}

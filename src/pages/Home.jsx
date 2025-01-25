import umbrella from "../assets/umbrella.png";

export default function Home() {
  return (
    <div className="bg-[#0b131e] h-[100vh] w-full flex flex-auto items-center flex-wrap">
      <div className="bg-[#202b3b] h-[95%] w-[45%] ml-16 rounded-3xl flex justify-center items-center">
        <img src={umbrella} alt="Umbrella" className="h-[80%]" />
      </div>
      <div className="ml-[400px] flex-col justify-center items-center">
        <img src={umbrella} alt="Umbrella" className="h-36 ml-36" />
        <div className="text-[#f0f1f1] text-7xl font-semibold font-sans ml-24">
          Breeze
        </div>
          <p className="text-3xl text-[#646b75] mt-6 ml-20">Weather Application</p>
          <button className="bg-[#0095ff] p-5 rounded-4xl w-56 text-xl text-white ml-28 mt-12 hover:bg-sky-300  ">Get Started</button>
      </div>
    </div>
  );
}

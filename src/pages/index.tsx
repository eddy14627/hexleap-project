import Card from "@/Components/Card";
import React from "react";
import Card2 from "@/Components/Card2";
import Ad from "@/Components/Ad";
import { useMyContext } from "@/Context/MyContext";

const HomePage: React.FC = () => {
  const { mode, ChangeMode } = useMyContext();

  const toggleMode = () => {
    ChangeMode();
  };

  return (
    <div
      className={`flex flex-col px-4 md:px-10 lg:px-12 xl:px-16 py-4 md:py-8 lg:py-12 xl:py-16 ${
        mode ? "bg-slate-100" : "bg-gray-800"
      }`}
    >
      <div className="w-full">
        <h1 className="font-bold text-2xl pb-2 mb-2">
          <span
            className={`border-b-2 border-${
              mode ? "black " : "white text-white"
            }`}
          >
            Sports
          </span>
        </h1>
        <div className="flex gap-3 flex-wrap justify-center">
          <Card title={`Las Vegas Aviators`} imageUrl="/assets/1.png" />
          <Card title={`Las Vegas Aviators`} imageUrl="/assets/4.png" />
          <Card title={`Las Vegas Aviators`} imageUrl="/assets/3.png" />
          <Card title={`Las Vegas Aviators`} imageUrl="/assets/4.png" />
          <Ad title={`Las Vegas Aviators`} imageUrl="/assets/5.png" />
        </div>
        <div className="text-center my-8">
          <h1
            className={`font-semibold text-1xl mx-auto py-2 ${
              mode ? "text-black" : "text-white"
            }`}
          >
            <span className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
              See More
            </span>
          </h1>
        </div>
      </div>

      <div className="justify-center items-center p-10 text-center w-full">
        <h1
          className={`font-bold text-[50px] pb-6 ${
            mode ? "text-black" : "text-white"
          }`}
        >
          Collection Spotlight
        </h1>
        <div className="">
          <p className={`${mode ? "" : "text-slate-100"} pb-10 inline-block`}>
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis hic incidunt quis eum?
            Itaque repellat amet
          </p>
          <div className="flex flex-col items-center w-full justify-between gap-2 sm:flex-row">
            <div className="flex h-[50px] items-center justify-center">
              <span className="text-blue-500 border-blue-500 border-2 px-4 py-2 rounded cursor-pointer">
                {"<"}
              </span>
            </div>
            <div className="flex gap-10 flex-wrap justify-center">
              <Card2 title={`Example Card`} imageUrl="/assets/11.png" />
              <Card2 title={`Example Card`} imageUrl="/assets/22.png" />
              <Card2 title={`Example Card`} imageUrl="/assets/33.png" />
            </div>
            <div className="flex h-[50px] items-center justify-center">
              <span className="text-blue-500 border-blue-500 border-2 px-4 py-2 rounded cursor-pointer">
                {">"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dark mode/light mode toggle button */}
      <button onClick={toggleMode} className="fixed top-4 right-4">
        {mode ? (
          <div>
            <span className="font-bold text-black">Light Mode</span>
            <img src="/assets/darkmode.png" alt="Dark mode" />
          </div>
        ) : (
          <div>
            <span className="font-bold text-white">Dark Mode</span>
            <img src="/assets/lightmode.png" alt="Light Mode" />
          </div>
        )}
      </button>
    </div>
  );
};

export default HomePage;

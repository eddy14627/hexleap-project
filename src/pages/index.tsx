import Card from "@/Components/Card";
import React from "react";
import Card2 from "@/Components/Card2";
import Ad from "@/Components/Ad";
import { useMyContext } from "@/Context/MyContext"; // Import useMyContext hook

const HomePage: React.FC = () => {
  const { mode, ChangeMode } = useMyContext(); // Using useMyContext hook to access context values

  // Handler function to toggle between dark mode and light mode
  const toggleMode = () => {
    ChangeMode(); // Toggle mode
  };

  return (
    <div
      className={`px-[150px] py-[100px] ${
        mode ? "bg-slate-100" : "bg-gray-800"
      }`}
    >
      <div className="w-full">
        <h1 className="font-bold text-[35px] pb-2 mb-2">
          <span
            className={`border-b-2 border-${
              mode ? "black " : "white text-white"
            }`}
          >
            Sports
          </span>
        </h1>
        <div className="flex">
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

      <div className="justify-center items-center pt-10 text-center w-full">
        <h1
          className={`font-bold text-[50px] pb-6 ${
            mode ? "text-black" : "text-white"
          }`}
        >
          Collection Spotlight
        </h1>
        <div className="inline-block">
          <p className={`${mode ? "" : "text-slate-100"} pb-10 inline-block`}>
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis hic incidunt quis eum?
            Itaque repellat amet repudiandae eligendi a vel odio nulla nam in
            obcaecati! Excepturi molestias consequatur mollitia debitis!
          </p>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <span className="text-blue-700 border-blue-700 border-2 px-4 py-2 rounded cursor-pointer">
                {"<"}
              </span>
            </div>
            <Card2 title={`Example Card`} imageUrl="/assets/11.png" />
            <Card2 title={`Example Card`} imageUrl="/assets/22.png" />
            <Card2 title={`Example Card`} imageUrl="/assets/33.png" />
            <div className="text-center">
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

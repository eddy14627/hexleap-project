import { useMyContext } from "@/Context/MyContext";
import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
}

const Card2: React.FC<CardProps> = ({ title, imageUrl }) => {
  const { mode } = useMyContext(); // Using useMyContext hook to access context values

  return (
    <div
      className={`m-2 w-1/5 ${
        mode ? "bg-white" : "bg-gray-700"
      } relative rounded shadow`}
    >
      <div className="rounded overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full" />

        {/* Ticket divider */}
        <div className="relative mt-1 mb-4 flex justify-between items-center">
          <div
            className={`w-6 h-6 ${
              mode ? "bg-slate-100" : "bg-gray-800"
            } rounded-full transform -translate-x-2`}
          ></div>
          <hr
            className={`mx-4 flex-grow border-t-2 ${
              mode ? "border-gray-300" : "border-white"
            } border-dotted`}
          />
          <div
            className={`w-6 h-6 ${
              mode ? "bg-slate-100" : "bg-gray-800"
            } rounded-full transform translate-x-2`}
          ></div>
        </div>

        <div className="flex flex-col justify-center items-center pb-5">
          {/* Added py-2 class for padding */}
          <p
            className={`font-semibold text-2xl ${
              mode ? "text-black" : "text-white"
            } py-2`}
          >
            Las Vegas Aviators
          </p>
          {/* Added py-2 class for padding */}
          <p className={`py-2 text-2xl ${mode ? "text-black" : "text-white"}`}>
            OCT 15| SUN | 4:30PM
          </p>
          {/* Added py-2 class for padding */}
          <p
            className={`pt-2 pb-4 text-2xl ${
              mode ? "text-black" : "text-white"
            }`}
          >
            Las Vegas Ballpark, Las Vegas, Nevada
          </p>
          {/* Added py-2 class for padding */}
          <h1 className="text-2xl mx-auto py-4">
            <span className={`bg-black text-white p-3 rounded cursor-pointer`}>
              Take Flight Collection
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card2;

// components/Ad.tsx

import { useMyContext } from "@/Context/MyContext";

interface AdProps {
  title: string;
  imageUrl: string;
}

const Ad: React.FC<AdProps> = ({ title, imageUrl }) => {
  const { mode, ChangeMode } = useMyContext(); // Using useMyContext hook to access context values

  // Handler function to toggle between dark mode and light mode
  const toggleMode = () => {
    ChangeMode(); // Toggle mode
  };
  return (
    <div
      className={`m-2 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ${
        mode ? "bg-white" : "bg-gray-700"
      }`}
    >
      <div className="w-rounded relative">
        <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-tl flex items-center">
          AD
        </div>
        <img src={imageUrl} alt={title} className="w-full" />

        <div>
          <div
            className={`font-bold text-2xl py-4 ${
              mode ? "text-black" : "text-slate-300"
            }`}
          >
            Advertisement title
          </div>
          <div className=" py-1 rounded flex justify-between">
            <p className={`${mode ? "text-black" : "text-slate-400"} text-2xl`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;

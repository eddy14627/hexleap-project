import { useMyContext } from "@/Context/MyContext";
import Image from "next/image";

interface CardProps {
  title: string;
  imageUrl: string;
}

const Card2: React.FC<CardProps> = ({ title, imageUrl }) => {
  const { mode } = useMyContext(); // Using useMyContext hook to access context values

  return (
    <div
      className={`${
        mode ? "bg-white" : "bg-gray-700"
      } shadow-[0px_8px_16px_0px_#0000001A] h-[625px] max-w-[257px] p-3 font-secondary flex flex-col justify-between`}
    >
      <div className="b relative h-[385px] w-full overflow-hidden shadow-[0px_8px_16px_0px_#00000033] max-sm:h-[350px]">
        <Image
          alt={title}
          className=" object-cover"
          width={300}
          height={200}
          src={imageUrl}
        />
      </div>
      <div className="relative flex justify-around px-4 -mt-4">
        <div className="shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] absolute translate-x-[12px] -right-[10px] top-[-9px] rounded-full"></div>
        <div className="shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] absolute -translate-x-[12px] -left-[10px] top-[-9px] rounded-full"></div>
        <div className="border-b w-[3px] border-[#818A97] "></div>
        <div className="border-b w-[8px] border-[#818A97] "></div>
      </div>
      <div className="flex flex-col gap-3">
        <h2
          className={`font-primary text-center font-medium text-1xl ${
            mode ? "text-black" : "text-slate-100"
          }`}
        >
          {title}
        </h2>
        <div className="font-primary flex flex-col items-center gap-2">
          <div
            className={`flex text-sm items-center gap-2 ${
              mode ? "text-black" : "text-slate-100"
            }`}
          >
            <span>OCT 15</span>
            <div
              className={`h-[14px] w-[1px] ${
                mode ? "text-black" : "text-slate-100"
              }`}
            ></div>
            <span>SUN</span>
            <div
              className={`h-[14px] w-[1px] ${
                mode ? "text-black" : "text-slate-100"
              }`}
            ></div>
            <span>4:30 PM</span>
          </div>
          <p
            className={`font-secondary text-sm ${
              mode ? "text-black" : "text-slate-100"
            } text-center`}
          >
            Las Vegas Ballpark, Las Vegas, Nevada
          </p>
        </div>
        <button className="bg-[#1D1D1F] text-white text-center w-full text-sm p-3">
          Take Flight Collection
        </button>
      </div>
    </div>
  );
};

export default Card2;

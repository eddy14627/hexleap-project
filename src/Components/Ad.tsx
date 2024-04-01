import { useMyContext } from "@/Context/MyContext";
import Image from "next/image";

interface CardProps {
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  const { mode } = useMyContext();

  return (
    <div
      className={`${
        mode ? "bg-white" : "bg-gray-700"
      } shadow-[0px_8px_16px_0px_#0000000D] max-h-[520px] w-[238px] m-2 p-3 font-secondary text-black `}
    >
      <div className="h-full flex flex-col gap-3 border-[0.2px]">
        <div className="relative h-[218px] w-full overflow-hidden">
          <div className="absolute bg-black text-white top-0 right-0 z-[999] font-bold text-xs px-[15px] py-[3px]">
            Ad
          </div>
          <Image
            alt="star"
            className="w-full object-cover"
            width={300}
            height={200}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col gap-3 px-3 flex-1">
          <h2
            className={`font-bold text-2xl ${
              mode ? "text-black" : "text-slate-100"
            }`}
          >
            Advertisement title
          </h2>
          <p className={`text-sm ${mode ? "text-black" : "text-slate-100"}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium iure sapiente natus, ea sunt ratione exercitationem aut
            tenetur, quia repudiandae distinctio harum cumque commodi quasi
            minus, neque iste? Error, ratione?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

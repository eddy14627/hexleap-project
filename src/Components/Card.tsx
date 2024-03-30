// card.tsx
import { useMyContext } from "@/Context/MyContext";

interface CardProps {
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  const { mode } = useMyContext(); // Using useMyContext hook to access context values

  return (
    <div className={`m-2 p-2 w-1/5 ${mode ? "bg-white" : "bg-gray-700"}`}>
      <div className="w-rounded">
        <img src={imageUrl} alt={title} className="w-full" />

        <div>
          <div
            className={`font-bold text-2xl py-4 ${
              mode ? "text-black" : "text-slate-100"
            }`}
          >
            {title}
          </div>
          <div
            className={`${
              mode ? "bg-gray-100 text-black" : "bg-gray-800 text-slate-100"
            } px-4 py-1 rounded flex justify-between`}
          >
            <div className={`flex flex-col`}>
              <p
                className={`${mode ? "text-black" : "text-slate-100"} text-1xl`}
              >
                Total Events
              </p>
              <p className="font-semibold text-2xl">Sports</p>
            </div>
            <div className="flex flex-col">
              <p
                className={`${mode ? "text-black" : "text-slate-100"} text-1xl`}
              >
                Total Events
              </p>
              <p className="font-semibold text-2xl">Sports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

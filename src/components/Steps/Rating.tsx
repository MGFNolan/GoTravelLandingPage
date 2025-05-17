import { div } from "motion/react-client";
import Star from "../Icons/Star";

interface RatingProps {
  name: string;
  rating: number;
  img: string;
  className: string;
}

export default function Rating(props: RatingProps) {
  return (
    <div
      className={`absolute flex gap-x-2.5 rounded-2xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-[0px_4px_30px_rgba(0,0,0,0.12)] backdrop-blur-3xl ${props.className}`}
    >
      <div className="bg-grey-300 flex items-end justify-center overflow-hidden rounded-full">
        <img
          className="size-15"
          src={props.img}
          alt="Graphic of person rating photo"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="tracking-6 font-semibold">{props.name}</p>
        <div className="flex items-center">
          <Star className="fill-yellow mr-2 size-6" />
          <p className="text-grey-600 text-[1.0625rem] font-semibold">
            {props.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

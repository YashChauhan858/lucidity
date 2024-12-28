import { LucideIcon } from "lucide-react";
import { formatNumberWithCommas } from "../utils/helper";

const Card = ({
  Icon,
  heading,
  stats,
}: {
  Icon: LucideIcon;
  heading: string;
  stats: number | string;
}) => {
  return (
    <div className="h-[8rem] w-full sm:!w-full md:w-56 bg-secondary rounded-lg flex align-middle justify-center">
      <Icon className="h-8 w-8  text-white flex-[0.3] mt-[24px]" />
      <div className="flex flex-col gap-3 flex-[0.7] justify-center">
        <p className="text-white mb-0 text-lg">{heading}</p>
        <p className="text-white mb-0 text-3xl font-semibold">
          {formatNumberWithCommas(stats)}
        </p>
      </div>
    </div>
  );
};

export default Card;

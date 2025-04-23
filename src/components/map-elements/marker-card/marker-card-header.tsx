import { cn } from "@/lib/utils/cn";

type Props = {
  minutes: string;
  name: string;
  variant?: "red" | "green";
};

const MarkerCardHeader: React.FC<Props> = ({
  minutes,
  name,
  variant = "red",
}) => {
  return (
    <div
      className={cn(
        "body-t1 flex justify-between",
        variant === "red" && "text-animation-red",
        variant === "green" && "text-text-primary"
      )}
    >
      <p
        className={cn(
          "font-[700]",
          variant === "green" && "text-animation-green"
        )}
      >
        {minutes} <span className="font-normal">minutes</span>
      </p>
      <p>{name}</p>
    </div>
  );
};

export default MarkerCardHeader;

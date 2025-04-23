import { cn } from "@/lib/utils/cn";

type Props = {
  variant?: "default" | "updated";
};

const TimeCard: React.FC<Props> = ({ variant = "default" }) => {
  return (
    <div
      className={cn(
        "flex justify-center backdrop-blur-[20px] heading-h2 text-animation-red absolute top-[672.5px] left-[36px] rounded-[8px] border-[0.5px] border-[#94949480] w-[358px] h-[82px]",
        variant === "default" && "py-6 px-[16px]",
        variant === "updated" && "bg-black/10"
      )}
    >
      {variant === "default" && <p>Airlines</p>}
      {variant === "updated" && (
        <div className="flex flex-col gap-[8px] font-hauora font-[600] text-[20px] leading-[100%] p-5 text-text-primary">
          <p>120 minutes</p>
          <p className="font-hauora font-[500] text-[14px]">
            Time you lose traveling on airlines{" "}
            <span className="text-text-tertiary">per round trip</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeCard;

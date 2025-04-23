import Image from "next/image";

const BlackJetInfoCard: React.FC = () => {
  return (
    <div className="flex flex-col text-text-primary absolute top-[178px] left-[36px] rounded-[8px] border-[0.5px] border-[#94949480] h-[419px] w-[358px] backdrop-blur-[20px] pt-6 px-4 pb-8 animate-[slideIn_900ms_ease-out_forwards]">
      <h2 className="text-center font-[600] text-[32px] leading-[100%] mb-[26px]">
        BLACK JET
      </h2>

      <div className="flex flex-col gap-[6px]">
        <p className="font-hauora font-[600] text-[24px] leading-[100%]">
          Launch Route
        </p>
        <p className="font-hauora font-[400] text-text-tertiary text-[16px] leading-[100%]">
          Early 2027
        </p>
      </div>

      <p className="font-hauora font-[700] text-[16px] leading-[100%] mt-6">
        Do you value your time <span className="text-text-tertiary">and</span>{" "}
        convenience?
      </p>

      <div className="font-hauora font-[400] text-[14px] leading-[135%] flex flex-col gap-[10px] mt-4">
        <p>
          <span className="text-text-tertiary">
            Book your flight in seconds and
          </span>{" "}
          arrive 15 minutes before departure. In and out{" "}
          <span className="text-text-tertiary">of the airport</span> in minutes,
          not hours
        </p>
        <p>
          <span className="text-text-tertiary">
            Fly from private terminal lounges.
          </span>{" "}
          No security lines <span className="text-text-tertiary">and</span> no
          drawn out boarding procedures
        </p>
      </div>

      <div className="mt-6">
        <p className="font-hauora font-[600] text-[18px] leading-[100%]">
          Regular flights between
        </p>

        <div className="flex items-center gap-[3px] mt-4">
          <div className="flex-1 py-[10px] px-[6px] font-hauora font-[500] text-[14px] leading-[100%] border-[1px] border-[#7A7A7A] rounded-[4px]">
            Sydney{" "}
            <span className="text-[12px] text-text-tertiary">(Bankstown)</span>
          </div>
          <Image src="/images/arrows.svg" alt="arrows" width={12} height={7} />
          <div className="flex-1 py-[10px] px-[6px] font-hauora font-[500] text-[14px] leading-[100%] border-[1px] border-[#7A7A7A] rounded-[4px]">
            Melbourne{" "}
            <span className="text-[12px] text-text-tertiary">(Essendon)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackJetInfoCard;

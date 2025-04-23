import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";
import Line from "../line";
import { cn } from "@/lib/utils/cn";

type Props = {
  lineOrigin: "right" | "left";
  markerCoords: { x: number; y: number };
  cardCoords: { x: number; y: number };
  className?: string;
} & PropsWithChildren;

const MarkerCard: React.FC<Props> = ({
  lineOrigin,
  markerCoords,
  cardCoords,
  children,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [lineTargetCoords, setLineTargetCoords] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;

      const offsetX =
        lineOrigin === "left" ? cardCoords.x : cardCoords.x + cardWidth;
      const offsetY = cardCoords.y + cardHeight / 2;

      setLineTargetCoords({
        x: offsetX,
        y: offsetY,
      });
    }
  }, [lineOrigin, cardCoords, children]);

  return (
    <>
      {lineTargetCoords.x !== 0 && lineTargetCoords.y !== 0 && (
        <Line
          x1={markerCoords.x}
          y1={markerCoords.y}
          x2={lineTargetCoords.x + (lineOrigin === "left" ? 2 : -2)}
          y2={lineTargetCoords.y}
          thickness={1}
        />
      )}

      <div
        ref={cardRef}
        className={cn(
          "absolute px-2 max-w-[224px] flex flex-col justify-center w-full gap-[14px] backdrop-blur-[15px] border-[0.5px] border-[#949494] rounded-[5px] ",
          className
        )}
        style={{
          left: `${cardCoords.x}px`,
          top: `${cardCoords.y}px`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default MarkerCard;

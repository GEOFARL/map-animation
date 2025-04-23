import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { useSlideOverlay } from "./slide-overlay-ctx";
import Image from "next/image";

type Props = {
  id: string;
  color: string;
  duration?: number;
  onMidSlide?: () => void;
};

const SlideOverlay: React.FC<Props> = ({
  id,
  color,
  onMidSlide,
  duration = 600,
}) => {
  const { activeSlide } = useSlideOverlay();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (activeSlide === id) {
      setTimeout(() => {
        onMidSlide?.();
      }, duration / 3);
      setAnimate(true);
    }
  }, [activeSlide, id, duration, onMidSlide]);

  console.log("activeSlide", activeSlide);

  return (
    <>
      {["cardStep1", "cardStep3"].includes(id) && (
        <div
          className={cn(
            "absolute inset-0 transition-transform",
            animate ? "translate-x-full" : "-translate-x-full",
            color
          )}
          style={{ transitionDuration: `${duration}ms` }}
        />
      )}
      {["cardStep2", "cardStep4"].includes(id) && (
        <div
          className={cn(
            "absolute inset-0 transition-transform flex justify-center",
            color,
            animate ? "translate-y-0" : "translate-y-full"
          )}
          style={{
            transitionDuration: `${duration}ms`,
            transform: animate ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-2 transition-opacity duration-300"
            )}
            style={{ transitionDelay: `${duration}ms` }}
          >
            <Image
              width={33}
              height={24}
              src="/images/checkmark.svg"
              alt="checkmark"
            />
            <p className="font-hauora font-[600] text-[16px] leading-[100%] text-text-primary">
              Skip the queue
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SlideOverlay;

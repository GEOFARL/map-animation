import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { useSlideOverlay } from "./slide-overlay-ctx";

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

  return (
    <div
      className={cn(
        "absolute inset-0 transition-transform",
        animate ? "translate-x-full" : "-translate-x-full",
        color
      )}
      style={{ transitionDuration: `${duration}ms` }}
    />
  );
};

export default SlideOverlay;

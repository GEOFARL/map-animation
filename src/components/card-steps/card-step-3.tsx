import { markers } from "@/lib/constants/map-elements";
import MarkerCard from "../map-elements/marker-card/marker-card";
import MarkerCardBody from "../map-elements/marker-card/marker-card-body";
import MarkerCardHeader from "../map-elements/marker-card/marker-card-header";
import SlideOverlay from "../animation/slide-overlay/slide-overlay";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

const CardStep3: React.FC = () => {
  const marker1 = markers.find((marker) => marker.id === "marker1")!;

  const [config, setConfig] = useState({
    minutes: "30-15",
    name: "Airlines",
    text: "Prolonged disembarking from the airplane",
    highlightedPhrases: [
      { phrase: "from the airplane", className: "text-text-tertiary" },
    ],
    markerCardClasses: "",
    variant: "red",
  });

  return (
    <MarkerCard
      markerCoords={{ x: marker1.x, y: marker1.y }}
      cardCoords={{ x: 471, y: 693 }}
      lineOrigin="left"
      className={cn("h-[94px]", config.markerCardClasses)}
    >
      <MarkerCardHeader
        minutes={config.minutes}
        name={config.name}
        variant={config.variant as "red" | "green"}
      />
      <MarkerCardBody
        text={config.text}
        highlightedPhrases={config.highlightedPhrases}
        variant={config.variant as "red" | "green"}
      />
      <SlideOverlay
        id="cardStep3"
        color="bg-animation-green"
        onMidSlide={() =>
          setConfig({
            minutes: "9",
            name: "BLACK JET",
            text: "Swift exit via private terminal",
            highlightedPhrases: [
              {
                phrase: "via private terminal",
                className: "text-text-tertiary",
              },
            ],
            markerCardClasses: "justify-start gap-[10px] pt-[12px]",
            variant: "green",
          })
        }
      />
    </MarkerCard>
  );
};

export default CardStep3;

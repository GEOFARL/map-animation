import { markers } from "@/lib/constants/map-elements";
import SlideOverlay from "../animation/slide-overlay/slide-overlay";
import MarkerCard from "../map-elements/marker-card/marker-card";
import MarkerCardBody from "../map-elements/marker-card/marker-card-body";
import MarkerCardHeader from "../map-elements/marker-card/marker-card-header";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

const CardStep1: React.FC = () => {
  const marker2 = markers.find((marker) => marker.id === "marker2")!;
  const [config, setConfig] = useState({
    minutes: "105-75",
    name: "Airlines",
    text: "Congested terminals and drawn-out security lines",
    highlightedPhrases: [{ phrase: "and", className: "text-text-tertiary" }],
    markerCardClasses: "",
    variant: "red",
  });

  return (
    <MarkerCard
      markerCoords={{ x: marker2.x, y: marker2.y }}
      cardCoords={{ x: 437, y: 136 }}
      lineOrigin="right"
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
        id="cardStep1"
        color="bg-animation-green"
        onMidSlide={() =>
          setConfig({
            minutes: "15",
            name: "BLACK JET",
            text: "Private terminal boarding",
            highlightedPhrases: [],
            markerCardClasses: "justify-start gap-[24px] pt-[12px]",
            variant: "green",
          })
        }
      />
    </MarkerCard>
  );
};

export default CardStep1;

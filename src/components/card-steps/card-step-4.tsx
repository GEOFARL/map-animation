import { markers } from "@/lib/constants/map-elements";
import MarkerCard from "../map-elements/marker-card/marker-card";
import MarkerCardBody from "../map-elements/marker-card/marker-card-body";

const CardStep4: React.FC = () => {
  const marker1 = markers.find((marker) => marker.id === "marker1")!;

  return (
    <MarkerCard
      markerCoords={{ x: marker1.x, y: marker1.y }}
      cardCoords={{ x: 471, y: 799 }}
      lineOrigin="left"
      className="h-[64px]"
    >
      <MarkerCardBody
        text="Long walks to the airport exit"
        highlightedPhrases={[
          { phrase: "to the airport exit", className: "text-text-tertiary" },
        ]}
        className="font-[700] text-[14px]"
      />
    </MarkerCard>
  );
};

export default CardStep4;

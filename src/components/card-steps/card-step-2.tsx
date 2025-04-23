import { markers } from "@/lib/constants/map-elements";
import MarkerCard from "../map-elements/marker-card/marker-card";
import MarkerCardBody from "../map-elements/marker-card/marker-card-body";
import SlideOverlay from "../animation/slide-overlay/slide-overlay";

const CardStep2: React.FC = () => {
  const marker2 = markers.find((marker) => marker.id === "marker2")!;

  return (
    <MarkerCard
      markerCoords={{ x: marker2.x, y: marker2.y }}
      cardCoords={{ x: 437, y: 242 }}
      lineOrigin="right"
      className="h-[64px]"
    >
      <MarkerCardBody
        text="Time consuming boarding"
        highlightedPhrases={[
          { phrase: "boarding", className: "text-text-tertiary" },
        ]}
        className="font-[700]"
      />
      <SlideOverlay id="cardStep2" color="bg-[#236919]" duration={200} />
    </MarkerCard>
  );
};

export default CardStep2;

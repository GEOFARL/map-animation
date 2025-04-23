import { markers } from "@/lib/constants/map-elements";
import MarkerCard from "../map-elements/marker-card/marker-card";
import MarkerCardHeader from "../map-elements/marker-card/marker-card-header";
import MarkerCardBody from "../map-elements/marker-card/marker-card-body";

const CardStep1: React.FC = () => {
  const marker2 = markers.find((marker) => marker.id === "marker2")!;

  return (
    <MarkerCard
      markerCoords={{ x: marker2.x, y: marker2.y }}
      cardCoords={{ x: 437, y: 136 }}
      lineOrigin="right"
      className="h-[94px]"
    >
      <MarkerCardHeader minutes="105-75" name="Airlines" />
      <MarkerCardBody
        text="Congested terminals and drawn-out security lines"
        highlightedPhrases={[
          { phrase: "and", className: "text-text-tertiary" },
        ]}
      />
    </MarkerCard>
  );
};

export default CardStep1;

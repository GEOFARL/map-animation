import { markers } from "@/lib/constants/map-elements";
import MarkerCard from "../map-elements/marker-card/marker-card";
import MarkerCardBody from "../map-elements/marker-card/marker-card-body";
import MarkerCardHeader from "../map-elements/marker-card/marker-card-header";

const CardStep3: React.FC = () => {
  const marker1 = markers.find((marker) => marker.id === "marker1")!;
  return (
    <MarkerCard
      markerCoords={{ x: marker1.x, y: marker1.y }}
      cardCoords={{ x: 471, y: 693 }}
      lineOrigin="left"
      className="h-[94px]"
    >
      <MarkerCardHeader minutes="30-15" name="Airlines" />
      <MarkerCardBody
        text="Prolonged disembarking from the airplane"
        highlightedPhrases={[
          { phrase: "from the airplane", className: "text-text-tertiary" },
        ]}
      />
    </MarkerCard>
  );
};

export default CardStep3;

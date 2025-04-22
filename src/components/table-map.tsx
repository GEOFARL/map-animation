import Line from "./map-elements/line";
import Marker from "./map-elements/marker";
import TimeCard from "./time-card";

const TabletMap: React.FC = () => {
  return (
    <div className="relative w-[744px] h-[1000px] bg-[url('/images/australia-map.png')] bg-no-repeat bg-[length:531%] bg-[position:43.5%_36%]">
      <div className="absolute inset-0 bg-black/40"></div>
      <TimeCard />

      <Marker x={374.5} y={622} r={5} />
      <Marker x={712.5} y={360} r={5} />
      <Line x1={374.5} y1={622} x2={712.5} y2={360} />
    </div>
  );
};
export default TabletMap;

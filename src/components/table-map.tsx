"use client";

import Ping from "@/components/animation/ping";
import Line from "./map-elements/line";
import Marker from "./map-elements/marker";
import TimeCard from "./time-card";
import { useEffect } from "react";
import useAnimationTimeline from "@/hooks/use-animation-timeline/use-animation-timeline";

const markers = [
  { id: "marker1", x: 374.5, y: 622, r: 5 },
  { id: "marker2", x: 712.5, y: 360, r: 5 },
];
const lines = [{ from: "marker1", to: "marker2" }];

type Props = {
  restartTrigger: unknown;
};

const TabletMap: React.FC<Props> = ({ restartTrigger }) => {
  const { markerPings, reset, runTimeline } = useAnimationTimeline();

  useEffect(() => {
    reset();
    runTimeline();
  }, [runTimeline, restartTrigger, reset]);

  return (
    <div className="relative w-[744px] h-[1000px] bg-[url('/images/australia-map.png')] bg-no-repeat bg-[length:531%] bg-[position:43.5%_36%]">
      <div className="absolute inset-0 bg-black/40"></div>
      <TimeCard />

      {markers.map(({ id, x, y, r }) => (
        <Marker key={id} x={x} y={y} r={r}>
          {markerPings[id] && (
            <Ping
              key={markerPings[id].key}
              duration={markerPings[id].duration}
              count={markerPings[id].count}
              color={markerPings[id].color}
              animationType={markerPings[id].animationType}
              r={8.5}
            />
          )}
        </Marker>
      ))}

      {lines.map((line) => (
        <Line
          key={line.from + line.to}
          x1={markers.find((m) => m.id === line.from)!.x}
          y1={markers.find((m) => m.id === line.from)!.y}
          x2={markers.find((m) => m.id === line.to)!.x}
          y2={markers.find((m) => m.id === line.to)!.y}
        />
      ))}
    </div>
  );
};
export default TabletMap;

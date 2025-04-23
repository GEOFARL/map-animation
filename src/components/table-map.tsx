"use client";

import Ping from "@/components/animation/ping";
import useAnimationTimeline from "@/hooks/use-animation-timeline/use-animation-timeline";
import { useEffect } from "react";
import CardStep1 from "./card-steps/card-step-1";
import Line from "./map-elements/line";
import Marker from "./map-elements/marker";
import TimeCard from "./time-card";
import { lines, markers } from "@/lib/constants/map-elements";
import CardStep2 from "./card-steps/card-step-2";
import CardStep3 from "./card-steps/card-step-3";
import CardStep4 from "./card-steps/card-step-4";

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

      <CardStep1 />
      <CardStep2 />
      <CardStep3 />
      <CardStep4 />
    </div>
  );
};
export default TabletMap;

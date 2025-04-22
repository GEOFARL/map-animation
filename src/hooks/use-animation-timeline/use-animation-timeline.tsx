import { useCallback, useMemo, useState } from "react";
import { animationSteps } from "./animation-steps";
import { AnimationContext, PingConfig } from "./types";

const useAnimationTimeline = () => {
  const [markerPings, setMarkerPings] = useState<
    Record<string, PingConfig | null>
  >({
    marker1: null,
    marker2: null,
  });

  const reset = useCallback(() => {
    setMarkerPings({
      marker1: null,
      marker2: null,
    });
  }, []);

  const context: AnimationContext = useMemo(
    () => ({
      setMarkerPing: (markerId, config) => {
        setMarkerPings((prev) => ({
          ...prev,
          [markerId]: config,
        }));
      },
    }),
    []
  );

  const runTimeline = useCallback(async () => {
    for (const action of animationSteps) {
      await action.execute(context);
    }
  }, [context]);

  return { markerPings, reset, runTimeline };
};

export default useAnimationTimeline;

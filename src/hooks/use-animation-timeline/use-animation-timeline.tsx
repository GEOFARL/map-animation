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

  const [cardStepsVisible, setCardStepsVisible] = useState<
    Record<string, boolean>
  >({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });

  const reset = useCallback(() => {
    setMarkerPings({
      marker1: null,
      marker2: null,
    });
    setCardStepsVisible({
      step1: false,
      step2: false,
      step3: false,
      step4: false,
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
      setCardStepVisible: (stepId, visible) => {
        setCardStepsVisible((prev) => ({ ...prev, [stepId]: visible }));
      },
    }),
    []
  );

  const runTimeline = useCallback(() => {
    let cancelled = false;

    const runner = async () => {
      for (const action of animationSteps) {
        if (cancelled) break;
        await action.execute(context);
      }
    };

    runner();

    return () => {
      cancelled = true;
    };
  }, [context]);

  return { markerPings, cardStepsVisible, reset, runTimeline };
};

export default useAnimationTimeline;

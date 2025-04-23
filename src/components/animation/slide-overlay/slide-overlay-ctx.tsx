import React, { createContext, useContext, useState, useCallback } from "react";

type SlideOverlayContextType = {
  triggerSlide: (id: string) => void;
  resetSlide: () => void;
  activeSlide: string | null;
};

const SlideOverlayContext = createContext<SlideOverlayContextType | undefined>(
  undefined
);

export const SlideOverlayProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSlide, setActiveSlide] = useState<string | null>(null);

  const triggerSlide = useCallback((id: string) => {
    setActiveSlide(id);
  }, []);

  const resetSlide = useCallback(() => {
    setActiveSlide(null);
  }, []);

  return (
    <SlideOverlayContext.Provider
      value={{ triggerSlide, activeSlide, resetSlide }}
    >
      {children}
    </SlideOverlayContext.Provider>
  );
};

export const useSlideOverlay = () => {
  const context = useContext(SlideOverlayContext);
  if (!context) {
    throw new Error(
      "useSlideOverlay must be used within a SlideOverlayProvider"
    );
  }
  return context;
};

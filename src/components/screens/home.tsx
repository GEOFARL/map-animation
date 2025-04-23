"use client";

import { useState } from "react";
import TabletMap from "../table-map";
import { SlideOverlayProvider } from "../animation/slide-overlay/slide-overlay-ctx";

const HomeScreen: React.FC = () => {
  const [restartKey, setRestartKey] = useState(0);

  return (
    <main className="max-w-7xl mx-auto mt-10 flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-hauora font-medium">
        IPad Viewport size Map Animation
      </h1>
      <button
        onClick={() => setRestartKey((prev) => prev + 1)}
        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition-colors duration-200"
      >
        Restart Animation
      </button>

      <section className="p-2 bg-white rounded-lg">
        <SlideOverlayProvider>
          <TabletMap restartTrigger={restartKey} />
        </SlideOverlayProvider>
      </section>
    </main>
  );
};

export default HomeScreen;

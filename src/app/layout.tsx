import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Map Animation",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-300">{children}</body>
    </html>
  );
};

export default RootLayout;

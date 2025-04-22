import { PropsWithChildren } from "react";

type Props = {
  x: number;
  y: number;
  r: number;
} & PropsWithChildren;

const Marker: React.FC<Props> = ({ x, y, r, children }) => {
  return (
    <div
      className="absolute rounded-full bg-marker z-[4]"
      style={{
        top: `${y}px`,
        left: `${x}px`,
        width: `${r * 2}px`,
        height: `${r * 2}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Marker;

type Props = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const Line: React.FC<Props> = ({ x1, y1, x2, y2 }) => {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const length = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  return (
    <div
      className={`absolute bg-marker h-[2px]`}
      style={{
        top: `${y1}px`,
        left: `${x1}px`,
        width: `${length}px`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
      }}
    />
  );
};

export default Line;

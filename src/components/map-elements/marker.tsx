type Props = {
  x: number;
  y: number;
  r: number;
};

const Marker: React.FC<Props> = ({ x, y, r }) => {
  return (
    <div
      className="absolute rounded-full bg-marker"
      style={{
        top: `${y}px`,
        left: `${x}px`,
        width: `${r * 2}px`,
        height: `${r * 2}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Marker;

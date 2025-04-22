type Props = {
  r: number;
  color?: string;
  duration?: number | "infinite";
  animationType?: "flash-fast" | "flash-slow";
  count?: number | "infinite";
};

const Ping: React.FC<Props> = ({
  r,
  animationType = "flash-fast",
  color = "bg-red-500",
  duration = 300,
  count = 4,
}) => {
  const animationDuration =
    typeof duration === "number" ? `${duration}ms` : "300ms";

  const iterationCount = count === "infinite" ? "infinite" : count;
  const animation = `${animationType} ${animationDuration} ease-in-out ${iterationCount}`;

  return (
    <>
      {[1, 1.55, 2.3].map((scale, index) => (
        <span
          key={index}
          className={`absolute inline-flex rounded-full ${color}`}
          style={{
            width: `${r * 2 * scale}px`,
            height: `${r * 2 * scale}px`,
            opacity: index === 0 ? 1 : 0.2,
            animation: animation,
          }}
        ></span>
      ))}
    </>
  );
};

export default Ping;

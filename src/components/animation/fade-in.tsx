import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
};

const FadeIn: React.FC<Props> = ({
  children,
  duration = 100,
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`transition-all ease-out ${
        isVisible ? "opacity-100 translate-y-0" : `opacity-0`
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

import { animated, useSpring } from "react-spring";
import { useState } from "react";
import styled from "styled-components";
const Player = styled.h1``;

function Welcome() {
  const [flip, set] = useState(false);
  const animateStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: { duration: 2000 },
    onRest: () => set(!flip),
  });

  const AnimatedPlayer = animated(Player);

  return (
    <div>
      <AnimatedPlayer style={animateStyle}>
        <div style={{ fontSize: "60px" }}>Welcome to the site</div>
      </AnimatedPlayer>
    </div>
  );
}

export default Welcome;

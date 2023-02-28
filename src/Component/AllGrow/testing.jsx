import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function OnlyTestingEvents() {
  const [CounterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div
        style={{
          width: "100%",
          background: "black",
          marginTop: "1000px",
          color: "white",
          padding: "50px",
        }}
      >
        <h1>
          {CounterOn && (
            <CountUp start={0} end={500} duration={3} delay={0.5} />
          )}
          +
        </h1>
      </div>
    </ScrollTrigger>
  );
}

export default OnlyTestingEvents;

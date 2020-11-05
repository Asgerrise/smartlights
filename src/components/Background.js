/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";

import BgCircle from "./BgCircle";

const Background = () => {
  const [rotation, setRotation] = useState(localStorage.getItem("details"));

  useEffect(() => {
    setTimeout(() => {
      setRotation(localStorage.getItem("details"));
    }, 10);
  }, []);

  const style = css`
    position: absolute;
    top: -5%;
    right: 0;
    left: 0;
    height: 20em;
    transition: transform 0.7s cubic-bezier(0.46, 0.13, 0.42, 1);
    transform: scale(1.3)
      ${rotation === "true" ? "rotate(-40deg)" : "rotate(0deg)"};
    pointer-events: none;
    z-index: -1;
  `;

  return (
    <div css={style}>
      <BgCircle top="0" left="0" />
      <BgCircle bottom="0" left="10%" />
      <BgCircle bottom="15%" right="0" />
    </div>
  );
};

export default Background;

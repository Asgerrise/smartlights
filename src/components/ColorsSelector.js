/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState } from "react";

import ColorCircle from "./ColorCircle";

const ColorsSelector = ({ roomColor, lights }) => {
  const [colorMargin, setColorMargin] = useState(false);
  const colors = [
    {
      color: "hsl(0, 100%, 80%)",
      hue: 0,
      sat: 254,
      bright: 203,
      margin: !colorMargin ? 0 : "calc(10vw - 25px)",
      storage: roomColor,
    },
    {
      color: "hsl(127, 69%, 75%)",
      hue: 127,
      sat: 175,
      bright: 190,
      storage: roomColor,
    },
    {
      color: "hsl(203, 69%, 75%)",
      hue: 203,
      sat: 175,
      bright: 190,
      storage: roomColor,
    },
    {
      color: "hsl(252, 69%, 75%)",
      hue: 252,
      sat: 175,
      bright: 190,
      storage: roomColor,
    },
    {
      color: "hsl(291, 69%, 75%)",
      hue: 291,
      sat: 175,
      bright: 190,
      storage: roomColor,
    },
    {
      color: "hsl(41, 69%, 75%)",
      hue: 41,
      sat: 175,
      bright: 190,
      storage: roomColor,
    },
    {
      color: null,
      icon: true,
      storage: roomColor,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setColorMargin("calc(10vw - 25px)");
    }, 700);
  }, []);

  const style = css`
    display: flex;
    list-style: none;
    width: 100%;
  `;

  return (
    <ul css={style}>
      {colors.map((circle, index) => (
        <ColorCircle
          key={index}
          color={circle.color}
          plus={circle.icon && circle.icon}
          margin={circle.margin ? circle.margin : colorMargin}
          storage={circle.storage}
          hue={circle.hue}
          sat={circle.sat}
          bright={circle.bright}
          lights={lights}
        />
      ))}
    </ul>
  );
};

export default ColorsSelector;

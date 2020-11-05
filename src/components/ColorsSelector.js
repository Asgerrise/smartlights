/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState } from "react";

import ColorCircle from "./ColorCircle";

const ColorsSelector = ({ roomColor }) => {
  const [colorMargin, setColorMargin] = useState(false);
  const colors = [
    {
      color: "#FF9B9B",
      margin: !colorMargin ? 0 : "calc(10vw - 25px)",
    },
    {
      color: "#94EB9E",
      storage: roomColor,
    },
    {
      color: "#94CAEB",
      storage: roomColor,
    },
    {
      color: "#A594EB",
      storage: roomColor,
    },
    {
      color: "#DE94EB",
      storage: roomColor,
    },
    {
      color: "#EBD094",
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
        />
      ))}
    </ul>
  );
};

export default ColorsSelector;

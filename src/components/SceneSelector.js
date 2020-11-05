/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState } from "react";

import Button from "./Button";

import bulb from "../img/bulbBtnIconWhite.svg";

const SceneSelector = () => {
  const [sceneMargin, setSceneMargin] = useState(true);
  const buttons = [
    {
      text: "Birthday",
      color: "90deg, rgba(255,155,155,1) 0%, rgba(255,188,145,1) 100%",
    },
    {
      text: "Party",
      color: "90deg, rgba(166,147,235,1) 0%, rgba(218,147,235,1) 100%",
      margin: sceneMargin,
    },
    {
      text: "Relax",
      color: "90deg, rgba(147,202,235,1) 0%, rgba(147,221,235,1) 100%",
    },
    {
      text: "Fun",
      color: "90deg, rgba(137,221,148,1) 0%, rgba(191,236,146,1) 100%",
      margin: sceneMargin,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSceneMargin(false);
    }, 700);
  }, []);

  const style = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    row-gap: 1.2em;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 348px) {
      justify-content: center;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  `;

  return (
    <div css={style}>
      {buttons.map((button) => (
        <Button
          key={button.text}
          bgColor={`linear-gradient(${button.color})`}
          text={button.text}
          width="150px"
          height="55px"
          color="white"
          icon={bulb}
          scene
          margin={button.margin && button.margin}
        />
      ))}
    </div>
  );
};

export default SceneSelector;

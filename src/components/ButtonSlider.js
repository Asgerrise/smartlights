/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "./Button";

import desk from "../img/deskBtnIcon.svg";
import bed from "../img/bedBtnIcon.svg";
import bulb from "../img/bulbBtnIcon.svg";

const ButtonSlider = ({ position }) => {
  const style = css`
    display: grid;
    overflow-x: scroll;
    width: 100%;
    gap: 15px;
    align-items: center;
    transform: ${position ? "translateX(100vw)" : "translateX(0vw)"};
    transition: transform 1s cubic-bezier(0.46, 0.13, 0.42, 1);

    ::-webkit-scrollbar {
      display: none;
    }
  `;
  return (
    <div css={style}>
      <Button
        bgColor="white"
        text="Main Light"
        width="125px"
        height="45px"
        color="#002D67"
        icon={bulb}
        oneRow
      />
      <Button
        bgColor="#093B7B"
        text="Desk lights"
        width="125px"
        height="45px"
        color="white"
        icon={desk}
        oneRow
      />
      <Button
        bgColor="white"
        text="Bed Light"
        width="125px"
        height="45px"
        color="#002D67"
        icon={bed}
        oneRow
      />
    </div>
  );
};

export default ButtonSlider;

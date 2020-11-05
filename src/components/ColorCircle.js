/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";

import { BulbColorContext } from "../contexts/BulbColorContext";

const ColorCircle = ({ color, plus, margin, storage }) => {
  const { colorContext } = useContext(BulbColorContext);
  const [colorValue, setColorValue] = colorContext; //eslint-disable-line no-unused-vars

  const style = css`
    border-radius: 50%;
    width: 29px;
    height: 29px;
    background-color: ${color ? color : "white"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${margin && margin};
    transition: margin 1s cubic-bezier(0.46, 0.13, 0.42, 1);
    ${!margin && "margin-left:-7px"};
  `;

  return (
    // eslint-disable-next-line
    <li
      onClick={
        color === null
          ? null
          : () => {
              setColorValue(color);
              localStorage.setItem(storage, color);
            }
      }
      css={style}
    >
      {plus && "+"}
    </li>
  );
};

export default ColorCircle;

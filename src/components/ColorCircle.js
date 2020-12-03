/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useEffect } from "react";

import { BulbColorContext } from "../contexts/BulbColorContext";

const ColorCircle = ({ color, plus, margin, storage, hue, sat, lights }) => {
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

  useEffect(() => {
    fetch(
      `http://192.168.8.100/api/MDGKTPf0CyfrXTNEF1Frik2qjA8xZ-qAIhC-fzLr/lights/${lights[0]}/state`,
      {
        method: "PUT",
        body: JSON.stringify({
          hue: Math.floor(localStorage.getItem(storage + "Hue") * 182.09),
          sat: localStorage.getItem(storage + "Sat"),
        }),
      }
    );
  }, [colorValue, storage, lights]);

  return (
    // eslint-disable-next-line
    <li
      onClick={
        color === null
          ? null
          : () => {
              setColorValue(
                `hsl(${hue}, ${(sat / 254) * 100}%, ${
                  localStorage.getItem(storage + " brightness") * 80
                }%)`
              );
              localStorage.setItem(storage, "true");
              localStorage.setItem(storage + "Hue", hue);
              localStorage.setItem(storage + "Sat", (sat / 254) * 100);
            }
      }
      css={style}
    >
      {plus && "+"}
    </li>
  );
};

export default ColorCircle;

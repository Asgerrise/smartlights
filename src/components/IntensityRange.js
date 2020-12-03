/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useEffect, useCallback } from "react";
import { throttle } from "lodash";

import { BulbColorContext } from "../contexts/BulbColorContext";

import bulbOff from "../img/bulbOff.svg";
import bulbOn from "../img/bulbOn.svg";

const IntensityRange = ({ room, lights }) => {
  const { opacityContext } = useContext(BulbColorContext);
  const [opacityValue, setOpacityValue] = opacityContext;

  const style = css`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;

    .input-container {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-items: center;
    }
    .marks {
      display: flex;
      justify-content: space-between;
      padding: 0 0.5em;
    }
    span {
      height: 4px;
      width: 1px;
      background-color: #cecece;
    }

    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      background: transparent;
      margin-bottom: 0.8em;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      margin-top: -7px;
      background-color: white;
    }
    input[type="range"]::-moz-range-thumb {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      background-color: white;
    }

    input[type="range"]:focus {
      outline: none;
    }

    input[type="range"]::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      height: 1px;
      background-color: #ffd339;
    }
    input[type="range"]::-moz-range-track {
      height: 1px;
      background-color: #ffd339;
    }
  `;

  const changeFunction = (e) => {
    localStorage.setItem(room + " brightness", e.target.value / 100);
    setOpacityValue(e.target.value / 100);
  };

  const throttleChange = useCallback(throttle(changeFunction, 100), []);

  useEffect(() => {
    fetch(
      `http://192.168.8.100/api/MDGKTPf0CyfrXTNEF1Frik2qjA8xZ-qAIhC-fzLr/lights/${lights[0]}/state`,
      {
        method: "PUT",
        body: JSON.stringify({
          transitiontime: 1,
          bri: Math.floor(localStorage.getItem(room + " brightness") * 254),
        }),
      }
    );
  }, [opacityValue, room, lights]);

  return (
    <div css={style}>
      <img src={`../${bulbOff}`} alt="Lightbulb turned off" />
      <div className="input-container">
        <input
          value={opacityValue * 100}
          type="range"
          name="range"
          id="range"
          min="0"
          max="100"
          onChange={(e) => {
            e.persist();
            throttleChange(e);
          }}
        />
        <div className="marks">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <img src={`../${bulbOn}`} alt="Lightbulb turned on" />
    </div>
  );
};

export default IntensityRange;

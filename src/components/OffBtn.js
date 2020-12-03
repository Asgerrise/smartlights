/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState } from "react";

import offButton from "../img/offButton.svg";

const OffBtn = ({ lights }) => {
  const [power, setPower] = useState(null);
  const [powerData, setPowerData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://192.168.8.100/api/MDGKTPf0CyfrXTNEF1Frik2qjA8xZ-qAIhC-fzLr/lights/${lights[0]}/`
      );
      const result = await response.json();
      setPowerData(result);
    })();
  }, [lights]);

  useEffect(() => {
    powerData && setPower(powerData.state.on);
  }, [powerData]);

  useEffect(() => {
    powerData &&
      fetch(
        `http://192.168.8.100/api/MDGKTPf0CyfrXTNEF1Frik2qjA8xZ-qAIhC-fzLr/lights/${lights[0]}/state`,
        {
          method: "PUT",
          body: JSON.stringify({
            on: power,
          }),
        }
      );
  }, [lights, power, powerData]);

  const style = css`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    top: -1.1em;
    right: 1.3em;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  `;

  return (
    <button
      css={style}
      className="offBtn"
      onClick={() => {
        setPower(!power);
      }}
    >
      <img src={`../${offButton}`} alt="Off Button" />
    </button>
  );
};

export default OffBtn;

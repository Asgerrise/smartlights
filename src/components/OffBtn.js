/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import offButton from "../img/offButton.svg";

const OffBtn = () => {
  const style = css`
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
    <div css={style} className="offBtn">
      <img src={offButton} alt="Off Button" />
    </div>
  );
};

export default OffBtn;

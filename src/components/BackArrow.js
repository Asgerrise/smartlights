/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import arrow from "../img/arrow.svg";

const BackArrow = () => {
  const style = css`
    border: none;
    background-color: transparent;
    margin-right: 10px;

    img {
      margin: 0.2em 0;
    }
  `;

  return (
    <button css={style} onClick={() => window.history.back()}>
      <img src={`../${arrow}`} alt="Arrow" />
    </button>
  );
};

export default BackArrow;

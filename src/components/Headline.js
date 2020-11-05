/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import "../fonts/montserrat.css";
import BackArrow from "./BackArrow";

const Headline = ({ text, size, backArrow }) => {
  const style = css`
    font-size: ${size};
    font-weight: 600;
    max-width: 180px;
    color: white;
  `;

  return (
    <h2 css={style}>
      {backArrow && <BackArrow />}
      {text}
    </h2>
  );
};

export default Headline;

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const BgCircle = ({ top, right, left, bottom }) => {
  const style = css`
    background-color: white;
    opacity: 0.04;
    position: absolute;
    border-radius: 50%;
    height: 140px;
    width: 140px;
    ${top && "top:" + top};
    ${right && "right:" + right};
    ${left && "left:" + left};
    ${bottom && "bottom:" + bottom};
  `;

  return <div css={style}></div>;
};

export default BgCircle;

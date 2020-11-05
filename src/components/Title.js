/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Title = ({ text, size, color, margin }) => {
  const style = css`
    font-size: ${size ? size : "19px"};
    color: ${color ? color : "#393939"};
    margin-bottom: ${margin ? margin : "1.6em"};
    //transition: opacity 0.7s;
  `;

  return <h2 css={style}>{text}</h2>;
};

export default Title;

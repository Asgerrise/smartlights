/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Section = ({ children, noMargin }) => {
  const style = css`
    ${noMargin ? "margin-bottom:0;" : "margin-bottom: 2em"};
    width: 100%;
  `;

  return <section css={style}>{children}</section>;
};

export default Section;

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ContentBg = ({ children }) => {
  const style = css`
    background-color: #f6f8fb;
    border-radius: 31px 31px 0 0;
    height: 100%;
    padding: 1.5em;
    padding-bottom: 5.7em;
    position: relative;
  `;
  return <main css={style}>{children}</main>;
};

export default ContentBg;

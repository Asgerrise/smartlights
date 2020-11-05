/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Background from "./Background";

const Wrapper = ({ children }) => {
  const style = css`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    height: 100vh;
    padding-top: 4em;
    position: relative;
    overflow-x: hidden;
  `;
  return (
    <div css={style}>
      <Background />
      {children}
    </div>
  );
};

export default Wrapper;

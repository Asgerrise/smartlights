/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Nav from "./Nav";

const Footer = () => {
  const style = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4.2em;
    box-shadow: 0px -4px 20px 0px rgba(100, 100, 100, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  `;

  return (
    <footer css={style}>
      <Nav />
    </footer>
  );
};

export default Footer;

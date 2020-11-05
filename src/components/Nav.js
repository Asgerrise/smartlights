/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import NavIcon from "./NavIcon";

import bulb from "../img/bulb.svg";
import home from "../img/home.svg";
import settings from "../img/settings.svg";

const Nav = () => {
  const style = css`
    display: flex;
    width: 70%;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <nav css={style}>
      <NavIcon path="/" icon={bulb} alt="Lights" />
      <NavIcon path="/" icon={home} alt="Home" />
      <NavIcon path="/" icon={settings} alt="Settings" />
    </nav>
  );
};

export default Nav;

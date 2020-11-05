/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "@reach/router";

const NavIcon = ({ path, icon, alt }) => {
  return (
    <Link to={path ? path : "/"}>
      <img src={icon} alt={alt} />
    </Link>
  );
};

export default NavIcon;

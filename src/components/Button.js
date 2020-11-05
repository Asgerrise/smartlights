/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({
  bgColor,
  icon,
  text,
  width,
  height,
  color,
  oneRow,
  scene,
  margin,
}) => {
  const style = css`
    background: ${bgColor};
    border: none;
    border-radius: 12px;
    font-size: 0.8em;
    width: ${width};
    height: ${height};
    display: flex;
    align-items: center;
    justify-content: ${scene ? "flex-start" : "center"};
    color: ${color};
    font-family: Montserrat, sans-serif;
    transition: margin 1s cubic-bezier(0.46, 0.13, 0.42, 1);
    ${oneRow && "grid-row: 1/2"};
    ${scene && "padding-left:1.5em"};
    ${margin ? "margin-left:-65px" : "margin-left:0"};

    img {
      margin-right: ${scene ? "1.4em" : "0.6em"};
    }

    @media (max-width: 348px) {
      ${scene &&
      `width: 100%;
      justify-content: center;
      padding-left:0`};
    }
  `;

  return (
    <button css={style}>
      <img src={icon} alt={text} />
      {text}
    </button>
  );
};

export default Button;

/*
<Button
        bgColor="#093B7B"
        text="Desk light"
        width="125px"
        height="45px"
        color="white"
        icon={desk}
      />
*/

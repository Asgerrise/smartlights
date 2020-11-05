/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import avatar from "../img/avatar.jpg";

const Avatar = ({ notification }) => {
  const style = css`
    width: 53px;
    height: 53px;
    border-radius: 50%;
    border: 1px solid white;
    position: relative;

    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    ${notification &&
    `
      ::after{
        content: "";
        position:absolute;
        width:10px;
        height:10px;
        background-color: #FF9898;
        top:2px;
        right:2px;
        border-radius:50%;
      }
    `}
  `;
  return (
    <div css={style}>
      <img src={avatar} alt="Avatar" />
    </div>
  );
};

export default Avatar;

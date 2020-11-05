/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link, navigate } from "@reach/router";
//import { useContext } from "react";

import Title from "./Title";

//import { FadeContext } from "../contexts/FadeContext";

const Room = ({ image, title, numOfLights, id }) => {
  //const { fadeContext } = useContext(FadeContext);
  //const [fade, setFade] = fadeContext;

  const style = css`
    text-decoration: none;
    border-radius: 24px;
    background-color: white;
    padding: 1.2em 1em;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    height: 150px;
    gap: 20px;
    box-shadow: 0px 0px 10px 0px rgba(100, 100, 100, 0.1);

    @media (max-width: 371px) {
      justify-content: center;
      justify-items: center;

      div {
        text-align: center;
      }
    }
    p {
      font-size: 13px;
      color: #ffa939;
      font-weight: 300;
    }
  `;

  return (
    <Link
      // onClick={(e) => {
      //   e.preventDefault();
      //   setFade(0);
      //   setTimeout(() => {
      //     navigate(`details/${id}`);
      //   }, 700);
      // }}
      to={`details/${id}`}
      css={style}
    >
      <img src={image} alt={title} />
      <div>
        <Title text={title} margin=".2em" size="18px" />
        <p>
          {numOfLights} {+numOfLights < 2 ? "Light" : "Lights"}
        </p>
      </div>
    </Link>
  );
};

export default Room;

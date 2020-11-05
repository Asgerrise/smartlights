/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";

import Headline from "./Headline";
import Avatar from "./Avatar";
import Lamp from "./Lamp";
import ButtonSlider from "./ButtonSlider";

const Header = ({
  text,
  avatar,
  details,
  backArrow,
  lamp,
  slider,
  lights,
  pathname,
}) => {
  const [heightChanged, setHeightChanged] = useState(
    localStorage.getItem("details")
  );
  const [lampPosition, setLampPosition] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(true);

  useEffect(() => {
    if (details) {
      localStorage.setItem("details", true);
      setTimeout(() => {
        setHeightChanged(localStorage.getItem("details"));
      }, 1);
    } else {
      localStorage.setItem("details", false);
      setTimeout(() => {
        setHeightChanged(localStorage.getItem("details"));
      }, 1);
    }
  }, [details]);

  useEffect(() => {
    setTimeout(() => {
      setLampPosition(false);
      setSliderPosition(false);
    }, 700);
  }, []);

  const style = css`
    padding: 0 25px 1em;
    transition: height 0.7s cubic-bezier(0.46, 0.13, 0.42, 1);
    overflow: hidden;
    display: grid;
    gap: 4px;
    height: ${heightChanged === "true" ? "13em" : "6.5em"};
    .text-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lights {
      color: #ffd239;
      font-size: 19px;
    }
  `;
  return (
    <header css={style}>
      {lamp && <Lamp top={lampPosition ? true : false} id={pathname} />}
      <div className="text-container">
        <Headline
          text={text}
          size="30px"
          backArrow={backArrow ? true : false}
        />
        {avatar && <Avatar notification />}
      </div>
      {lights && (
        <p className="lights">
          {lights} {lights < 2 ? "Light" : "Lights"}
        </p>
      )}
      {slider && <ButtonSlider position={sliderPosition ? true : false} />}
    </header>
  );
};

export default Header;

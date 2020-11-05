/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useEffect } from "react";

import { BulbColorContext } from "../contexts/BulbColorContext";
import { dataContext } from "../contexts/DataContext";

const Lamp = ({ top, id }) => {
  const { data } = useContext(dataContext);
  const { colorContext, opacityContext } = useContext(BulbColorContext);
  const [colorValue, setColorValue] = colorContext;
  const [opacityValue, setOpacityValue] = opacityContext;

  useEffect(() => {
    setColorValue(
      localStorage.getItem(data[id].name)
        ? localStorage.getItem(data[id].name)
        : colorValue
    );
    setOpacityValue(
      localStorage.getItem(data[id].name + " brightness")
        ? localStorage.getItem(data[id].name + " brightness")
        : opacityValue
    );
  }, [data, id, setColorValue, colorValue, setOpacityValue, opacityValue]);

  const style = css`
    position: absolute;
    top: ${top ? "-45px" : 0};
    right: 7vw;
    transition: top 1s cubic-bezier(0.46, 0.13, 0.42, 1);
  `;
  return (
    <svg css={style} width="139" height="192" viewBox="0 0 139 192">
      <defs>
        <filter
          id="a"
          x="35"
          y="122"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="8" result="b" />
          <feFlood floodColor="#002d67" floodOpacity={opacityValue} />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="c"
          x="35"
          y="122"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="8" result="d" />
          <feFlood id="bulbShadow" floodColor={colorValue} />
          <feComposite operator="in" in2="d" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-204 4)">
        <g transform="matrix(1, 0, 0, 1, 204, -4)" filter="url(#a)">
          <circle
            cx="11"
            cy="11"
            r="11"
            transform="translate(59 143)"
            fill="#002d67"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 204, -4)" filter="url(#c)">
          <circle
            id="bulb"
            cx="11"
            cy="11"
            r="11"
            transform="translate(59 143)"
            fill={colorValue}
            opacity={opacityValue}
          />
        </g>
        <path
          d="M30.334,1.617h79.054c3.314,0,4.206,2.324,6,6L139,62a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6L24.334,7.617C25.837,4.237,27.02,1.617,30.334,1.617Z"
          transform="translate(204 85)"
          fill="#fff"
        />
        <rect
          width="5"
          height="102"
          transform="translate(271 -4)"
          fill="#fff"
        />
        <rect
          width="4"
          height="58"
          rx="2"
          transform="matrix(0.921, -0.391, 0.391, 0.921, 303.828, 92.087)"
          fill="#568bd0"
          opacity="0.151"
        />
      </g>
    </svg>
  );
};

export default Lamp;

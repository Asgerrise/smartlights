/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext, useEffect, useState } from "react";

import Room from "./Room";

import bedRoom from "../img/bed.svg";
import balcony from "../img/balcony.svg";
import bathroom from "../img/bathtub.svg";
import outdoor from "../img/house.svg";
import kitchen from "../img/kitchen.svg";
import livingRoom from "../img/room.svg";

import { dataContext } from "../contexts/DataContext";

const RoomsContainer = ({ fade }) => {
  const { data } = useContext(dataContext);
  const [loading, setLoading] = useState(true);

  const imageArray = [bedRoom, livingRoom, kitchen, bathroom, outdoor, balcony];

  useEffect(() => {
    data && setLoading(false);
  }, [data]);

  const style = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.2em 1.5em;
    transition: opacity 0.7s;
    opacity: ${fade};
  `;

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <section css={style}>
      {data.map((room, index) => (
        <Room
          key={room.id}
          title={room.name}
          id={room.id}
          image={imageArray[index]}
          numOfLights={room.lights}
        />
      ))}
    </section>
  );
};

export default RoomsContainer;

import React, { useContext, useState, useEffect } from "react";

import ColorsSelector from "../components/ColorsSelector";
import ContentBg from "../components/ContentBg";
import Header from "../components/Header";
import IntensityRange from "../components/IntensityRange";
import OffBtn from "../components/OffBtn";
import SceneSelector from "../components/SceneSelector";
import Section from "../components/Section";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

import BulbColorContextProvider from "../contexts/BulbColorContext";
import { dataContext } from "../contexts/DataContext";

const Details = ({ id }) => {
  const { data } = useContext(dataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data && setLoading(false);
  }, [data]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <Wrapper>
      <BulbColorContextProvider>
        <Header
          text={data[id].name}
          details
          backArrow
          lamp
          slider
          lights={data[id].lights}
          pathname={id}
        />
        <ContentBg>
          <OffBtn />
          <Section>
            <Title text="Intensity" color="#002D67" margin="1.3em" />
            <IntensityRange room={data[id].name} />
          </Section>
          <Section>
            <Title text="Colors" color="#002D67" margin="1.3em" />
            <ColorsSelector roomColor={data[id].name} />
          </Section>
          <Section noMargin>
            <Title text="Scenes" color="#002D67" margin="1.3em" />
            <SceneSelector />
          </Section>
        </ContentBg>
      </BulbColorContextProvider>
      <Footer />
    </Wrapper>
  );
};

export default Details;

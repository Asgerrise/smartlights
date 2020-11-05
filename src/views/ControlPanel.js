import React from "react";

import ContentBg from "../components/ContentBg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RoomsContainer from "../components/RoomsContainer";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

const ControlPanel = () => {
  return (
    <Wrapper>
      <Header text="Control Panel" avatar />
      <ContentBg>
        <Title text="All Rooms" color="#002D67" />
        <RoomsContainer />
      </ContentBg>
      <Footer />
    </Wrapper>
  );
};

export default ControlPanel;

import { Box } from "@mui/system";

import React from "react";
import AboutUs from "./AboutUs";
import Carousal from "./Carousal";
import Category from "./Category";

import ContactForm from "./ContactForm";
import Discover from "./Discover";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Carousal></Carousal>
      <AboutUs></AboutUs>
      <Category></Category>

      <Services></Services>
      <Discover></Discover>
      <ContactForm></ContactForm>
    </>
  );
};

export default Home;

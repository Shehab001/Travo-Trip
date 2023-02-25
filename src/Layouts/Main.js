import React from "react";
import { Outlet } from "react-router";

import AboutUs from "../Components/AboutUs";
import Discover from "../Components/Discover";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import NavBar from "../Components/Navbar";
import Services from "../Components/Services";

const Main = () => {
  return (
    <>
      <Home></Home>
      <NavBar></NavBar>
      <AboutUs></AboutUs>
      <Services></Services>
      <Outlet></Outlet>
      <Discover></Discover>
      <Footer></Footer>
    </>
  );
};

export default Main;

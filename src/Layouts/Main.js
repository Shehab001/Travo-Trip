import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import NavBar from "../Components/Navbar";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Button from "../Components/Small/Button";

const Main = () => {
  return (
    <>
      <Home></Home>
      <NavBar></NavBar>
      <AboutUs></AboutUs>
      <Outlet></Outlet>
      <SignIn></SignIn>
      <Box sx={{ my: "30px" }}></Box>
      <SignUp></SignUp>
      <Footer></Footer>
    </>
  );
};

export default Main;

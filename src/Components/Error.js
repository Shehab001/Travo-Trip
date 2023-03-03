import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/undraw_Page_not_found_re_e9o6.png";
import Buttonn from "./Small/Button";

const Error = () => {
  return (
    <Box>
      <Box sx={{ width: "60%", mt: 10, mx: "auto" }}>
        <img src={img} alt="Icon"></img>
      </Box>
      <Box sx={{ width: "168px", mx: "auto", mb: 20 }}>
        <Link to="/">
          <Buttonn
            color={"ff5d0d"}
            hoverColor={"0A212D"}
            name={"Go To Home"}
          ></Buttonn>
        </Link>
      </Box>
    </Box>
  );
};

export default Error;

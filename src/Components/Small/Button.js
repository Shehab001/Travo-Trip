import { Button } from "@mui/material";
import React from "react";

const Buttonn = (props) => {
  //props && console.log("hi", props);
  return (
    <>
      <Button
        sx={{
          backgroundColor: `#${props.color}`,
          color: "white",
          borderRadius: 0,
          float: "left",
          py: "12px",
          px: "40px",
          mt: "20px",
          "&:hover": {
            background: `#${props.hoverColor}`,
          },
        }}
      >
        {props.name}
      </Button>
    </>
  );
};

export default Buttonn;

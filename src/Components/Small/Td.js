import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Td = (props) => {
  const services = [
    "Lodging",
    "Private residence",
    "Professional Approach",
    "Quality Service Guaranteed",
    "Priceless Experience",
  ];
  return (
    <>
      <Box sx={{ mt: "5px" }}>
        {services.map((service) => (
          <Typography
            sx={{
              fontFamily: "Overpass,sans-serif",
              textAlign: "start",
              "&:hover": { transform: "translate(10px)" },
              cursor: "pointer",
            }}
          >
            <span
              style={{
                color: "#ff5d0d",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              &#8250;
            </span>{" "}
            {service}
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default Td;

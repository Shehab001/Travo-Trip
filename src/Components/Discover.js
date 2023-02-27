import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../assets/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg";
import "./CSS/Discover.css";
import Quoate from "./Small/Quoate";

const Discover = () => {
  return (
    <>
      <Box
        className="bgc background-tint"
        sx={{ px: "10%", mt: 10, position: "relative" }}
      >
        <Grid
          container
          spacing={2}
          sx={{ textAlign: "start" }}
          columns={{ xs: 6, md: 12 }}
        >
          <Grid item xs={6} md={6}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#ff5d0d",
                fontFamily: "Overpass, sans-serif",
                mt: { xs: "25%", md: "25%" },
              }}
            >
              GET A UNIQUE FEELING
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "40px", lg: "45px" },
                color: "white",
                fontFamily: "Overpass, sans-serif",
                fontWeight: "bold",
                lineHeight: "55px",
                mt: "5%",
              }}
            >
              Discover Amazing <br></br>And Brethtaking View
            </Typography>
            <Typography
              sx={{
                color: "#6d7a81",
                fontFamily: "Overpass, sans-serif",
                fontSize: "17px",
                mt: "3%",
                color: "white",
              }}
            >
              Preserve and cherish the pale blue dot, it's the only home we've
              ever known.The richness I achieve comes from Nature, the source of
              my inspiration.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img
              style={{
                maxWidth: "25%",
                position: "absolute",
                bottom: 0,
                right: "10%",
              }}
              src={img}
              alt="img"
            />
          </Grid>
        </Grid>
      </Box>
      <Box position={"relative"} sx={{ mt: "-130px", zIndex: 1500 }}>
        <Quoate></Quoate>
      </Box>
    </>
  );
};

export default Discover;

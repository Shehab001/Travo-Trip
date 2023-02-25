import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import img1 from "../assets/zany-jadraque-ZCRtfop2hZY-unsplash.jpg";
import img2 from "../assets/frank-mckenna-OD9EOzfSOh0-unsplash.jpg";
import img3 from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Buttonn from "./Small/Button";
import Searchh from "./Small/Search";

function Carousal(props) {
  var items = [{ img: img1 }, { img: img2 }, { img: img3 }];
  // console.log(items);
  return (
    <Carousel showArrows={false} showIndicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <Paper>
        <img src={props.item.img} alt="Images" sx={{ zIndex: 900 }}></img>
      </Paper>
      <Box
        sx={{
          //   position: "absolute",
          //   top: { xs: "10%", sm: "40%" },

          position: "absolute",
          top: "54%",
          left: "20%",
          transform: "translate(-10%, -50%)",

          zIndex: 1500,
          width: "100%",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            width: "80%",
            fontSize: { xs: "1.5rem", md: "4rem", sm: "2.5rem" },
            textAlign: "start",
            fontFamily: "serif-pro",
            lineHeight: { xs: "30px", sm: "40px", md: "80px" },
            pl: { xs: "1rem", md: "1rem", sm: "1rem" },
            color: "black",
          }}
        >
          <span>Let's</span>
          <br></br>
          <span sx={{ fontWeight: "extra-bold", fontFamily: "serif-pro" }}>
            Make A Trip
          </span>
        </Typography>
        <Typography
          sx={{
            width: "100%",
            pl: "1rem",
            textAlign: "start",
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "1rem", md: "2rem", sm: "1rem" },
            mt: "5px",
          }}
        >
          <span>Find Your Next Travel Destination With Us</span>
        </Typography>
        <Box ml={"15px"}>
          <Buttonn
            color={"ff5d0d"}
            hoverColor={"0A212D"}
            name={"Know Us"}
          ></Buttonn>
        </Box>
      </Box>
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          zIndex: 1500,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ border: 1, height: "10rem", width: "20%" }}></Box>
        <Box sx={{ border: 1, height: "10rem", width: "20%" }}></Box>
        <Box sx={{ border: 1, height: "10rem", width: "20%" }}></Box>
      </Box> */}
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          position: "absolute",
          left: { xs: "63%", md: "50%" },
          bottom: { xs: "5%", md: "10%" },
          transform: "translate(-50%)",
        }}
      >
        <Searchh></Searchh>
      </Box>
    </Box>
  );
}

export default Carousal;

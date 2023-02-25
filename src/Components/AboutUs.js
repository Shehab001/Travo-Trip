import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import img from "../assets/jeshoots-com-mSESwdMZr-A-unsplash.jpg";
import { Typography } from "@mui/material";
import Tilt from "react-tilt";
import CountUp from "react-countup";
import Button from "./Small/Button";
import Td from "./Small/Td";
import Buttonn from "./Small/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const AboutUs = () => {
  return (
    <>
      <Box
        position={"relative"}
        sx={{
          width: "100%",
          mt: -4.12,
          zIndex: 1500,
          background: "white",

          px: "10%",
          py: "10%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 12 }}
          rowSpacing={5}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Tilt options={{ max: 15, speed: 300 }}>
                <Item>
                  <img src={img} alt="Travel"></img>
                </Item>
              </Tilt>
            </Grid>
            <Grid
              item
              xs={12}
              container
              columnSpacing={{ xs: 1, md: 2 }}
              sx={{ mt: "35px" }}
            >
              <Grid item xs={3}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "16px",
                      sm: "24px",
                      md: "32px",
                      color: "black",
                    },
                  }}
                >
                  <CountUp start={0} end={579} delay={0} enableScrollSpy={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <sup style={{ color: "red", marginLeft: 4 }}>+</sup>
                      </div>
                    )}
                  </CountUp>

                  <p
                    style={{
                      color: "#cbbdbd",
                      fontSize: "12px",

                      fontFamily: "serif-pro",
                    }}
                  >
                    Satisfied Clients
                  </p>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "16px",
                      sm: "24px",
                      md: "32px",
                      color: "black",
                    },
                  }}
                >
                  <CountUp start={0} end={120} delay={0} enableScrollSpy={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <sup style={{ color: "red", marginLeft: 4 }}>+</sup>
                      </div>
                    )}
                  </CountUp>
                  <p
                    style={{
                      color: "#cbbdbd",
                      fontSize: "12px",

                      fontFamily: "serif-pro",
                    }}
                  >
                    Professional Crew
                  </p>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "16px",
                      sm: "24px",
                      md: "32px",
                      color: "black",
                    },
                  }}
                >
                  <CountUp start={0} end={341} delay={0} enableScrollSpy={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <sup style={{ color: "red", marginLeft: 4 }}>+</sup>
                      </div>
                    )}
                  </CountUp>
                  <p
                    style={{
                      color: "#cbbdbd",
                      fontSize: "12px",

                      fontFamily: "serif-pro",
                    }}
                  >
                    Project Completed
                  </p>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                {" "}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "16px",
                      sm: "24px",
                      md: "32px",
                      color: "black",
                    },
                  }}
                >
                  <CountUp start={0} end={231} delay={0} enableScrollSpy={true}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                        <sup style={{ color: "red", marginLeft: 4 }}>+</sup>
                      </div>
                    )}
                  </CountUp>
                  <p
                    style={{
                      color: "#cbbdbd",
                      fontSize: "12px",

                      fontFamily: "serif-pro",
                    }}
                  >
                    Premium Facilities
                  </p>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ textAlign: "start" }}>
              <p
                style={{
                  color: "red",
                  fontFamily: "serif-pro",
                  marginBottom: "5px",
                }}
              >
                ABOUT TRAVO
              </p>
              <h1
                style={{
                  color: "black",
                  fontFamily: "serif-pro",
                  fontSize: "34px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  width: "70%",
                  lineHeight: "40px",
                }}
              >
                Providing Large Facilities For A Perfect
              </h1>
              <p style={{ color: "#6d7a81" }}>
                The primary role of a travo is to help people make travel
                arrangements, which might include booking flights, hotels,
                sightseeing tours, and making dining recommendations.
              </p>
            </Typography>
            <Td></Td>
            <Buttonn
              color={"ff5d0d"}
              hoverColor={"0A212D"}
              name={"Get Started"}
            ></Buttonn>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;

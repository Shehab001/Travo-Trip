import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./CSS/Slider.css";
import Buttonn from "./Small/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Loader from "./Small/Loader";

const SingleService = () => {
  const data = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState([]);
  const [spin, setSpin] = useState([]);
  console.log(data, reviews);

  useEffect(() => {
    setSpin(true);
    fetch(`https://travel-site-backend.vercel.app/review/${data._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSpin(false);
      });
  }, [data._id]);

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://res.cloudinary.com/dc9bjecdl/image/upload/v1677655272/frank-mckenna-pXFETxj7lzg-unsplash_yvrrvq.jpg)",
        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container component="main" sx={{}}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            mt: 10,
            zIndex: 3000,
            bgcolor: "white",
            pt: 5,
            pb: 8,
            borderTop: 1,
            borderColor: "#6d7a81",
            px: "5%",
          }}
        >
          <Box>
            <Typography
              sx={{
                textDecoration: "underline",
                fontFamily: "overpass,serif-pro",
                my: 5,
                fontSize: { xs: "30px", sm: "35px", md: "50px" },
              }}
            >
              {" "}
              Details About {data.name} Trip
            </Typography>
            <Card sx={{}}>
              <CardMedia
                sx={{ height: { md: 440, xs: "220px" }, width: "100%" }}
                image={data?.img}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  component="div"
                  sx={{
                    textAlign: "start",
                    fontFamily: "overpass,serif-pro",
                    my: 2,
                  }}
                >
                  {data.name}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                    fontSize: "20px",
                    fontFamily: "overpass,serif-pro",
                    mb: 2,
                  }}
                >
                  {data.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                    fontFamily: "overpass,serif-pro",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  Attended : {data.total_taken}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                    fontFamily: "overpass,serif-pro",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  Duration: 3 Days
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "start",
                    fontFamily: "overpass,serif-pro",
                    fontSize: "20px",
                    color: "black",
                  }}
                >
                  Cost : <span>৳</span> {data.price}
                </Typography>
                <CardActions sx={{ float: "right", pb: 5, pr: 5 }}>
                  <Buttonn
                    color={"ff5d0d"}
                    hoverColor={"0A212D"}
                    name={"Book Now"}
                  ></Buttonn>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            mt: 10,
            zIndex: 3000,
            bgcolor: "white",
            pt: 8,
            pb: 8,
            borderTop: 1,
            borderColor: "#6d7a81",
            pr: "5%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textDecoration: "underline",
              fontFamily: "overpass,serif-pro",
              my: 5,
              pt: 8,
            }}
          >
            {" "}
            Reviews
          </Typography>
          {spin === true ? (
            <Loader></Loader>
          ) : (
            <>
              <Box sx={{ height: "112vh", position: "relative" }}>
                <Box
                  sx={{
                    maxHeight: "90vh",
                    // height:"auto",
                    textAlign: "start",
                    ml: 0,
                    p: 2,
                    overflowY: "scroll",
                  }}
                >
                  {reviews.map((review, index) => (
                    <Box sx={{ mb: 2, py: 2, borderBottom: 1, borderTop: 1 }}>
                      <Typography
                        sx={{
                          fontStyle: "overpass,serif-pro",
                          fontWeight: "bold",
                          verticalAlign: "center",
                        }}
                      >
                        <ArrowForwardIcon sx={{ mt: -0.2 }}></ArrowForwardIcon>{" "}
                        {review?.email}
                      </Typography>
                      <Stack spacing={1} sx={{ mt: 1, ml: 3 }}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={5}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>

                      <Typography sx={{ mt: 1, ml: 3 }}>
                        {review?.review}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    textAlign: "start",
                    ml: 2,
                    p: 2,
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Review"
                    variant="outlined"
                    sx={{ width: "80%" }}
                    required
                  />
                  <ControlPointIcon
                    sx={{
                      fontSize: 50,
                      ml: 2,
                      cursor: "pointer",
                      "&:hover": { transform: "scale(1.2)" },
                    }}
                  ></ControlPointIcon>
                </Box>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleService;

import {
  Avatar,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Particle from "./Small/Particle";
import img from "../assets/undraw_add_information_j2wg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Small/Loader";

const AddService = () => {
  const [rating, setRating] = useState(null);
  const [spin, setSpin] = useState(null);

  const handleForm = (event) => {
    setSpin(true);
    event.preventDefault();

    const form = event.target;

    const service = form.name.value;
    const des = form.description.value;
    const price = form.price.value;
    const taken = form.totaltaken.value;
    const url = form.img.value;
    const duration = form.duration.value;
    //console.log(service, des, rating, price, taken, url, duration);

    const add = {
      name: service,
      rating: rating,
      total_taken: taken + "K",
      price: price,
      title: des,
      img: url,
      duration: duration + " Days",
    };
    // console.log(add);
    fetch("https://travel-site-backend.vercel.app/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSpin(false);
          toast.success("Service Added Successfully.");
          event.target.reset();
        }
      });
  };
  return (
    <Box>
      <ToastContainer position="top-center" autoClose={1000} />
      <Box
        sx={{
          height: "80px",
          backgroundColor: "cyan",
          backgroundImage:
            "url(https://res.cloudinary.com/dc9bjecdl/image/upload/v1677745016/frank-mckenna-pXFETxj7lzg-unsplash_zqvb8q.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Particle></Particle>
      <Typography
        sx={{
          width: "221px",
          mx: "auto",
          backgroundColor: "white",
          position: "relative",
          color: "black",
          textDecoration: "underline",
          fontSize: "40px",
          fontWeight: "Bold",
          my: 5,
        }}
      >
        Add Service
      </Typography>
      <Box>
        <Grid container spacing={2} sx={{}}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              px: 5,
              mt: { xs: "", md: "80px" },
            }}
          >
            <img src={img} alt="Icon"></img>
          </Grid>
          <Grid item xs={12} md={6} sx={{ px: 5 }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              {spin === true ? (
                <>
                  <Loader></Loader>
                </>
              ) : (
                <>
                  {" "}
                  <Box
                    sx={{
                      marginTop: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleForm}
                      sx={{ mt: 3, pl: 5 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            autoComplete="name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Location"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            type="text"
                            id="description"
                            autoComplete="description"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="totaltaken"
                            label="Visited(Ex: 70K)"
                            name="totaltaken"
                            autoComplete="totaltaken"
                            type="number"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            fullWidth
                            id="duration"
                            label="Duration(Ex: 3 Days)"
                            name="duration"
                            autoComplete="duration"
                            type="number"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            fullWidth
                            name="price"
                            label="Price(Ex: 5000)"
                            type="number"
                            id="text"
                            autoComplete="price"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Rating
                            sx={{ fontSize: "35px", mt: 1 }}
                            name="simple-controlled"
                            value={rating}
                            required
                            onChange={(event, newValue) => {
                              setRating(newValue);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="img"
                            label="Image Link"
                            type="text"
                            id="img"
                            autoComplete="img"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Add
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddService;

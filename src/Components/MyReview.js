import { Grid, Rating, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../Context/Context";
import Loader from "./Small/Loader";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Particle from "./Small/Particle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  //console.log("k", user);
  const [myreview, setMyreview] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [idDelete, setIdDelete] = useState({});
  const [idEdit, setIdEdit] = useState({});
  const [rating, setRating] = useState({});
  console.log(rating, idEdit, idDelete);

  const [spin, setSpin] = React.useState(false);
  //console.log(myreview.length);

  useEffect(() => {
    setSpin(true);
    fetch(`https://travel-site-backend.vercel.app/myreview/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyreview(data);
        setSpin(false);
      });
  }, [user, refresh]);

  const deleteReview = () => {
    // console.log(id);
    fetch(`https://travel-site-backend.vercel.app/deletereview/${idDelete}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.deletedCount > 0) {
          //notify("Review Deleted.");
          setRefresh(!refresh);
          toast.success("Review Deleted.");
        } else {
          toast.error("Error");
        }
      });
  };

  const handleForm = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = { review: `${form.review.value}`, star: rating };
    console.log(name);

    fetch(`https://travel-site-backend.vercel.app/updatereview/${idEdit}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(name),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // alert(refresh);
          toast.success("Review Edited.");
          setRefresh(!refresh);
        } else {
          toast.error("Error");
        }
      });
    setIdEdit(null);
    form.reset();
  };

  return (
    <Box>
      <ToastContainer position="top-center" />
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
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            width: "219px",
            mx: "auto",
            backgroundColor: "white",
            position: "relative",
            color: "black",
            textDecoration: "underline",
            fontSize: "40px",
            fontWeight: "Bold",
          }}
        >
          My Reviews
        </Typography>
      </Box>
      <Box
        sx={{
          mx: "5%",
          py: 5,
          px: 2,
          color: "black",
          // fontSize: { sx: "16px" },
          // overflow: "hidden",
        }}
      >
        <Tilt options={{ max: 15, speed: 300, scale: 1 }}>
          <Grid container sx={{ boxShadow: "5", backgroundColor: "white" }}>
            <Grid item xs={3} md={3} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Place</Typography>
            </Grid>
            <Grid item xs={4} md={4} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Review</Typography>
            </Grid>
            <Grid item xs={3} md={3} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Rating</Typography>
            </Grid>
            <Grid item xs={2} md={2} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Action</Typography>
            </Grid>
          </Grid>
        </Tilt>

        {spin === true ? (
          <Loader></Loader>
        ) : (
          <>
            {myreview.length === 0 ? (
              <>
                <Tilt options={{ max: 15, speed: 300, scale: 1 }}>
                  <Grid
                    container
                    textAlign={"center"}
                    sx={{
                      boxShadow: "5",
                      my: 2,
                      backgroundColor: "white",
                    }}
                  >
                    <Grid item xs={3} md={3} sx={{}}>
                      <Typography
                        sx={{
                          backgroundColor: "white",
                          py: 2,
                          fontFamily: "overpass,serif-pro",
                          fontSize: 18,
                        }}
                      >
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{}}>
                      <Typography
                        sx={{
                          py: 2,
                          fontFamily: "overpass,serif-pro",
                          fontSize: 18,
                        }}
                      >
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={3} md={3} sx={{}}>
                      <Typography sx={{ py: 2 }}>
                        {" "}
                        <Stack sx={{ alignItems: "center" }}>
                          <Rating
                            sx={{ fontSize: { xs: "16px", sm: "24px" } }}
                            name="half-rating-read"
                            defaultValue={0}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{}}>
                      <Typography sx={{ py: 2 }}>N/A</Typography>
                    </Grid>
                  </Grid>
                </Tilt>
              </>
            ) : (
              <>
                {myreview.map((review) => (
                  <Tilt options={{ max: 15, speed: 100, scale: 1 }}>
                    <Grid
                      container
                      textAlign={"center"}
                      sx={{
                        boxShadow: "5",
                        my: 2,
                        backgroundColor: "white",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={3} md={3} sx={{}}>
                        <Typography
                          sx={{
                            py: 2,
                            fontFamily: "overpass,serif-pro",
                            fontSize: { xs: "12px", sm: "18px" },
                          }}
                        >
                          {review.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} md={4} sx={{}}>
                        <Typography
                          sx={{
                            py: 2,
                            fontFamily: "overpass,serif-pro",
                            fontSize: { xs: "12px", sm: "18px" },
                          }}
                        >
                          {idEdit === review._id ? (
                            <>
                              {" "}
                              <form onSubmit={handleForm}>
                                <TextField
                                  sx={{
                                    mt: "-21px",
                                    width: {
                                      xs: "40px",
                                      sm: "150px",
                                      md: "200px",
                                    },
                                  }}
                                  id="standard-basic"
                                  name="review"
                                  variant="standard"
                                  label={review.review}
                                  required
                                />
                                <button type="submit">
                                  <AddCircleIcon
                                    sx={{
                                      fontSize: "30px",
                                      ml: 2,
                                      cursor: "pointer",
                                      "&:hover": { transform: "scale(2)" },
                                    }}
                                  ></AddCircleIcon>
                                </button>
                              </form>
                            </>
                          ) : (
                            <>{review.review}</>
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} sx={{}}>
                        <Typography sx={{ py: 2 }}>
                          {idEdit === review._id ? (
                            <>
                              <Stack sx={{ alignItems: "center" }}>
                                <Rating
                                  sx={{ fontSize: { xs: "16px", sm: "24px" } }}
                                  name="simple-controlled"
                                  value={rating}
                                  precision={0.5}
                                  onChange={(event, newValue) => {
                                    setRating(newValue);
                                  }}
                                />
                              </Stack>
                            </>
                          ) : (
                            <>
                              <Stack sx={{ alignItems: "center" }}>
                                <Rating
                                  sx={{ fontSize: { xs: "16px", sm: "24px" } }}
                                  name="half-rating-read"
                                  defaultValue={review.star}
                                  precision={0.5}
                                  readOnly
                                />
                              </Stack>
                            </>
                          )}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} md={2} sx={{}}>
                        <Typography
                          sx={{ py: 2, fontSize: { xs: "12px", sm: "18px" } }}
                        >
                          <EditIcon
                            sx={{
                              mr: 1,
                              cursor: "pointer",
                              "&:hover": { transform: "scale(2)" },
                            }}
                            onClick={() => {
                              setIdEdit(review._id);
                            }}
                          ></EditIcon>
                          <DeleteIcon
                            sx={{
                              color: "#b32828",
                              cursor: "pointer",
                              "&:hover": { transform: "scale(2)" },
                            }}
                            onClick={() => {
                              setIdDelete(review._id);
                              review._id && deleteReview();
                            }}
                          ></DeleteIcon>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Tilt>
                ))}
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MyReview;

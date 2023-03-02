import { Grid, Rating, Typography } from "@mui/material";
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

const MyReview = () => {
  const { user } = useContext(AuthContext);
  //console.log("k", user);
  const [myreview, setMyreview] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [id, setId] = useState({});
  //console.log(id);

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
    fetch(`https://travel-site-backend.vercel.app/deletereview/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.deletedCount > 0) {
          //notify("Review Deleted.");
          setRefresh(!refresh);
          toast.success("Review Deleted.");
        }
      });
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
                          {review.review}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} sx={{}}>
                        <Typography sx={{ py: 2 }}>
                          {" "}
                          <Stack sx={{ alignItems: "center" }}>
                            <Rating
                              sx={{ fontSize: { xs: "16px", sm: "24px" } }}
                              name="half-rating-read"
                              defaultValue={review.star}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
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
                          ></EditIcon>
                          <DeleteIcon
                            sx={{
                              color: "#b32828",
                              cursor: "pointer",
                              "&:hover": { transform: "scale(2)" },
                            }}
                            onClick={() => {
                              setId(review._id);
                              deleteReview();
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

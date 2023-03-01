import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img from "../assets/undraw_Sign_in_re_o58h.png";
import { AuthContext } from "../Context/Context";
import Loader from "./Small/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function SignUp() {
  const { createUser, updateUserProfile, user } = React.useContext(AuthContext);
  // console.log(user, createUser, updateUserProfile);
  const [error, setError] = React.useState("");
  //const [success, setSuccess] = React.useState(false);
  const [spin, setSpin] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    setSpin(true);
    event.preventDefault();
    // setSuccess(false);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.img.value;
    console.log(name, password, img, email);

    if (password.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // setSuccess(true);
        form.reset();
        setError("");

        handleUpdateUserProfile(img, name);
        setSpin(false);
        navigate(from, { replace: true });
        toast.success("Logged In");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    const handleUpdateUserProfile = (img, name) => {
      const profile = {
        photoURL: img,
        displayName: name,
      };
      console.log(profile);
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={img} alt="Icon" style={{ marginTop: "20vw" }}></img>
        </Grid>
        <Grid item xs={12} md={6} sx={{ bgcolor: "#0a212d", color: "white" }}>
          {spin === true ? (
            <Box sx={{ mt: { xs: 0, md: 30 } }}>
              <Loader></Loader>
            </Box>
          ) : (
            <>
              {" "}
              <ThemeProvider theme={theme}>
                <Container
                  component="main"
                  maxWidth="xs"
                  sx={{ mb: 10, pt: { xs: 0, md: 8 } }}
                >
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgColor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign Up
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2} sx={{ color: "white" }}>
                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white",
                            }}
                            autoComplete="given-name"
                            name="Full Name"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            autoFocus
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white",
                            }}
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white",
                            }}
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            sx={{
                              bgcolor: "white",
                            }}
                            required
                            fullWidth
                            id="img"
                            label="Image Link"
                            name="img"
                            autoComplete="img"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: "start" }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  color: "white",
                                }}
                                value="allowExtraEmails"
                                color="primary"
                                required
                              />
                            }
                            label="Remember Me."
                          />
                        </Grid>
                      </Grid>
                      {
                        <Typography sx={{ textAlign: "start", color: "red" }}>
                          {error}
                        </Typography>
                      }
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link
                            to="/signin"
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                          >
                            Already have an account?Sign In
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

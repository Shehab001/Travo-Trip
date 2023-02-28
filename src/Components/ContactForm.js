import "./CSS/ContactForm.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import contact from "../assets/undraw_Profile_data_re_v81r.png";
import { Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gfqrgba",
        "template_mbpip0a",
        form.current,
        "WehNcLX2SaPrdq4Yq"
      )
      .then(
        (result) => {
          //console.log(result.text);
          toast.success("Sent");
        },
        (error) => {
          toast.error("Failed");
        }
      );
  };

  return (
    <Box className="Appp">
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
      <Typography
        sx={{
          color: "black",
          fontSize: { xs: "20px", md: "40px" },
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "5px",
        }}
      >
        Contact Us
      </Typography>
      <Typography
        sx={{
          color: "black",
          fontSize: "16px",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "5px",
          opacity: 0.8,
          px: { xs: "5%", sm: "12%", md: "25%" },
          mb: 8,
        }}
      >
        We can help.Our team of experts are one hand to answer your questions.
      </Typography>

      <form ref={form} onSubmit={sendEmail}>
        {" "}
        <Box sx={{ flexGrow: 1, mx: "2%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img src={contact} alt="Icon"></img>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                {" "}
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-error-helper-text"
                  label="Full Name"
                  name="user_name"
                  placeholder="Enter Full Name..."
                />{" "}
              </Grid>{" "}
              <Grid item xs={12} sx={{ my: 3 }}>
                {" "}
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-error-helper-text"
                  label="Email"
                  name="user_email"
                  placeholder="Enter contact email..."
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
                <TextField
                  style={{ width: "100%" }}
                  placeholder="Enter Message"
                  name="message"
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
                <Button
                  type="submit"
                  style={{ width: "100%" }}
                  variant="contained"
                >
                  {" "}
                  Send Message{" "}
                </Button>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default ContactForm;

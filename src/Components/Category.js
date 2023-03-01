import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "./Small/Loader";
import ReactCardSlider from "./Small/Slider";

const Category = () => {
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);
  //useDocumentTitle("Travo Services");
  console.log(data);

  useEffect(() => {
    setSpin(true);
    fetch("https://travel-site-backend.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSpin(false);
      });
  }, []);

  return (
    <Box id="category" sx={{ px: "9.1%", mt: 5, mb: 10 }}>
      {spin === true ? (
        <Loader></Loader>
      ) : (
        <Box>
          <Typography
            sx={{
              color: "#ff5d0d",
              fontSize: "16px",
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: "5px",
            }}
          >
            TOUR PACKAGE
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: { xs: "20px", md: "40px" },
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: "5px",
            }}
          >
            Make Memories With Us
          </Typography>
          <Typography
            sx={{
              px: { xs: "5%", sm: "12%", md: "15%" },
              opacity: 0.5,
              mt: 2,
              mb: 5,
            }}
          >
            A tour package is advertised journey including specific features,
            arranged and promoted with tour literature by a tour operator and
            paid for in full by the tourists before starting the tour.
          </Typography>
        </Box>
      )}

      <ReactCardSlider slides={data} />
    </Box>
  );
};

export default Category;

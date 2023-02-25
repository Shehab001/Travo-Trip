import { Box } from "@mui/system";
import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import FormatQuoteTwoToneIcon from "@mui/icons-material/FormatQuoteTwoTone";
import Tilt from "react-tilt";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

const Quoate = () => {
  return (
    <Box sx={{ width: "400px", mx: "auto" }}>
      <Tilt options={{ max: 15, speed: 300 }}>
        <Box
          sx={{
            ...commonStyles,
            // borderRadius: "50%",
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "#e85602!important",
            borderRadius: " 50px 50px 50px 50px",
            width: "80px",
            mx: "auto",
            mb: "-35px",
            position: "relative",
            backgroundColor: "#ff5d0d",
          }}
        >
          <FormatQuoteTwoToneIcon sx={{ fontSize: "50px", mt: "10px" }}>
            {" "}
          </FormatQuoteTwoToneIcon>
        </Box>
        <Card
          sx={{
            minWidth: 275,
            maxWidth: 400,
            textAlign: "start",
            px: "10px",
            pt: "35px",
            pinter: "cursor",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontSize: "18px",
                fontStyle: "italic",
                color: "#6d7a81",
                lineHeight: "30px",
              }}
              color="text.secondary"
              gutterBottom
            >
              “Twenty years from now, you will be more disappointed by the
              things you didn’t do than those you did. So throw off the
              bowlines.”
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
              }}
              color="text.secondary"
            >
              Shirley Mitchell
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Tilt>
    </Box>
  );
};

export default Quoate;

import * as React from "react";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

export default function Services() {
  // const [data, setData] = React.useState([]);
  // console.log(data);

  // React.useEffect(() => {
  //   fetch("https://travel-site-backend.vercel.app/allservices")
  //     .then((res) => res.json())
  //     .then((dataa) => {
  //       setData(dataa);
  //     });
  // }, []);

  return (
    <Box Container sx={{ width: "100%", px: "10%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 3, sm: 6, md: 12 }}
      >
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "start",
              px: 2,
              py: 2,
              boxShadow: 0,
              fontFamily: "Overpass,sans-serif",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: 5,
                transition: "linear .3s",
              },
              cursor: "pointer",
            }}
          >
            <AcUnitIcon
              sx={{ color: "#ff5d0d", fontSize: "80px", ml: 1 }}
            ></AcUnitIcon>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"black"}
                sx={{
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "#ff5d0d" },
                }}
              >
                Charter Guide
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Overpass,sans-serif", color: "#6d7a81" }}
              >
                Our charter brokers have a wealth of expertise and a wide
                variety of skills to assist first-time charterers every step of
                the way.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  mt: -2,
                  fontSize: "15px",
                  color: "#ff5d0d",
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "Black" },
                }}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "start",
              px: 2,
              py: 2,
              boxShadow: 0,
              fontFamily: "Overpass,sans-serif",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: 5,
                transition: "linear .3s",
              },
              cursor: "pointer",
            }}
          >
            <EmojiTransportationIcon
              sx={{ color: "#ff5d0d", fontSize: "80px", ml: 1 }}
            ></EmojiTransportationIcon>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"black"}
                sx={{
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "#ff5d0d" },
                }}
              >
                Transportation
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Overpass,sans-serif", color: "#6d7a81" }}
              >
                Bridges, roads, air lanes, and waterways—the arteries that keep
                the Earth running. If you're going somewhere, you need a way to
                get there.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  mt: -2,
                  fontSize: "15px",
                  color: "#ff5d0d",
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "Black" },
                }}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "start",
              px: 2,
              py: 2,
              boxShadow: 0,
              fontFamily: "Overpass,sans-serif",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: 5,
                transition: "linear .3s",
              },
              cursor: "pointer",
            }}
          >
            <AccountBalanceIcon
              sx={{ color: "#ff5d0d", fontSize: "80px", ml: 1 }}
            ></AccountBalanceIcon>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"black"}
                sx={{
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "#ff5d0d" },
                }}
              >
                Lodging
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Overpass,sans-serif", color: "#6d7a81" }}
              >
                Lodging refers to the use of a short-term dwelling, usually by
                renting the living space or sometimes through some other
                arrangement.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  mt: -2,
                  fontSize: "15px",
                  color: "#ff5d0d",
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "Black" },
                }}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 345,
              textAlign: "start",
              px: 2,
              py: 2,
              boxShadow: 0,
              fontFamily: "Overpass,sans-serif",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: 5,
                transition: "linear .3s",
              },
              cursor: "pointer",
            }}
          >
            <HealthAndSafetyIcon
              sx={{ color: "#ff5d0d", fontSize: "80px", ml: 1 }}
            ></HealthAndSafetyIcon>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"black"}
                sx={{
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "#ff5d0d" },
                }}
              >
                Safety
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "Overpass,sans-serif", color: "#6d7a81" }}
              >
                Our team will ensure the safety of you or your group.We have
                highly trained instructor.You just have to follow the rules.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{
                  mt: -2,
                  fontSize: "15px",
                  color: "#ff5d0d",
                  fontFamily: "Overpass,sans-serif",
                  "&:hover": { color: "Black" },
                }}
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

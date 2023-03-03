import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavBar() {
  const { user, logOut } = React.useContext(AuthContext);
  // console.log(user?.photoURL);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  let navigate = useNavigate();
  //console.log(location.pathname);

  const handleBtn = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Logged Out");
      })
      .catch((error) => console.error(error));
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const homeStyle = {
    background: "transparent",
    boxShadow: "5",
    position: "absolute",
    top: 20,
    // zIndex: 1500,
  };

  return (
    <Box id="nav">
      <ToastContainer position="top-center" />
      <AppBar
        sx={
          location.pathname === "/signin || /signup"
            ? {
                background: "transparent",
                pb: { md: 1 },
                color: "black!important",
                boxShadow: "5",
              }
            : {
                background: homeStyle.background,
                boxShadow: homeStyle.boxShadow,
                position: homeStyle.position,

                zIndex: homeStyle.zIndex,
              }
        }
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link to="/">
              <Avatar
                alt="Icon"
                src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1677643965/travel-101-512_vsaqzq.png"
                sx={{
                  width: 58,
                  height: 58,
                  display: { xs: "none", md: "flex" },
                  mr: 2,
                  mt: 2,
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </Link>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                fontSize: 40,
                mt: 2,
              }}
            >
              Travo
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", zIndex: 3000 },
                }}
              >
                {" "}
                {location.pathname === "/" ? (
                  <>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color={"black"}>
                        <Link to="/">Home</Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color={"black"}>
                        <a href="#aboutUs">About Us</a>
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color={"black"}>
                        <a href="#contact">Contact</a>
                      </Typography>
                    </MenuItem>
                    {user?.uid && (
                      <>
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center" color={"black"}>
                            <a href="myreview">My Review</a>
                          </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center" color={"black"}>
                            <Link to="addservice">Add Service</Link>
                          </Typography>
                        </MenuItem>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color={"black"}>
                        <Link to="/">Home</Link>
                      </Typography>
                    </MenuItem>
                    {user?.uid && (
                      <>
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center" color={"black"}>
                            <a href="myreview">My Review</a>
                          </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center" color={"black"}>
                            <Link to="addservice">Add Service</Link>
                          </Typography>
                        </MenuItem>
                      </>
                    )}
                  </>
                )}
              </Menu>
            </Box>
            <Link to="/">
              <Avatar
                alt="Icon"
                src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1677643965/travel-101-512_vsaqzq.png"
                sx={{
                  width: 54,
                  height: 54,
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </Link>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                fontSize: "40px",
              }}
            >
              Travo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* bar */}
              {location.pathname === "/" ? (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 3,
                      color: "black",
                      display: "block",
                      fontSize: 16,
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: 5,
                        transition: "linear .3s",
                        borderBottom: 3,
                        borderColor: "black",
                      },
                    }}
                  >
                    <Link to="/">Home</Link>
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 3,
                      color: "black",
                      display: "block",
                      fontSize: 16,
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: 5,
                        transition: "linear .3s",
                        borderBottom: 3,
                        borderColor: "black",
                      },
                    }}
                  >
                    <a href="#aboutUs">About Us</a>
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 3,
                      color: "black",
                      display: "block",
                      fontSize: 16,
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: 5,
                        transition: "linear .3s",
                        borderBottom: 3,
                        borderColor: "black",
                      },
                    }}
                  >
                    <a href="#contact">Contact</a>
                  </Button>
                </>
              ) : (
                <></>
              )}
              {user?.uid && (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 3,
                      color: "black",
                      display: "block",
                      fontSize: 16,
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: 5,
                        transition: "linear .3s",
                        borderBottom: 3,
                        borderColor: "black",
                      },
                    }}
                  >
                    <Link to="/addservice">Add Service</Link>
                  </Button>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      mt: 3,
                      color: "black",
                      display: "block",
                      fontSize: 16,
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: 5,
                        transition: "linear .3s",
                        borderBottom: 3,
                        borderColor: "black",
                      },
                    }}
                  >
                    <Link to="/myreview">My Review</Link>
                  </Button>
                </>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ pt: 2, "&:hover": { transform: "scale(1.1)" } }}
                >
                  {user?.uid ? (
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt="User Image"
                      src={user.photoURL}
                    />
                  ) : (
                    <Avatar src="/broken-image.jpg" />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "85px", zIndex: 5000 }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  {user?.uid ? (
                    <Typography textAlign="center">
                      <Button onClick={handleBtn}>Log Out</Button>
                    </Typography>
                  ) : (
                    <Box>
                      <MenuItem>
                        <Button size="small">
                          <Link to="/signup">Sign Up</Link>
                        </Button>
                      </MenuItem>

                      <MenuItem>
                        <Button size="small">
                          <Link to="/signin">Sign In</Link>
                        </Button>
                      </MenuItem>
                    </Box>
                  )}
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default NavBar;

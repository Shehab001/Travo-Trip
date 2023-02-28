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
import { Link, useLocation } from "react-router-dom";

const pages = ["Home", "About", "Contact", "Blog"];
const route = ["/", "aboutUs", "contact", "blog"];
const settings = ["Sign In", "Sign Up", "Logout"];
const routes = ["signin", "signup"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const location = useLocation();
  //console.log(location.pathname);

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
    boxShadow: "none",
    position: "absolute",
    top: 20,
  };
  return (
    <Box>
      <AppBar
        sx={
          location.pathname === "/signin || /signup"
            ? {
                background: "transparent",
                pb: { md: 1 },
                color: "black!important",
              }
            : {
                background: homeStyle.background,
                boxShadow: homeStyle.boxShadow,
                position: homeStyle.position,
                top: homeStyle.top,
              }
        }
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Avatar
              alt="Icon"
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1667949925/Assignment%2011/beach-tour-logo-4505456896-seeklogo.com_hnehgp.png"
              sx={{
                width: 58,
                height: 58,
                display: { xs: "none", md: "flex" },
                mr: 2,
                mt: 2,
              }}
            />
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

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color={"black"}>
                      <Link to={route[index]}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Avatar
              alt="Icon"
              src="https://res.cloudinary.com/dc9bjecdl/image/upload/v1667949925/Assignment%2011/beach-tour-logo-4505456896-seeklogo.com_hnehgp.png"
              sx={{
                width: 24,
                height: 24,
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
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
              }}
            >
              Travo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ mt: 3, color: "black", display: "block", fontSize: 16 }}
                >
                  <Link to={route[index]}>{page}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ pt: 2 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
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
                {settings.map((setting, index) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={routes[index]}>{setting}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default NavBar;

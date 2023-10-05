import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// icon
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

// data
import { navItems } from "../../../utils/constant/navbar";

// conponent
import Profile from "../../organisms/profile/ProfileMenu";

import AuthContext from "../../../context/authContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 84,
    background: "#FFFFFF",
    position: "fixed",
    zIndex: 1000,
  },
  appBar: {
    width: "100%",
    background: "#FFFFFF",
    zIndex: 1000,
    height: 65,
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  },
  container: {
    width: "100%",
    height: 65,
  },
  line: {
    width: "100%",
    height: 5,
    background: "#FF9900",
  },
  toolbar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 60,
    background: "#FFFFFF",

  },
  menuIcon: {
    color: "#999999",
  },
  page: {
    alignItems: "center",
    height: "60px",
  },
  link: {
    color: "#999999",
  },
  activeLink: {
    color: "#FF9900",
    backgroundColor: "#FFF5E6",
  },
  drawer: {
    zIndex: 999,
    "& .MuiDrawer-paper": {
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      boxSizing: "border-box",
      width: "85%",
    },
  },
  drawerList: {
    padding: "15px 10px 0px 10px",
  },
  drawerLink: {
    color: "#999999",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  activeDrawerLink: {
    padding: 10,
    color: "#FF9900",
    backgroundColor: "#FFF5E6",
    borderRadius: 5,
    marginBottom: 5,
  },
  drawerIcon: {
    minWidth: 0,
    marginRight: "15px",
  },
  activeDrawerIcon: {
    minWidth: 0,
    marginRight: "15px",
    color: "#FF9900",
  },
  activeDrawerText: {
    color: "#FF9900",
  },
}));

const Navbar = ({user}) => {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const { setStatus } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(() => {
    if (matches) {
      setMobileOpen(false);
    }
  }, [matches]);
  return (
    <Box className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Box className={classes.container}>
          <Box className={classes.line} />
          {/* toolbar */}
          <Box
            className={classes.toolbar}
            sx={{
              padding: { xs: "0 10px 0 5px", sm: "0 30px", md: "0 50px " },
              justifyContent: { xs: "space-between" },
            }}
          >
            {/* Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.menuIcon}
              sx={{ display: { sm: "none" } }}
            >
              {mobileOpen ? <ArrowBackIosRoundedIcon /> : <MenuRoundedIcon />}
            </IconButton>
            {/* Logo */}
            <Box>
              <Typography variant="logo">CFC Alumni</Typography>
            </Box>
            <Divider
              orientation="vertical"
              sx={{
                display: { xs: "none", sm: "flex" },
                m: { sm: "0 20px 0 30px", md: "0 30px 0 50px" },
              }}
            />
            {/* Page Link */}
            <Box
              className={classes.page}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Stack direction="row" spacing={{ sm: "20px", md: "30px" }}>
                {navItems.map((item, index) => (
                  <Tooltip key={index} title={item.title}>
                    <IconButton
                      onClick={() => {
                        router.push(item.path);
                      }}
                      className={
                        router.pathname === item.path
                          ? classes.activeLink
                          : classes.link
                      }
                    >
                      {item.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }} />
            {/* Profile */}
            {user ? (
              <Profile name={user.name} url={user.profileUrl} />
            ) : (
              <Box sx={{ display: "flex" }}>
                <Button variant="outlined" href="/authentication">
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ ml: "10px", display: { xs: "none", md: "block" } }}
                  onClick={() => {
                    setStatus("signup");
                    router.push("/authentication");
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </AppBar>
      {/* drawer */}
      <Box>
        <Drawer
          className={classes.drawer}
          sx={{ display: { xs: "block", sm: "none" } }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box height="65px" />
          <Box>
            <List className={classes.drawerList}>
              {navItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    router.push(item.path);
                    setMobileOpen(false);
                  }}
                  className={
                    router.pathname === item.path
                      ? classes.activeDrawerLink
                      : classes.drawerLink
                  }
                >
                  <ListItemIcon
                    className={
                      router.pathname === item.path
                        ? classes.activeDrawerIcon
                        : classes.drawerIcon
                    }
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    className={
                      router.pathname === item.path
                        ? classes.activeDrawerText
                        : null
                    }
                  >
                    {item.title}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};
export default Navbar;

Navbar.propTypes = {};

Navbar.defaultProps = {};

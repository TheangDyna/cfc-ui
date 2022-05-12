import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Typography,
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  IconButton,
  Drawer,
  CssBaseline,
  Box,
  Stack,
  AppBar,
  Badge,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from '@mui/icons-material/Chat';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import AccounMenu from "../../molecules/menus/AccountMenu";
// import { coachMenuItems } from "../../../utils/constant/navItems";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  app_bar: {
    backgroundColor: "#FFFFFF",
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "0px -1px 8px rgba(0, 0, 0, 0.25)",
  },
  tool_bar: {
    width: "100%",
    height: 5,
    backgroundColor: "#5DE2E7",
  },
  toolbar: {
    height: 80,
    display: "flex",
    alignItems: "center",
  },
  logo_avatar: {
    width: 60,
    height: 60,
  },
  logo_typography: {
    fontFamily: "Cambria",
    fontSize: 20,
    fontWeight: 700,
  },
  drawer_sm: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "80%",
    },
  },
  drawer_md: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      border: "none",
      zIndex: 0,
    },
  },
  drawer_list: {
    padding: "15px 0px 0px 0px",
  },
  drawer_item: {
    width: drawerWidth,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    borderRadius: 45,
  },
  toolbar_height: {
    height: 85,
  },
  active_drawer_item: {
    width: drawerWidth,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,

    borderRadius: 45,
    backgroundColor: "#F8F8F8",
  },
  list_item_text: {
    fontFamily: "Arial",
    fontSize: 15,
  },
  children: {
    flexGrow: 1,
    padding: 25,
  },
}));

const CoachNavigation = ({ children, user }) => {
  // console.log("Coach",user)
  const classes = useStyles();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar className={classes.toolbar_height} />
      <List className={classes.drawer_list}>
        {/* {coachMenuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              router.push(item.path);
            }}
          >
            <Stack
              direction={"row"}
              className={
                router.pathname.includes(item.path)
                  ? classes.active_drawer_item
                  : classes.drawer_item
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                <Typography className={classes.list_item_text}>
                  {item.label}
                </Typography>
              </ListItemText>
            </Stack>
          </ListItem>
        ))} */}
      </List>
    </div>
  );
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="white" className={classes.app_bar}>
        <Box className={classes.tool_bar} />
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </IconButton>
          <Avatar
            src="/images/sabaicode.jpg"
            className={classes.logo_avatar}
            sx={{ display: { xs: "none", sm: "block" } }}
          />
          <Typography
            className={classes.logo_typography}
            sx={{ ml: { xs: "5px", sm: "20px" } }}
          >
            SabaiCode
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction={'row'}  alignItems={'center'} spacing={3}>
          <Badge badgeContent={4} color="primary">
            <ChatIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          {/* <AccounMenu user={user} /> */}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{ display: { xs: "block", sm: "none" } }}
          className={classes.drawer_sm}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          className={classes.drawer_md}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className={classes.children}
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar className={classes.toolbar_height} />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default CoachNavigation;

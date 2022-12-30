import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// data
import { profileMenu } from "../../../utils/constant/profile";

//function
import { logoutUser } from "../../../utils/func/auth/authUser";

const UseStyles = makeStyles((theme) => ({
  profileButton: {
    padding: 0,
    borderRadius: 20,
  },
  menu: {
    marginTop: 45,
    "& .MuiMenu-paper": {
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      boxSizing: "border-box",
      padding: "0 10px",
    },
  },
  menuItem: {
    borderRadius: 5,
    padding: "5px 15px",
    marginBottom: 5,
  },
  activeMenuItem: {
    borderRadius: 5,
    padding: "5px 15px",
    marginBottom: 5,
    backgroundColor: "#FFF5E6",
  },
}));

const Profile = ({name, url}) => {
  const classes = UseStyles();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Tooltip title="Profile">
        <IconButton
          onClick={handleOpenUserMenu}
          className={classes.profileButton}
        >
          <Avatar alt={name} src={url} />
        </IconButton>
      </Tooltip>
      {/* Menu Profile */}
      <Menu
        className={classes.menu}
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
        {profileMenu.map((item, index) => (
          <MenuItem
            key={index}
            className={
              router.pathname === item.path
                ? classes.activeMenuItem
                : classes.menuItem
            }
            onClick={() => {
              router.push(item.path);
              setAnchorElUser(null);
            }}
          >
            <Typography
              variant="primary"
              sx={router.pathname === item.path ? { color: "#FF9900" } : null}
            >
              {item.title}
            </Typography>
          </MenuItem>
        ))}
        <MenuItem className={classes.menuItem} onClick={logoutUser}>
          <Typography variant="primary">Log Out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;

Profile.propTypes = {};

Profile.defaultProps = {};

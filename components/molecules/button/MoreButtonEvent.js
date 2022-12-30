import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//icon
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import deleteDataFunc from "../../../utils/func/api/deleteDataFunc";
import { deleteSingle } from "../../../utils/func/delete";

const UseStyles = makeStyles((theme) => ({
  root: {},
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
}));

const more = ["Favorite", "Update", "Delete"];

const MoreButtonEvent = ({ id, path, update }) => {
  const classes = UseStyles();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick = async (action, id) => {
    if (action == "Favorite") {
    } else if (action == "Update") {
      update();
    } else {
      const deleteCover = await deleteSingle(path);
      if (deleteCover) {
        await deleteDataFunc(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`);
      }
    }
    handleCloseUserMenu();
  };
  return (
    <Box className={classes.root}>
      <Tooltip title="More Action">
        <IconButton onClick={handleOpenUserMenu}>
          <MoreVertRoundedIcon />
        </IconButton>
      </Tooltip>
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
        onClose={handleCloseUserMenu}>
        {more.map((item, index) => (
          <MenuItem
            key={index}
            className={classes.menuItem}
            onClick={() => {
              handleClick(item, id);
            }}>
            <Typography textAlign="center">{item}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MoreButtonEvent;

MoreButtonEvent.propTypes = {};

MoreButtonEvent.defaultProps = {};

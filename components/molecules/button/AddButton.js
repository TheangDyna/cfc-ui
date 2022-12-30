import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
//icon

const UseStyles = makeStyles((theme) => ({
  root: {},
  button: {
    "&:hover": {
      background: "#FF9900",
      color: "#FFFFFF",
    },
  },
}));

const AddButton = ({ title, onClick }) => {
  const classes = UseStyles();
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      className={classes.button}
      startIcon={<AddRoundedIcon />}>
      {title}
    </Button>
  );
};

export default AddButton;

AddButton.propTypes = {};

AddButton.defaultProps = {};

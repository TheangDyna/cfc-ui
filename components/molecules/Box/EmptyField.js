import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//icon
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
}));

const EmptyField = ({ item }) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="secondary" sx={{ fontSize: {xs: "40px", sm: "60px"}, m: {xs: "30px 0", sm: "40px 0"} }}>
        ¯\_(ツ)_/¯
      </Typography>
      <Typography variant="secondary">
        {" "}
        don&apos;t have any {item} yet.
      </Typography>
    </Box>
  );
};

export default EmptyField;

EmptyField.propTypes = {};

EmptyField.defaultProps = {};

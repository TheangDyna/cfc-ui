import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  divider: {
    display: "flex",
    flex: 1,
    borderBottom: "1px solid #c4c4c4",
    margin: "0 0 0 7px",
  },
}));

const DividerText = ({ label }) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="small"> {label} </Typography>
      <Box className={classes.divider} />
    </Box>
  );
};

export default DividerText;

DividerText.propTypes = {
};

DividerText.defaultProps = {};

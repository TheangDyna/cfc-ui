import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Template = ({}) => {
  const classes = UseStyles();
  return <Box className={classes.root}></Box>;
};

export default Template;

Template.propTypes = {};

Template.defaultProps = {};

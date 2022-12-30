import React, { useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const UseStyles = makeStyles((theme) => ({}));

const Contact = () => {
  const classes = UseStyles();
  return <Box className={classes.root}>Contact Page</Box>;
};

export default Contact;

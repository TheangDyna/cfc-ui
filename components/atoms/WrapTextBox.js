import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const WrapTextBox = ({ children, line }) => {
  const classes = UseStyles();
  return (
    <Box
      className={classes.root}
      sx={{
        WebkitLineClamp: line,
      }}
    >
      {children}
    </Box>
  );
};

export default WrapTextBox;

WrapTextBox.propTypes = {
  line: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

WrapTextBox.defaultProps = {};

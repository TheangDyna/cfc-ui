import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "max-content",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginRight: 20,
  },
}));

const EventDateBox = ({ month, date }) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="primary" sx={{ color: "#FF9900" }}>
          {month.toUpperCase()}
        </Typography>
      </Box>
      <Box>
        <Typography variant="primary" sx={{ fontSize: "26px" }}>
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default EventDateBox;

EventDateBox.propTypes = {
  month: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

EventDateBox.defaultProps = {};

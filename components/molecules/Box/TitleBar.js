import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
}));

const TitleBar = ({ label, href, icon }) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box
          sx={{
            mr: { xs: "10px", sm: "20px" },
            display: { xs: "none", sm: "block" },
            color: "#FF9900",
          }}
        >
          {icon}
        </Box>
        <Typography variant="title">{label}</Typography>
        <Box flex={1} />
        <Button variant="contained" href={href}>
          view all
        </Button>
      </Box>
    </Box>
  );
};

export default TitleBar;

TitleBar.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

TitleBar.defaultProps = {};

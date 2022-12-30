import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  label: {
    width: 150,
    minWidth: 150,
  },
  subLabel: {
    width: 130,
    minWidth: 130,
  },
}));

const InfomationField = ({ label, info, sub }) => {
  const classes = UseStyles();
  return (
    <Grid className={classes.root} item xs={12}>
      <Box className={sub ? classes.subLabel : classes.label}>
        <Typography variant="secondary">{label}:</Typography>
      </Box>
      <Box flex={1}>
        <Typography>{info}</Typography>
      </Box>
    </Grid>
  );
};

export default InfomationField;

InfomationField.propTypes = {
  label: PropTypes.string.isRequired,
  info: PropTypes.string,
};

InfomationField.defaultProps = {};

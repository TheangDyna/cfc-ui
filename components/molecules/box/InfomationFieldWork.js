import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InfomationField from "./InfomationField";
import WrapTextBox from "../../atoms/WrapTextBox";

const UseStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
  header: {
    display: "flex",
  },
  label: {
    width: 150,
    minWidth: 150,
  },
  subInfoField: {
    display: "flex",
  },
}));

const InfomationFieldWork = ({ label, info, at, position, duration }) => {
  const classes = UseStyles();
  const [open, setOpen] = useState(false);
  return (
    <Grid onClick={() => setOpen(!open)} className={classes.root} item xs={12}>
      <Box className={classes.header}>
        <Box className={classes.label}>
          <Typography variant="secondary">{label}:</Typography>
        </Box>
        <Box flex={1}>
          <Typography>{info}</Typography>
        </Box>
      </Box>
      {!open && (
        <Box className={classes.header}>
          <Box className={classes.label} />
          <Box>
            <WrapTextBox line={1}>
              <Typography variant="small">
                {info +
                  (at && " • ") +
                  at +
                  (position && " • ") +
                  position +
                  (duration && " • ") +
                  duration}
              </Typography>
            </WrapTextBox>
          </Box>
        </Box>
      )}
      {open && (
        <Box
          sx={{
            mt: "5px",
            p: "10px 0 10px 20px",
            background: "#f2f2f2",
            borderRadius: "5px",
          }}
        >
          <Grid container spacing="10px">
            {at && <InfomationField sub label="At" info={at} />}
            {position && (
              <InfomationField sub label="Position" info={position} />
            )}
            {duration && (
              <InfomationField sub label="Duration" info={duration} />
            )}
          </Grid>
        </Box>
      )}
    </Grid>
  );
};

export default InfomationFieldWork;

InfomationFieldWork.propTypes = {};

InfomationFieldWork.defaultProps = {};

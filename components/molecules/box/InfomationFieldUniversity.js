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

const InfomationFieldUniversity = ({
  label,
  info,
  at,
  degreeLevel,
  major,
  currentYear,
  startYear,
  endYear,
}) => {
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
                  (degreeLevel && " • ") +
                  degreeLevel +
                  (major && " • ") +
                  major +
                  (currentYear && " • ") +
                  currentYear +
                  (startYear && " • ") +
                  startYear +
                  (endYear && " • ") +
                  endYear}
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
            {degreeLevel && (
              <InfomationField sub label="Degree Level" info={degreeLevel} />
            )}
            {major && <InfomationField sub label="Major" info={major} />}
            {currentYear && (
              <InfomationField sub label="Current Year" info={currentYear} />
            )}
          </Grid>
        </Box>
      )}
    </Grid>
  );
};

export default InfomationFieldUniversity;

InfomationFieldUniversity.propTypes = {};

InfomationFieldUniversity.defaultProps = {};

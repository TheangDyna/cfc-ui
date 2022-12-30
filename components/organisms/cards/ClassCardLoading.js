import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, Skeleton } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    width: "100%",
  },
  cover: {
    width: "100%",
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  },
  content: {
    width: "100%",
  },
  headerContent: {
    width: "100%",
    display: "flex",
    alignItems: "start",
    flexWrap: "wrap",
  },
  titleBox: {
    flex: 1,
  },
}));

const ClassCardLoading = ({}) => {
  const classes = UseStyles();
  return (
    <Box>
      <Card className={classes.root}>
        <Box>
          <Skeleton variant="rectangular" width="100%" height={200} />
        </Box>
        <Box
          sx={{ p: { xs: "20px 5px 20px 10px", sm: "20px 10px 20px 20px" } }}
          className={classes.content}>
          <Box className={classes.titleBox}>
            <Skeleton height={20} width="80%" />
            <Skeleton height={20} width="50%" />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ClassCardLoading;

ClassCardLoading.propTypes = {};

ClassCardLoading.defaultProps = {};

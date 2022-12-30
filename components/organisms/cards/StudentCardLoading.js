import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Card, Skeleton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import WrapTextBox from "../../atoms/WrapTextBox";

const UseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 225,
    width: "100%",
    height: 280,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundImage: `url('/images/card/bgStCardTop.png'), url('/images/card/bgStCardBottom.png')`,
    backgroundPosition: "top , bottom",
    backgroundRepeat: "no-repeat",
    padding: "50px 5px 0 5px",    
    opacity: 0.75
  },
}));


const StudentCardLoading = ({ }) => {
  const classes = UseStyles();
  return (
    <Box>
      <Card className={classes.root}>
        <Box className={classes.backgroundImage}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#ffffff",
              borderRadius: "50px",
              mb: "10px",
              background: "#ffffff",
              borderRadius: "50px",
              border: "2px solid #ff9900",
            }}>
            <Skeleton variant="circular" width="90%" height="90%" />
          </Box>
          <Box>
            <Skeleton height={20} width="120px" sx={{ mb: 1 }} />
          </Box>
          <Box>
            <Skeleton height={20} width="150px" />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default StudentCardLoading;

StudentCardLoading.propTypes = {};

StudentCardLoading.defaultProps = {};

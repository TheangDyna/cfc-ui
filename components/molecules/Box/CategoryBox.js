import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "100%",
  // },
}));

const CategoryBox = ({ title, path }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      onClick={() => {
        console.log("hello");
      }}
    >
      <Tooltip title={title}>
        <Card sx={{ p: "10px"}}>
          <Image src={path} alt="category" width="35px" height="35px" />
        </Card>
      </Tooltip>
    </Box>
  );
};

export default CategoryBox;

CategoryBox.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

CategoryBox.defaultProps = {};

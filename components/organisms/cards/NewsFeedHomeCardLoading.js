import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WrapTextBox from "../../atoms/WrapTextBox";
import Lightbox from "react-image-lightbox";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 350,
  },
  cover: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const NewsFeedHomeCardLoading = ({ url, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Stack spacing="10px">
        <Box className={classes.cover}>
          <Skeleton variant="rounded" width="100%" height="100%" />
        </Box>
        <Skeleton height={20} width="80%" />
      </Stack>
      {isOpen && (
        <Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />
      )}
    </Box>
  );
};

export default NewsFeedHomeCardLoading;

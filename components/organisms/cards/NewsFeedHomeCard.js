import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";
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
    cursor: "pointer",
  },
}));

const NewsFeedHomeCard = ({ url, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Stack spacing="10px">
        <Box
          className={classes.cover}
          onClick={() => setIsOpen(true)}
          sx={{ backgroundImage: `url(${url})` }}
        />
        <WrapTextBox line={1}>
          <Typography variant="title">{title}</Typography>
        </WrapTextBox>
      </Stack>
      {isOpen && (
        <Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />
      )}
    </Box>
  );
};

export default NewsFeedHomeCard;

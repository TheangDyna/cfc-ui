import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import StoryNewsCard from "../../organisms/cards/StoryNewsCard";


const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "sticky",
    top: 75,
  },
}));

const SuggestionNewsFeed = ({data}) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <StoryNewsCard data={data} />
    </Box>
  );
};

export default SuggestionNewsFeed;

SuggestionNewsFeed.propTypes = {
  data: PropTypes.array.isRequired,
};

SuggestionNewsFeed.defaultProps = {};

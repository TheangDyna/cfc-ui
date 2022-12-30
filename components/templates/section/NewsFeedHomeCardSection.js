import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// compoment
import NewsFeedHomeCard from "../../organisms/cards/NewsFeedHomeCard";
import CarouselSlide from "../../molecules/slide/Carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const NewsFeedHomeCardSection = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CarouselSlide>
        {data.map((item, index) => {
          return (
            <Box key={index} sx={{ mr: "10px" }}>
              <NewsFeedHomeCard
                url={item.coverUrls[0]}
                title={item.title}
              />
            </Box>
          );
        })}
      </CarouselSlide>
    </Box>
  );
};

export default NewsFeedHomeCardSection;

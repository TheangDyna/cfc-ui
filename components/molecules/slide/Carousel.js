import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Carousel from "react-multi-carousel";
import { responsive } from "../../../utils/constant/carouselResponsive";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  carousel: {
    padding: 1,

  },
}));

const CarouselSlide = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Carousel
        partialVisible={true}
        responsive={responsive}
        removeArrowOnDeviceType={["mobile"]}
        className={classes.carousel}
      >
        {children}
      </Carousel>
    </Box>
  );
};

export default CarouselSlide;

CarouselSlide.propTypes = {
  children: PropTypes.node.isRequired,
};

CarouselSlide.defaultProps = {};

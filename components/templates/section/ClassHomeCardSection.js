import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CarouselSlide from "../../molecules/slide/Carousel";
import ClassCard from "../../organisms/cards/ClassCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const ClassHomeCardSection = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CarouselSlide>
        {data.map((item, index) => {
          return (
            <Box key={index} sx={{ mr: "10px" }}>
              <ClassCard
                id={item._id}
                path={item.coverName}
                cover={item.coverUrl}
                title={item.title}
                category={item.category}
                code={item.code}
                generation={item.generation}
              />
            </Box>
          );
        })}
      </CarouselSlide>
    </Box>
  );
};

export default ClassHomeCardSection;

ClassHomeCardSection.propTypes = {
  data: PropTypes.array.isRequired,
};

ClassHomeCardSection.defaultProps = {};

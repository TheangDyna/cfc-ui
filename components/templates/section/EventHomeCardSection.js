import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import EventCard from "../../organisms/cards/EventCard";
import CarouselSlide from "../../molecules/slide/Carousel";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 1,
  },
}));

const EventHomeCardSection = ({ data, user }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CarouselSlide>
        {data.map((item, index) => {
          return (
            <Box key={index} sx={{ mr: "10px" }}>
              <EventCard
                id={item._id}
                path={item.coverName}
                cover={item.coverUrl}
                category={item.category}
                title={item.title}
                month={dayjs(item.startDate).format("MMM")}
                date={dayjs(item.startDate).format("DD")}
                interested={item.interesting.length}
                interesting={item.interesting}
              />
            </Box>
          );
        })}
      </CarouselSlide>
    </Box>
  );
};

export default EventHomeCardSection;

EventHomeCardSection.propTypes = {
  data: PropTypes.array.isRequired,
};

EventHomeCardSection.defaultProps = {};

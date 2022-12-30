import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//data
import { recommendImages } from "../../../utils/constant/information";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  imageBox: {
    width: "100%",
  },
  imageList: {
    margin: 0,
  },
  image: {
    width: "100%",
    borderRadius: 5,
  },
}));

const StoryRecommendCard = ({}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card>
        <Box sx={{ p: { xs: "20px 10px ", sm: "20px" } }}>
          <Typography variant="primary">Story</Typography>
        </Box>
        <Divider
          orientation="vertical"
          sx={{ width: "100%", height: "0.5px" }}
        />
        <Box sx={{ p: { xs: "20px 5px", sm: "20px 10px" } }}>
          <Box className={classes.imageBox}>
            <ImageList
              variant="masonry"
              cols={2}
              gap={4}
              className={classes.imageList}
            >
              {recommendImages?.map((item, index) => (
                <ImageListItem key={index}>
                  {/* <img
                        className={classes.image}
                        src={`${item}?w=248&fit=crop&auto=format`}
                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        loading='lazy'
                    /> */}
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default StoryRecommendCard;

StoryRecommendCard.propTypes = {};

StoryRecommendCard.defaultProps = {};

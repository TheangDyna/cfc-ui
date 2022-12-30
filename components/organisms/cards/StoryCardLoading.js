import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import Lightbox from "react-image-lightbox";
import CollapseSection from "../../molecules/collapse/CollapseSection";
import MoreButtonStory from "../../molecules/button/MoreButtonStory";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  imgOver: {
    width: "100%",
    height: "100%",
    background: "rgba(102,102,102, 0.5)",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const coverUrls = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push(i + 1);
  }
  return data;
};

const StoryCardLoading = () => {
  const classes = UseStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const numImg = xs ? 6 : sm ? 9 : md ? 12 : 18;
  const images = coverUrls().slice(0, numImg);
  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        <Stack spacing="10px">
          <Skeleton height={20} width="50%" />
          <Skeleton height={20} width="80%" />
          <Skeleton height={20} width="70%" />
        </Stack>
        <Box>
          <Grid container spacing="10px">
            {images.map((item, index) => {
              return (
                <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                  {index == numImg - 1 ? (
                    <Box className={classes.img}>
                      <ButtonBase className={classes.imgOver}>
                        <Typography sx={{ color: "#ffffff" }}>
                          see more...
                        </Typography>
                      </ButtonBase>
                    </Box>
                  ) : (
                    <Skeleton variant="rounded" className={classes.img} />
                  )}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default StoryCardLoading;

StoryCardLoading.propTypes = {};

StoryCardLoading.defaultProps = {};

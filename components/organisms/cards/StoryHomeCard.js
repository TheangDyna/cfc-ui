import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import Lightbox from "react-image-lightbox";

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
    cursor: "pointer"
  },
  imgOver: {
    width: "100%",
    height: "100%",
    background: "rgba(102,102,102, 0.5)",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const StoryHomeCard = ({ data }) => {
  const classes = UseStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const numImg = xs ? 6 : sm ? 9 : md ? 12 : 18;
  const images = data.slice(0, numImg);
  return (
    <Box className={classes.root}>
      <Box>
        <Grid container spacing="10px">
          {images.map((item, index) => {
            return (
              <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                <Box
                  className={classes.img}
                  onClick={() => (setIsOpen(true), setPhotoIndex(index))}
                  sx={{ backgroundImage: `url('${item}')` }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </Box>
  );
};

export default StoryHomeCard;

StoryHomeCard.propTypes = {
  data: PropTypes.array.isRequired,
};

StoryHomeCard.defaultProps = {};

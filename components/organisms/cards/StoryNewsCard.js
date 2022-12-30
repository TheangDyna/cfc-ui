import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Grid,
  Typography,
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

const StoryNewsCard = ({ data }) => {
  const classes = UseStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const numImg = 6;
  const images = data.slice(0, numImg);
  return (
    <Box className={classes.root}>
      <Box>
        <Grid container spacing="10px">
          {images.map((item, index) => {
            return (
              <Grid item key={index} lg={6}>
                {index == numImg - 1 ? (
                  <Box
                    className={classes.img}
                    sx={{ backgroundImage: `url('${item}')` }}
                  >
                    <ButtonBase className={classes.imgOver}>
                      <Typography sx={{ color: "#ffffff" }}>
                        see more...
                      </Typography>
                    </ButtonBase>
                  </Box>
                ) : (
                  <Box
                    className={classes.img}
                    onClick={() => (setIsOpen(true), setPhotoIndex(index))}
                    sx={{ backgroundImage: `url('${item}')` }}
                  />
                )}
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

export default StoryNewsCard;

StoryNewsCard.propTypes = {
  data: PropTypes.array.isRequired,
};

StoryNewsCard.defaultProps = {};

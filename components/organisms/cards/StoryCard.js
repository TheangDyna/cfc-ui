import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Grid,
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
    cursor: "pointer",
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

const StoryCard = ({
  id,
  paths,
  update,
  date,
  category,
  title,
  description,
  coverUrls,
  role,
}) => {
  const classes = UseStyles();
  const [open, setOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const numImg = xs ? 6 : sm ? 9 : md ? 12 : 18;
  const allImg = coverUrls.length;
  const images = coverUrls.slice(0, seeMore ? allImg : numImg);
  return (
    <Box className={classes.root}>
      <CollapseSection label={date}>
        <Stack spacing="20px">
          <Box sx={{ display: "flex", alignItems: "start" }}>
            <Box>
              <Typography variant="title">{category}</Typography>
              <Typography variant="secondary"> • </Typography>
              <Typography variant="secondary">{title}</Typography>
            </Box>
            <Box flex={1} />
            {role == "admin" && (
              <Box>
                <MoreButtonStory id={id} paths={paths} update={update} />
              </Box>
            )}
          </Box>
          <Box>
            <Typography variant="secondary">{description}</Typography>
          </Box>
          <Box>
            <Grid container spacing="10px">
              {images.map((item, index) => {
                return (
                  <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                    {index == numImg - 1 && !seeMore ? (
                      <Box
                        className={classes.img}
                        sx={{ backgroundImage: `url('${item}')` }}>
                        <ButtonBase
                          className={classes.imgOver}
                          onClick={() => setSeeMore(true)}>
                          <Typography sx={{ color: "#ffffff" }}>
                            see more...
                          </Typography>
                        </ButtonBase>
                      </Box>
                    ) : (
                      <Box
                        className={classes.img}
                        onClick={() => (setOpen(true), setPhotoIndex(index))}
                        sx={{ backgroundImage: `url('${item}')` }}
                      />
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </CollapseSection>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
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

export default StoryCard;

StoryCard.propTypes = {};

StoryCard.defaultProps = {};

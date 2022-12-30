import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Badge,
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//npm
import Lightbox from "react-image-lightbox";

//icon
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const UseStyles = makeStyles((theme) => ({
  root: {
    // marginBottom: 30,
  },
  cancelButton: {
    "&:hover": {
      color: "#FF4848",
    },
  },
  image: {
    borderRadius: 5,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

const PreviewImage = ({ onClick, file, index, image, deleteMode }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const [remove, setRemove] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(index);

  return (
    <Box>
      {xs ? (
        <Box>
          {deleteMode ? (
            <Badge
              badgeContent={
                <Tooltip title="Remove">
                  <IconButton
                    onClick={onClick}
                    className={classes.cancelButton}
                  >
                    <CancelRoundedIcon />
                  </IconButton>
                </Tooltip>
              }
            >
              <Box
                sx={{
                  backgroundImage: `url(${image})`,
                  width: "100px",
                  height: "100px",
                }}
                className={classes.image}
                onClick={() => setIsOpen(true)}
              />
            </Badge>
          ) : (
            <Box
              sx={{
                backgroundImage: `url(${image})`,
                width: "100px",
                height: "100px",
              }}
              className={classes.image}
              onClick={() => setIsOpen(true)}
            />
          )}
        </Box>
      ) : (
        <Badge
          onMouseEnter={() => setRemove(true)}
          onMouseLeave={() => setRemove(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          badgeContent={
            remove && (
              <Tooltip title="Remove">
                <IconButton onClick={onClick} className={classes.cancelButton}>
                  <CancelRoundedIcon />
                </IconButton>
              </Tooltip>
            )
          }
        >
          <Box
            sx={{
              backgroundImage: `url(${image})`,
              width: "100px",
              height: "100px",
            }}
            className={classes.image}
            onClick={() => setIsOpen(true)}
          />
        </Badge>
      )}
      {isOpen && (
        <Lightbox
          mainSrc={file[photoIndex]}
          nextSrc={file[(photoIndex + 1) % file.length]}
          prevSrc={file[(photoIndex + file.length - 1) % file.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + file.length - 1) % file.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % file.length)
          }
        />
      )}
    </Box>
  );
};

export default PreviewImage;

PreviewImage.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteMode: PropTypes.bool.isRequired,
  file: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

PreviewImage.defaultProps = {};

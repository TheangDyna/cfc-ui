import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// icon
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import postDataFunc from "../../../utils/func/api/postDataFunc";
import deleteDataFunc from "../../../utils/func/api/deleteDataFunc";

const UseStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ReactionSection = ({
  userId,
  react,
  numReact,
  numComment,
  onClick,
  newsId,
}) => {
  const classes = UseStyles();
  const [reacted, setReacted] = useState(false);
  const handleReact = async () => {
    try {
      reacted
        ? await deleteDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/news/removeReact/${newsId}`
          )
        : await postDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/news/addReact/${newsId}`
          );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (react && userId) {
      setReacted(react.find((item) => item === userId) === userId);
    }
  }, [userId, react]);
  return (
    <Box className={classes.root}>
      <Box sx={{ mr: { xs: "10px", sm: "20px" } }} className={classes.iconBox}>
        <Tooltip title="Love">
          <IconButton
            sx={{ mr: { xs: "5px", sm: "10px" }, color: reacted ? "#FF4848" : "" }}
            onClick={() => handleReact()}>
            <FavoriteRoundedIcon />
          </IconButton>
        </Tooltip>
        <Typography>{numReact}</Typography>
      </Box>
      <Box sx={{ mr: { xs: "10px", sm: "20px" } }} className={classes.iconBox}>
        <Tooltip title="Comment">
          <IconButton sx={{ mr: { xs: "5px", sm: "10px" } }} onClick={onClick}>
            <ModeCommentRoundedIcon />
          </IconButton>
        </Tooltip>
        <Typography>{numComment}</Typography>
      </Box>
      <Box sx={{ mr: { xs: "10px", sm: "20px" } }} className={classes.iconBox}>
        <Tooltip title="Share">
          <IconButton sx={{ mr: { xs: "5px", sm: "10px" } }}>
            <ShareRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ReactionSection;

ReactionSection.propTypes = {};

ReactionSection.defaultProps = {};

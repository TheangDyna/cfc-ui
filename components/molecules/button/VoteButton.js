import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//icon
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useEffect } from "react";
const UseStyles = makeStyles((theme) => ({
  root: {},
}));

const VoteButton = ({ vote, userId, addVote, removeVote }) => {
  const classes = UseStyles();
  const [voted, setVoted] = useState(false);
  useEffect(() => {
    if (vote) {
      setVoted(vote.find((item) => item === userId) === userId);
    }
  }, [userId, vote]);
  return (
    <Box className={classes.root}>
      <Stack alignItems="center">
        <IconButton disabled={voted} onClick={addVote}>
          <Tooltip title="vote">
            <ArrowForwardIosRoundedIcon sx={{ transform: "rotate(-90deg)" }} />
          </Tooltip>
        </IconButton>

        <Typography>{vote.length}</Typography>
        <IconButton disabled={!voted} onClick={removeVote}>
          <Tooltip title="remove">
            <ArrowForwardIosRoundedIcon sx={{ transform: "rotate(90deg)" }} />
          </Tooltip>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default VoteButton;

VoteButton.propTypes = {};

VoteButton.defaultProps = {};

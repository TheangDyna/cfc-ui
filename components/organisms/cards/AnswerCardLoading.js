import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  IconButton,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import VoteButton from "../../molecules/button/VoteButton";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderBottom: "0.5px solid #CECECE",
    paddingBottom: 20,
  },
  question: {
    flex: 1,
  },
  profileBox: {
    alignItems: "center",
  },
  iconText: {
    color: "#ff9900",
    fontSize: 20,
  },
}));

const AnswerCardLoading = ({}) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: "20px" }}>
        {/* question */}
        <Box className={classes.question} order={{ xs: 2, sm: 1 }}>
          <Box>
            <Skeleton
              height={20}
              sx={{ mb: 1, width: { xs: "80%", md: "60%" } }}
            />
            <Skeleton
              height={20}
              sx={{ mb: 1, mt: 2, width: { xs: "80%", md: "60%" } }}
            />
            <Skeleton
              height={20}
              sx={{ mb: 1, width: { xs: "60%", md: "40%" } }}
            />
            <Skeleton
              height={20}
              sx={{ mb: 1, width: { xs: "60%", md: "40%" } }}
            />
          </Box>
        </Box>
        <Stack
          spacing={{ xs: 0, sm: "20px" }}
          direction={{ xs: "row", sm: "column" }}
          sx={{
            pb: { xs: "20px", sm: 0 },
            alignItems: { xs: "start", sm: "end" },
          }}
          order={{ xs: 1, sm: 2 }}>
          {/* profile */}
          <Stack
            spacing="20px"
            className={classes.profileBox}
            order={{ xs: 1, sm: 3 }}>
            <Box>
              <Skeleton height={20} width="100px" />
            </Box>
            <Box>
              <Skeleton variant="circular" width={40} height={40} />
            </Box>
            <Skeleton height={20} width="80px" />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AnswerCardLoading;

AnswerCardLoading.propTypes = {};

AnswerCardLoading.defaultProps = {};

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

//conponent
import WrapTextBox from "../../atoms/WrapTextBox";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderBottom: "0.5px solid #CECECE",
    paddingBottom: 20,
    cursor: "pointer",
    padding: 20,
    borderRadius: 5,
  },
  voteBox: {
    width: 80,
    textAlign: "center",
  },
  voteNum: {
    color: "#ff9900",
  },
  vote: {
    color: "#ff9900",
  },
  numAnswerBox: {
    background: "#ff9900",
    borderRadius: 5,
    width: 80,
    height: 75,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  numAnswer: {
    color: "#ffffff",
  },
  numAnswerText: {
    color: "#ffffff",
  },

  question: {
    flex: 1,
  },
  wrapTextBox: {
    height: 90,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    width: "100%",
    background: "red",
  },
  profileBox: {
    alignItems: "center",
  },
}));

const QuestionHomeCardLaoding = ({}) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing="20px">
        {/* information about post*/}
        <Stack spacing="10px" sx={{ display: { xs: "none", sm: "flex" } }}>
          <Box>
            <Stack sx={{ alignItems: "center" }}>
              <Skeleton height={20} width="50px" />
            </Stack>
          </Box>
          <Skeleton variant="rounded" width={80} height={75} />
        </Stack>
        <Divider sx={{ display: { xs: "none", sm: "flex" } }} />
        {/* question */}
        <Box className={classes.question}>
          <Stack spacing="20px">
            <Box>
              <Skeleton
                height={20}
                sx={{ mb: 1, width: { xs: "80%", md: "60%" } }}
              />
              <Skeleton
                height={20}
                sx={{ mb: 1, width: { xs: "60%", md: "40%" } }}
              />
            </Box>

            <Box>
              <Skeleton
                height={20}
                sx={{ mb: 1, width: { xs: "80%", md: "60%" } }}
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
          </Stack>
        </Box>
        {/* profile */}
        <Stack
          spacing="20px"
          className={classes.profileBox}
          sx={{ display: { xs: "none", sm: "flex"  } }}>
          <Box>
            <Skeleton height={20} width="100px" />
          </Box>
          <Box>
            <Skeleton variant="circular" width={40} height={40} />
          </Box>
          <Skeleton height={20} width="80px" />
        </Stack>
        {/* infomation sm */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Skeleton height={20} sx={{ width: "20%" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default QuestionHomeCardLaoding;

QuestionHomeCardLaoding.propTypes = {};

QuestionHomeCardLaoding.defaultProps = {};

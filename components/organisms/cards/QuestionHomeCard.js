import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
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
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    "&:hover":{
      background: "#f2f2f2"
    }
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

const QuestionHomeCard = ({
  id,
  firstName,
  lastName,
  date,
  profile,
  title,
  description,
  vote,
  answer,
}) => {
  const classes = UseStyles();
  const router = useRouter();
  return (
    <Box
      className={classes.root}
      onClick={() => {
        router.push(`/community/${id}`);
      }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing="20px">
        {/* information about post*/}
        <Stack spacing="10px" sx={{ display: { xs: "none", sm: "flex" } }}>
          <Box>
            <Stack sx={{ alignItems: "center" }}>
              <Typography variant="title">{vote}</Typography>
              <Typography variant="small">votes</Typography>
            </Stack>
          </Box>
          <Stack className={classes.numAnswerBox}>
            <Typography className={classes.numAnswer} variant="title">
              {answer}
            </Typography>
            <Typography className={classes.numAnswerText} variant="small">
              answers
            </Typography>
          </Stack>
          {/* <Box>
            <Stack sx={{ alignItems: "center" }}>
              <Typography variant="title">{3.5}k</Typography>
              <Typography variant="small">views</Typography>
            </Stack>
          </Box> */}
        </Stack>
        <Divider sx={{ display: { xs: "none", sm: "flex" } }} />
        {/* question */}
        <Box className={classes.question}>
          <Box>
            <Typography variant="title">{title}</Typography>
          </Box>
          <Box sx={{ mt: { xs: "10px", sm: "20px" }, maxWidth: "800px" }}>
            <WrapTextBox line={6}>
              <Typography variant="secondary">{description}</Typography>
            </WrapTextBox>
          </Box>
        </Box>
        {/* profile */}
        <Stack
          spacing="20px"
          className={classes.profileBox}
          sx={{ display: { xs: "none", sm: "flex" } }}>
          <Box>
            <Typography variant="small">{date}</Typography>
          </Box>
          <Box>
            <Avatar src={profile} />
          </Box>
          <Typography variant="small">
            {firstName} {lastName}
          </Typography>
        </Stack>
        {/* infomation sm */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography variant="small">{vote} votes</Typography>
          <Typography variant="secondary"> • </Typography>
          <Typography variant="small">{answer} answers</Typography>
          <Typography variant="secondary"> • </Typography>
          <Typography variant="small">{3.5}k views</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default QuestionHomeCard;

QuestionHomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

QuestionHomeCard.defaultProps = {};

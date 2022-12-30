import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Stack, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VoteButton from "../../molecules/button/VoteButton";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import postDataFunc from "../../../utils/func/api/postDataFunc";

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

const AnswerCard = ({title, answer, profile, date, firstName, lastName, vote, communityId, userId, id}) => {
  const classes = UseStyles();

  const handleAddVote = async () => {
    try {
      await postDataFunc(
        `${process.env.NEXT_PUBLIC_API_URL}/communuties/addVoteAnswer/${communityId}/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, sm: "20px" }}>
        {/* question */}
        <Box className={classes.question} order={{ xs: 2, sm: 1 }}>
          <Box>
            <QuestionAnswerRoundedIcon
              className={classes.iconText}
              sx={{ mr: { xs: "5px", sm: "10px" } }}
            />
            <Typography variant="title">
              {title}
            </Typography>
          </Box>

          <Box sx={{ mt: { xs: "10px", sm: "20px" }, maxWidth: "800px" }}>
            <Typography variant="secondary">
              {answer}
            </Typography>
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
          {/*vote button*/}
          <Box order={{ xs: 3, sm: 1 }}>
            <VoteButton vote={vote} userId={userId} addVote={()=> handleAddVote()}/>
          </Box>
          <Box
            flex={1}
            order={2}
            sx={{ display: { xs: "flex", sm: "none" } }}
          />
          {/* profile */}
          <Stack
            spacing="20px"
            className={classes.profileBox}
            order={{ xs: 1, sm: 3 }}>
            <Typography variant="small">{date}</Typography>
            <Avatar src={profile} />
            <Typography variant="small">{firstName} {lastName}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AnswerCard;

AnswerCard.propTypes = {};

AnswerCard.defaultProps = {};

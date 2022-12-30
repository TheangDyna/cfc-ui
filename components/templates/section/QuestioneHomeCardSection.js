import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

// compoment
import QuestionHomeCard from "../../organisms/cards/QuestionHomeCard";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const QuestionHomeCardSection = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        {data.map((item, index) => {
          return (
            <Box key={index} sx={{ mr: "10px" }}>
              <QuestionHomeCard
                id={item._id}
                firstName={item.createBy.firstName}
                lastName={item.createBy.lastName}
                profile={item.createBy.profileUrl}
                title={item.title}
                description={item.description}
                date={dayjs(item.createAt).format("DD MMMM YYYY")}
                vote={item.vote.length}
                answer={item.answer.length}
              />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default QuestionHomeCardSection;

QuestionHomeCardSection.propTypes = {
  data: PropTypes.array.isRequired,
};

QuestionHomeCardSection.defaultProps = {};

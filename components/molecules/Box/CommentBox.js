import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import deleteDataFunc from "../../../utils/func/api/deleteDataFunc";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  profile: {
    marginRight: 10,
    alignSelf: "start",
  },
  commentBox: {
    width: "100%",
  },
  comment: {
    width: "100%",
    padding: 10,
    borderRadius: 5,
    background: "#F2F2F2",
    // border: "0.5px solid #C4C4C4",
  },
  name: {
    marginRight: 5,
  },
  dateBox: {
    textAlign: "right",
  },
}));

const CommentBox = ({
  userId,
  profile,
  name,
  comment,
  date,
  newsId,
  commentId,
  userIdComment,
}) => {
  const classes = UseStyles();
  const [commented, setCommented] = useState(false);
  const handleDeleteComment = async () => {
    try {
      await deleteDataFunc(
        `${process.env.NEXT_PUBLIC_API_URL}/news/deleteComments/${newsId}/${commentId}`
      );
    } catch (error) {
      console.log(error);
    }

    //
    console.log("hello");
  };
  useEffect(() => {
    if (userIdComment) {
      setCommented(userIdComment === userId);
    }
  }, [userId, userIdComment]);
  return (
    <Box className={classes.root}>
      {/* Profile */}
      <Box className={classes.profile}>
        <Avatar src={profile} />
      </Box>
      {/* comment box*/}
      <Box className={classes.commentBox}>
        {/* comment */}
        <Box className={classes.comment}>
          <Typography variant="primary" className={classes.name}>
            {name}:
          </Typography>
          <Typography variant="secondary">{comment}</Typography>
        </Box>
        {/* data */}
        <Box className={classes.dateBox}>
          {commented && (
            <Typography
              variant="link"
              onClick={() => handleDeleteComment()}
              sx={{ fontSize: "14px", ":hover": { color: "#D32F2F" } }}>
              Delete
            </Typography>
          )}
          {commented && <Typography variant="secondary"> • </Typography>}
          <Typography variant="small">{date}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentBox;

CommentBox.propTypes = {
  profile: PropTypes.string,
  name: PropTypes.string,
  comment: PropTypes.string,
  date: PropTypes.string,
};

CommentBox.defaultProps = {};

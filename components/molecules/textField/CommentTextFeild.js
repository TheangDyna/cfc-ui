import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, IconButton, TextField, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

//icon
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import postDataFunc from "../../../utils/func/api/postDataFunc";

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
  input: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "0.5px solid #CECECE",
        borderRadius: 5,
      },
      "&:hover": {
        "& fieldset": {
          border: "0.5px solid #999999",
        },
      },
    },
  },
  inputText: {
    padding: "5px 5px 5px 10px",
  },
  sendBox: {
    marginLeft: "10px",
    alignSelf: "end",
  },
}));

const CommentTextField = ({ name, profile, userId, id }) => {
  const classes = UseStyles();
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = () => (event) => {
    setComment(event.target.value);
  };

  const handleSendComment = async () => {
    setLoading(true);
    let body = {
      userId,
      text: comment,
    };
    try {
     await postDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/news/addComments/${id}`,
            body
          );
    } catch (error) {
      console.log(error);
    }
    setComment("");
    setLoading(false);
  };

  const disable = comment && !loading;
  return (
    <Box className={classes.root}>
      <Box className={classes.profile}>
        <Avatar alt={name} src={profile} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          fullWidth
          placeholder="Comment..."
          multiline
          size="small"
          variant="outlined"
          focused={false}
          className={classes.input}
          onChange={handleChange()}
          value={comment}
          InputProps={{
            className: classes.inputText,
            endAdornment: (
              <Box className={classes.sendBox}>
                <IconButton
                type="submit"
                  disabled={!disable}
                  onClick={() => handleSendComment()}>
                  <Tooltip title="Send">
                    <SendRoundedIcon />
                  </Tooltip>
                </IconButton>
              </Box>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default CommentTextField;

CommentTextField.propTypes = {
  name: PropTypes.string,
  profile: PropTypes.string,
};

CommentTextField.defaultProps = {};

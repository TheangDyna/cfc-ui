import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//icon
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// function
import postDataFunc from "../../../utils/func/api/postDataFunc";
import updateDataFunc from "../../../utils/func/api/updateDataFunc";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  card: {
    boxShadow: "none",
  },
  previewImageBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  action: {
    display: "flex",
    alignItems: "center",
  },
  noBorder: {
    border: "none",
  },
  noPadding: {
    padding: 0,
  },
}));

const AnswerCommunityCard = ({ closeDialog, user, id }) => {
  const classes = UseStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    answer: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const answer = values.answer;

    let body = {
      createBy: user._id,
      answer,
    };

    try {
      await postDataFunc(
        `${process.env.NEXT_PUBLIC_API_URL}/communuties/addAnswer/${id}`,
        body
      );
    } catch (error) {
      console.log(error);
    }
    closeDialog(false);
    setIsLoading(false);
  };

  const disable = !isLoading && values.answer;

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            p: { xs: "20px 10px ", sm: "20px" },
          }}>
          <Typography variant="primary">Add Answer</Typography>
          <Box flex={1} />
          <IconButton sx={{ mr: "10px" }} onClick={() => closeDialog(false)}>
            <Tooltip title="close">
              <CloseRoundedIcon />
            </Tooltip>
          </IconButton>
        </Box>
        <Divider
          orientation="vertical"
          sx={{ width: "100%", height: "0.5px" }}
        />
        <Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ p: { xs: "20px 10px", sm: "20px" } }}>
              <Stack spacing="20px">
                <Box>
                  <InputBase
                    fullWidth
                    multiline
                    minRows={3}
                    placeholder="Answer"
                    required
                    onChange={handleChange("answer")}
                    value={values.answer}
                  />
                </Box>
              </Stack>
            </Box>
            <Box
              className={classes.action}
              sx={{ p: { xs: "0 10px 20px 10px", sm: "0 20px 20px 20px" } }}>
              <Box flexGrow={1} />
              <Box>
                <Button variant="contained" type="submit" disabled={!disable}>
                  {isLoading ? "Add..." : "Add"}
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default AnswerCommunityCard;

AnswerCommunityCard.propTypes = {};

AnswerCommunityCard.defaultProps = {};

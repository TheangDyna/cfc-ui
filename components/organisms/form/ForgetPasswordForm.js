import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  actionBox: {
    width: "100%",
    display: "flex",
    justifyContent: "end",
  },
}));

const ForgetPasswordForm = ({ signup, signin }) => {
  const classes = UseStyles();
  const [values, setValues] = useState({
    email: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = values.email;

    alert("email: " + email);
  };
  return (
    <Box className={classes.root}>
      <Box>
        <Box sx={{ mb: { xs: "30px", sm: "50px" } }}>
          <Typography variant="logo">CFC Alumni</Typography>
        </Box>
        <Box sx={{ mb: { xs: "20px", sm: "30px" } }}>
          <Typography variant="secondary">
            Enter your email address and you will receive a link to create a new
            password via email.
          </Typography>
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <Stack direction="column" spacing="20px">
            <TextField
              variant="standard"
              size="small"
              required
              type="email"
              label="Email"
              name="email"
              onChange={handleChange("email")}
            />
            <Box className={classes.actionBox}>
              <Typography variant="link" onClick={signin}>
                Already have an account?
              </Typography>
            </Box>
            <Box className={classes.actionBox}>
              <Typography variant="link" onClick={signup}>
                Don&apos;t Have an Account?
              </Typography>
            </Box>
            <Box className={classes.actionBox}>
              <Button variant="contained" type="submit">
                Send
              </Button>
            </Box>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default ForgetPasswordForm;

ForgetPasswordForm.propTypes = {};

ForgetPasswordForm.defaultProps = {};

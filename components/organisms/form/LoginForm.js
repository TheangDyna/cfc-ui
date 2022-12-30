import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//lib
import isEmail from "validator/lib/isEmail";

//icon
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// function
import { loginUser } from "../../../utils/func/auth/authUser";

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

const LoginForm = ({ forgetpass, signup }) => {
  const classes = UseStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isEmailFormat =
    values.email != "" ? !isEmail(values.email) : isEmail(values.email);
  const disabled =
  !isLoading &&
  values.email &&
  values.password &&
  !isEmailFormat &&
  errorMessage != "User not found" ;
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setErrorMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = values.email;
    const password = values.password;
    loginUser(email, password, setErrorMessage, setIsLoading);
  };
  const pass = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleClickShowPassword} edge="start">
          {values.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  };
  return (
    <Box className={classes.root}>
      <Box>
        <Box sx={{ mb: { xs: "30px", sm: "50px" } }}>
          <Typography variant="logo">CFC Alumni</Typography>
        </Box>
        <Box sx={{ mb: { xs: "20px", sm: "30px" } }}>
          <Typography variant="secondary">
            Welcome! log in to get in the moments updates on the thing that
            interests you.
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
              error={
                errorMessage == "User not found"
              }
              helperText={
                errorMessage == "User not found"
                  ? "User not found"
                  : null
              }
            />
            <TextField
              variant="standard"
              size="small"
              required
              type={values.showPassword ? "text" : "password"}
              InputProps={pass}
              label="Password"
              name="pass"
              onChange={handleChange("password")}
              error={errorMessage == "Wrong Password"}
              helperText={
                errorMessage == "Wrong Password" ? "Wrong Password" : null
              }
            />
            <Box className={classes.actionBox}>
              <Typography variant="link" onClick={forgetpass}>
                Forget Password?
              </Typography>
            </Box>
            <Box className={classes.actionBox}>
              <Typography variant="link" onClick={signup}>
                Don&apos;t Have an Account?
              </Typography>
            </Box>
            <Box className={classes.actionBox}>
              <Button variant="contained" type="submit" disabled={!disabled}>
                {isLoading ? "Sign In..." : " Sign In"}
              </Button>
            </Box>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

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

//function
import { registerUser } from "../../../utils/func/auth/authUser";

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

const RegisterForm = ({ signin }) => {
  const classes = UseStyles();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const passAtLeast = values.password.length > 0 && values.password.length < 6;
  const isEmailFormat =
    values.email != "" ? !isEmail(values.email) : isEmail(values.email);
  const disabled =
    !isLoading &&
    values.fname &&
    values.lname &&
    values.email &&
    values.password &&
    !isEmailFormat &&
    errorMessage != "This email already in use" &&
    !passAtLeast;
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setErrorMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fname = values.fname;
    const lname = values.lname;
    const email = values.email;
    const password = values.password;
    registerUser(fname, lname, email, password, setErrorMessage, setIsLoading);
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
            Create an account to keep track of your school and stay in touch.
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
              type="text"
              label="First Name"
              name="fname"
              onChange={handleChange("fname")}
            />
            <TextField
              variant="standard"
              size="small"
              required
              type="text"
              label="Last Name"
              name="lname"
              onChange={handleChange("lname")}
            />
            <TextField
              variant="standard"
              size="small"
              required
              type="email"
              label="Email"
              name="email"
              onChange={handleChange("email")}
              error={
                isEmailFormat || errorMessage == "This email already in use"
              }
              helperText={
                errorMessage == "This email already in use"
                  ? "This email already in use"
                  : isEmailFormat
                  ? "Invalid email format"
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
              error={
                passAtLeast || errorMessage == "Password at least 6 digits"
              }
              helperText={
                errorMessage == "Password at least 6 digits"
                  ? "Password at least 6 digits"
                  : passAtLeast
                  ? "Password at least 6 digits"
                  : null
              }
            />
            <Box className={classes.actionBox}>
              <Typography variant="link" onClick={signin}>
                Already have an account?
              </Typography>
            </Box>
            <Box className={classes.actionBox}>
              <Button variant="contained" type="submit" disabled={!disabled}>
                {isLoading ? "Sign Up..." : " Sign Up"}
              </Button>
            </Box>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};

import React, { useState } from "react";
import { Box} from "@mui/material";
import { makeStyles } from "@mui/styles";

//component
import CtrlAuthForm from "../components/organisms/form/CtrlauthForm";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  form: {
    maxWidth: 600,
    width: "100%",
    margin: "0 auto",
  },
}));

const authentication = () => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.form}>
        <CtrlAuthForm />
      </Box>
    </Box>
  );
};

export default authentication;

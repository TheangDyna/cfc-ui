import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const profile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        Profile Page
    </Box>
  );
}

export default profile;
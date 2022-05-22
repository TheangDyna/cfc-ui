import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const community = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        Community Page
    </Box>
  );
}

export default community;
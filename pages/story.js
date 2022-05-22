import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const story = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        Story Page
    </Box>
  );
}

export default story;
import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const event = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        Upcoming Event Page
    </Box>
  );
}

export default event;
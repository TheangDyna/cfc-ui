import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const news = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        New Feed Page
    </Box>
  );
}

export default news;
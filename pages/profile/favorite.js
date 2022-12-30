import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const UseStyles = makeStyles((theme) => ({

}));

const Favorite = () => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
        Favorite Page
    </Box>
  );
}

export default Favorite;
import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const favorite = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        Favorite Page
    </Box>
  );
}

export default favorite;
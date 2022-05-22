import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const information = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        New Feed Page
    </Box>
  );
}

export default information;
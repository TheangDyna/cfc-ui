import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        Contact Page
    </Box>
  );
}

export default contact;
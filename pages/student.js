import React, { useState, } from 'react';
import {
    Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const student = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            Student Page
        </Box>
    );
}

export default student;
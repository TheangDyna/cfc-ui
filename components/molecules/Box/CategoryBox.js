import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    IconButton,
    Tooltip,
    Typography,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'max-content',
        cursor: 'pointer',
        margin: '5px 10px'
    },
    image: {
        width: 40,
        height: 40
    }
}));

const CategoryBox = ({

}) => {
    const classes = useStyles();
    return (

        <Box className={classes.root}
            onClick={()=>{console.log('hello');}}
        >
            <Tooltip title='All'>
                <Card sx={{ p: {xs: '5px', sm: '10px'} }}>
                    <img
                        className={classes.image}
                        src='./categories/all.png'
                    />
                </Card>
            </Tooltip>
        </Box>
    );
}

export default CategoryBox;

CategoryBox.propTypes = {

};

CategoryBox.defaultProps = {

};
import React, { useState, } from 'react';
import {
    Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';
import FbImageGrid from '@yalamber/react-fb-image-grid';

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: '200px',
        width: '100%',
        display: 'flex',
    }
}));

const Test = ({

}) => {
    const classes = useStyles();
    const images = [
        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
        "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
        "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
        "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350",
        "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
        "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350"
    ];
    return (
        <Box className={classes.root}>
            <FbImageGrid
                images={images}
                hideOverlay={true}
            />
        </Box>
    );
}

export default Test;

import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

//component
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        height: 65,
    }
}));

const Layout = ({
    children
}) => {
    const classes = useStyles();
    return (
        <Box>
            <Navbar />
            <Box className={classes.toolbar} />
            <Box sx={{ padding: { xs: '20px 10px', sm: '20px 30px', md: '20px 50px' } }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}

export default Layout;

Layout.propTypes = {

};

Layout.defaultProps = {

};
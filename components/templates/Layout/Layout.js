import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

//component
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
}));

const Layout = ({
    children
}) => {
    const classes = useStyles();
    return (
        <Box>
            {/* <Navbar> */}
                {children}
            {/* </Navbar> */}
            {/* ===footer=== */}
        </Box>
    );
}

export default Layout;

Layout.propTypes = {

};

Layout.defaultProps = {
   
};
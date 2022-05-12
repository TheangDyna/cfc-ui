import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Skeleton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
}));

const SkeletonTitle = ({
    width,
}) => {
    const classes = useStyles();
    return (
        <Skeleton animation='wave' width={width} height={20} />
    );
}

export default SkeletonTitle;

SkeletonTitle.propTypes = {
    width: PropTypes.number.isRequired,
};

SkeletonTitle.defaultProps = {
    width: 200,
};
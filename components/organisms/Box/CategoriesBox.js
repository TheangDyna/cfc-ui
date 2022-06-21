import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
}));
// data
import { categories } from '../../../utils/constant/information';

// component
import CategoryBox from '../../molecules/Box/CategoryBox';

const CategoriesBox = ({

}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {
                categories.map((item, index) => {
                    return (
                        <CategoryBox
                            key={index}
                            title={item.title}
                            path={item.path}
                        />
                    )
                })
            }
        </Box>
    );
}

export default CategoriesBox;

CategoriesBox.propTypes = {

};

CategoriesBox.defaultProps = {

};
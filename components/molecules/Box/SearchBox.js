import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    Divider,
    IconButton,
    InputBase,
    Tooltip,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

//icon
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    card: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const SearchBox = ({

}) => {
    const classes = useStyles();
    return (
        <Box classNmae={classes.root}>
            <Card
                className={classes.card}
                sx={{ p: { xs: '5px 5px 5px 10px', sm: '5px 15px 5px 20px' } }}
            >
                <InputBase
                    sx={{ flex: 1 }}
                    placeholder='Search...'
                />
                <Box>
                    <Tooltip title='Search'>
                        <IconButton>
                            <SearchRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Card>
        </Box>
    );
}

export default SearchBox;

SearchBox.propTypes = {

};

SearchBox.defaultProps = {

};
import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    IconButton,
    Tooltip,
    Typography,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

// icon
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    iconBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const ReactIcon = ({
    numReact,
    numComment,
    numShare,
    onClick,
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box
                sx={{ mr: { xs: '10px', sm: '20px' } }}
                className={classes.iconBox}
            >
                <Tooltip title='Love'>
                    <IconButton
                        sx={{ mr: { xs: '5px', sm: '10px' } }}
                    >
                        <FavoriteRoundedIcon />
                    </IconButton>
                </Tooltip>
                <Typography>
                    {numReact}
                </Typography>
            </Box>
            <Box
                sx={{ mr: { xs: '10px', sm: '20px' } }}
                className={classes.iconBox}
            >
                <Tooltip title='Comment'>
                    <IconButton
                        sx={{ mr: { xs: '5px', sm: '10px' } }}
                        onClick={onClick}
                    >
                        <ModeCommentRoundedIcon />
                    </IconButton>
                </Tooltip>
                <Typography>
                    {numComment}
                </Typography>
            </Box>
            <Box
                sx={{ mr: { xs: '10px', sm: '20px' } }}
                className={classes.iconBox}
            >
                <Tooltip title='Share'>
                    <IconButton
                        sx={{ mr: { xs: '5px', sm: '10px' } }}
                    >
                        <ShareRoundedIcon />
                    </IconButton>
                </Tooltip>
                <Typography>
                    {numShare}
                </Typography>
            </Box>
        </Box>
    );
}

export default ReactIcon;

ReactIcon.propTypes = {
    numReact: PropTypes.number.isRequired,
    numComment: PropTypes.number.isRequired,
    numShare: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

ReactIcon.defaultProps = {
};
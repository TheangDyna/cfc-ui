import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Typography,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    profile: {
        marginRight: 10,
        alignSelf: 'start',
    },
    commentBox: {
        width: '100%',
    },
    comment: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        border: '0.5px solid #C4C4C4'
    },
    name: {
        marginRight: 5,
    },
    dateBox: {
        marginTop: '10px',
        textAlign: 'right',
    }
}));

const CommentBox = ({
    profile,
    name,
    comment,
    date,
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {/* Profile */}
            <Box className={classes.profile}>
                <Avatar src={profile} />
            </Box>
            {/* comment box*/}
            <Box className={classes.commentBox}>
                {/* comment */}
                <Box className={classes.comment}>
                    <Typography
                        variant='title'
                        className={classes.name}
                    >
                        {name}:
                    </Typography>
                    <Typography variant='secondary' >
                        {comment}
                    </Typography>
                </Box>
                {/* data */}
                <Box className={classes.dateBox}>
                    <Typography variant='date'>
                        {date}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default CommentBox;

CommentBox.propTypes = {
    profile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

CommentBox.defaultProps = {

};
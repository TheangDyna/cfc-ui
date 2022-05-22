import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    IconButton,
    TextField,
    Tooltip,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

//icon
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    profile: {
        marginRight: 10,
        alignSelf: 'start'
    },
    input: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '0.5px solid #CECECE',
                borderRadius: 5,

            },
            '&:hover': {
                '& fieldset': {
                    border: '0.5px solid #666666',
                }
            }
        }
    },
    inputText: {
        padding: '5px 5px 5px 10px',
    },
    sendBox: {
        marginLeft: '10px',
        alignSelf: 'end',
    },
}));

const CommentTextField = ({
    name,
    profile,
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.profile}>
                <Avatar
                    alt={name}
                    src={profile}
                />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <TextField
                    fullWidth
                    placeholder='Comment...'
                    multiline
                    size='small'
                    variant='outlined'
                    focused={false}
                    className={classes.input}
                    InputProps={{
                        className: classes.inputText,
                        endAdornment:
                            < Box className={classes.sendBox}>
                                <Tooltip title='Send'>
                                    <IconButton>
                                        <SendRoundedIcon/>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                    }}
                />
            </Box>
        </Box >
    );
}

export default CommentTextField;

CommentTextField.propTypes = {
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
};

CommentTextField.defaultProps = {

};
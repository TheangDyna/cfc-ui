import React, { useState, } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
    Box,
    Divider,
    IconButton,
    Stack,
    Tooltip,
    Typography,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

// data
import { footerLink } from '../../../utils/constant/footer';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        width: '100%',
        background: '#5B5656',
    },
    content: {
        height: '100%',
        display: 'flex',
    },
    link: {
        color: '#F2F2F2',
        cursor: 'pointer',
        marginRight: 10,
        '&:hover': {
            textDecoration: 'underline',
            color: '#999999'
        }
    },
    subTitleBox: {
        marginTop: 10,
    },
    subTitle: {
        color: '#999999',
        fontSize: 14,
    },
    icon: {
        color: '#F2F2F2',
        '&:hover': {
            color: '#999999'
        }
    }
}));


const Footer = ({

}) => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <Box className={classes.root}>
            <Box
                className={classes.container}
                sx={{ padding: { xs: '20px 10px', sm: '40px 30px', md: '40px 50px ' } }}
            >
                {/* link */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ sx: '20px', sm: 0 }}
                    sx={{ justifyContent: { xs: 'none', sm: 'space-between' } }}
                >
                    <Stack
                        direction='row'
                        spacing={{ sm: 0, md: '50px'}}
                        alignItems='center'
                        alignSelf='center'
                    >
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Typography
                                variant='logo'
                                color='#F2F2F2'
                            >
                                CFC Alumni
                            </Typography>
                        </Box>
                        <Divider sx={{ height: '50px', display: { xs: 'none', md: 'block' } }} />
                        <Box>
                            <Stack
                                direction='row'
                                flexWrap='wrap'
                                sx={{ justifyContent: { xs: 'center', sm: 'none' } }}
                            >
                                {footerLink.link.map((item, index) => {
                                    return (
                                        <Typography
                                            key={index}
                                            className={classes.link}
                                            onClick={() => {
                                                router.push(item.path);
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    )
                                })}
                            </Stack>
                            {/* licence */}
                            <Box
                                className={classes.subTitleBox}
                                sx={{ textAlign: { xs: 'center', sm: 'left' } }}
                            >
                                <Typography className={classes.subTitle}>
                                    {footerLink.licence}
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                    {/* icon */}
                    <Box>
                        <Box sx={{ mt: { xs: '20px', sm: 0 } }}>
                            <Stack
                                direction='row'
                                spacing={{ xs: '10px', sm: '20px', md: '30px' }}
                                sx={{ justifyContent: { xs: 'center', sm: 'none' } }}
                            >
                                {footerLink.icon.map((item, index) => (
                                    <Tooltip
                                        key={index}
                                        title={item.title}
                                    >
                                        <IconButton
                                            className={classes.icon}
                                        >
                                            {item.icon}
                                        </IconButton>
                                    </Tooltip>
                                ))}
                            </Stack>
                        </Box>
                        {/* email */}
                        <Box
                            className={classes.subTitleBox}
                            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
                        >
                            <Typography className={classes.subTitle}>
                                {footerLink.email}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box >
    );
}

export default Footer;

Footer.propTypes = {

};

Footer.defaultProps = {

};
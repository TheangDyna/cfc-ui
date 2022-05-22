import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Card,
    Divider,
    IconButton,
    InputBase,
    Tooltip,
    Typography,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

//icon
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

const PostNewsCard = (props, {

}) => {
    const classes = useStyles();
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [viewImages, setViewImages] = useState(null);
    const handleViewImages = (e) => {
        const images = e.target.files[0];
        setViewImages(images);
    };
    return (
        <Box className={classes.root}>
            <Card className={classes.card}>
                <Box
                    sx={{ p: { xs: '20px 10px ', sm: '20px' } }}
                >
                    <Typography variant='primary' >
                        Post Something
                    </Typography>
                </Box>
                <Divider orientation='vertical' sx={{ width: '100%', height: '0.5px' }} />
                <Box
                    className={classes.content}
                >
                    <form>
                        <Box sx={{ p: { xs: '20px 10px 15px 10px', sm: '20px 20px 15px 20px' } }}>
                            <InputBase
                                sx={{ width: '100%' }}
                                placeholder="What's on your mind?"
                                minRows={3}
                                multiline
                            />
                        </Box>
                        <img
                            src={container?.URL.createObjectURL(viewImages)}
                            sx={{ width: '100px', height: '100px' }}
                        />
                        {
                            viewImages ? console.log(window) : console.log('123')
                        }
                        <Box
                            className={classes.action}
                            sx={{ p: { xs: '0 10px 20px 5px', sm: '0 20px 20px 15px' }, backgroun: 'gray', display: 'flex', alignItems: 'center' }}
                        >
                            <Box>
                                <Tooltip title='Take Photos' sx={{ mr: { xs: '10px', sm: '20px' } }}>
                                    <IconButton>
                                        <PhotoCameraRoundedIcon />
                                    </IconButton>
                                </Tooltip>
                                <label htmlFor='icon-button-file'>
                                    <Tooltip title='Select Photos'>
                                        <IconButton>
                                            <InsertPhotoRoundedIcon />
                                        </IconButton>
                                    </Tooltip>
                                </label>
                                <input
                                    sx={{ display: 'none' }}
                                    type='file'
                                    id='icon-button-file'
                                    accept='image/*'
                                    onChange={handleViewImages} />
                            </Box>

                            <Box flexGrow={1} />
                            <Box>
                                <Button variant='contained'>
                                    Post
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Card>
        </Box>
    );
}

PostNewsCard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default PostNewsCard;

PostNewsCard.propTypes = {

};

PostNewsCard.defaultProps = {

};
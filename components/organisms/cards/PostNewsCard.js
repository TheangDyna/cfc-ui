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
    deleteButton: {
        display: 'none',
        '&:hover':{
            display: 'block'
        }
    }
}));

const PostNewsCard = ({

}) => {
    const classes = useStyles();
    const [file, setFile] = useState([]);
    const uploadSingleFile = (e) => {
        let ImagesArray = Object.entries(e.target.files).map((e) =>
            URL.createObjectURL(e[1])
        );
        console.log(ImagesArray);
        setFile([...file, ...ImagesArray]);
        console.log("file", file);
    }

    const upload = (e) => {
        e.preventDefault();
        console.log(file);
    }

    const deleteFile = (e) => {
        const s = file.filter((item, index) => index !== e);
        setFile(s);
        console.log(s);
    }

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
                        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                            {
                                file.map((item, index) => {
                                    return (
                                        <Box key={index}>
                                            < img src={item} width='100px' height='100px' style={{ margin: '20px', borderRadius: '5px' }} />
                                            <Button onClick={() => deleteFile(index)} className={classes.deleteButton}>
                                                delete
                                            </Button>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
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
                                <Tooltip title='Select Photos'>
                                    <IconButton
                                        component="label"
                                    >
                                        <input
                                            onChange={uploadSingleFile}
                                            type='file'
                                            hidden
                                            name='coverFileName'
                                            accept='image/*'
                                            multiple
                                        />
                                        <InsertPhotoRoundedIcon />
                                    </IconButton>
                                </Tooltip>
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
            </Card >
        </Box >
    );
}

export default PostNewsCard;

PostNewsCard.propTypes = {

};

PostNewsCard.defaultProps = {

};
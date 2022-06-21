import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    Collapse,
    Divider,
    IconButton,
    ImageList,
    ImageListItem,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';


// component
import CommentBox from '../../molecules/Box/CommentBox';
import ReactIcon from '../icon/ReactIcon';
import CommentTextField from '../../molecules/textField/CommentTextFeild';

// icon
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        width: '100%',
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    imageBox: {
        width: '100%',
    },
    imageList: {
        margin: 0,
    },
    image: {
        // width: '100%',
        borderRadius: 5,
    },
    commentBox: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',

    }
}));

const NewsFeedCard = ({
    title,
    images,
    decription,
    date,
    comments,
}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <Card className={classes.root}>
            {/* tite section */}
            <Box
                className={classes.header}
                sx={{ p: { xs: '20px 10px ', sm: '20px' } }}
            >
                <Typography variant='primary' >
                    {title}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <Tooltip title='Add to favorite'>
                        <IconButton>
                            <BookmarkRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Divider orientation='vertical' sx={{ width: '100%', height: '0.5px' }} />
            {/* image section */}
            {
                images == '' ?
                    null :
                    <Box>
                        <Box sx={{ p: { xs: '20px 5px 0 5px', sm: '20px 10px 0 10px' } }}>
                            <Box className={classes.imageBox}>
                                <ImageList
                                    variant='masonry'
                                    cols={2}
                                    gap={4}
                                    className={classes.imageList}
                                >
                                    {images?.map((item, index) => (
                                        <ImageListItem key={index}>
                                            <img
                                                className={classes.image}
                                                src={`${item}?w=248&fit=crop&auto=format`}
                                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                loading='lazy'
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>

                            </Box>
                        </Box>
                        {/* decription section */}
                        {
                            decription ?
                                <Box sx={{ p: { xs: '20px 10px', sm: '20px' } }}>
                                    <Typography variant='primary'>
                                        {decription}
                                    </Typography>
                                </Box>
                                :
                                <Box sx={{ p: { xs: '10px 10px', sm: '10px' } }} />
                        }
                        <Divider orientation='vertical' sx={{ width: '100%', height: '0.5px' }} />
                    </Box>
            }
            {/* react section */}
            {
                !open ?
                    <Box
                        className={classes.commentBox}
                        sx={{ p: { xs: '20px 10px', sm: '20px' } }}
                    >
                        {/* react */}
                        <ReactIcon numReact={200} numComment={100} numShare={50} onClick={() => { setOpen(!open) }} />
                        <Box sx={{ display: 'flex', flexGrow: 1 }} />
                        {/* date */}
                        <Box>
                            <Typography variant='date'>
                                {date}
                            </Typography>
                        </Box>
                    </Box>
                    :
                    // icon close comment
                    <Box
                        className={classes.commentBox}
                        sx={{ p: { xs: '10px', sm: '10px 20px' } }}
                    >
                        <Box sx={{ display: 'flex', flexGrow: 1 }} />
                        <Tooltip title='Close'>
                            <IconButton onClick={() => { setOpen(!open) }} onClose={() => { setOpen(!open) }}>
                                <ExpandLessRoundedIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
            }
            {/* comment section */}
            <Collapse in={open}>
                {/* comment input */}
                <Box sx={{ p: { xs: '0 10px 10px 10px', sm: '0 20px 10px 20px' } }}>
                    <CommentTextField
                        name='Dyna'
                        profile='https://ichef.bbci.co.uk/news/976/cpsprodpb/A20B/production/_123138414_1ae36bae-44c9-4277-89a0-7b41aaca2cdb.jpg'
                    />
                </Box>
                {/* show other comment */}
                {
                    comments == '' ?
                        null :
                        <Box sx={{ p: { xs: '20px 10px', sm: '20px 20px 20px 20px' } }}>
                            <Stack direction='column' spacing='10px'>
                                {
                                    comments?.map((item, index) => {
                                        return (
                                            <CommentBox
                                                key={index}
                                                profile={item.profile}
                                                name={item.name}
                                                comment={item.comment}
                                                date={item.date}
                                            />
                                        )
                                    })
                                }
                            </Stack>
                        </Box>
                }
            </Collapse>


        </Card >
    );
}

export default NewsFeedCard;

NewsFeedCard.propTypes = {
    title: PropTypes.string,
    images: PropTypes.array,
    decription: PropTypes.string,
    date: PropTypes.string.isRequired,
    comments: PropTypes.array,
};

NewsFeedCard.defaultProps = {

};
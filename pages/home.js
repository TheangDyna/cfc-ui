import React, { useState, } from 'react';
import {
  Box,

} from '@mui/material';
import { makeStyles } from '@mui/styles';

// component
import SearchBox from '../components/molecules/Box/SearchBox';
import PostNewsCard from '../components/organisms/cards/PostNewsCard';
import CategoriesBox from '../components/organisms/Box/CategoriesBox';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <br />
      <br />
      <br />
      <SearchBox />
      <br />
      <br />
      <br />
      <PostNewsCard />
      <br />
      <br />
      <br />
      {/* <StoryRecommendCard /> */}
      <br />
      <br />
      <br />
      <Box>
        <CategoriesBox />
      </Box>
    </Box>
  );
}

export default home;
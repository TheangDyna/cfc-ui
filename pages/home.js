import React, { useState, } from 'react';
import {
  Box, Stack,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// component
import SearchBox from '../components/molecules/Box/SearchBox';
import PostNewsCard from '../components/organisms/cards/PostNewsCard';
import StoryRecommendCard from '../components/organisms/cards/StoryRecommendCard';
import CategoryBox from '../components/molecules/Box/CategoryBox';


const useStyles = makeStyles((theme) => ({

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
      <Box sx={{ display: 'flex', flexWrap:'wrap',alignItem: 'center', justifyContent: 'center', background: 'red'}}>
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
      </Box>
    </Box>
  );
}

export default home;
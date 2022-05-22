import React, { useState, } from 'react';
import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

//component
import NewsFeedCard from '../components/organisms/cards/NewsFeedCard';

//data
import { newsFeeds } from '../utils/constant/information'

const useStyles = makeStyles((theme) => ({

}));

const home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack
        spacing={'20px'}
        direction='column'
      >
        {
          newsFeeds.map((item, index) => {
            return (
              <NewsFeedCard
                key={index}
                title={item.title}
                images={item.images}
                decription={item.decription}
                date={item.date}
                comments={item.comments}
              />
            )
          })

        }
      </Stack>
    </Box>
  );
}

export default home;
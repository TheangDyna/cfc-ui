import React, { useState, } from 'react';
import {
  Box, Button, Card, Divider, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({

}));

const home = ({

}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* test theme */}
      <Box sx={{ padding: '50px' }}>
        <Card sx={{ maxWidth: 500, padding: '20px', }}>
          <Box sx={{ paddingBottom: '20px'}}>
            <Typography variant='title'>
              Title
            </Typography>
          </Box>
          <Divider />
          <Typography variant='primary'>
            Normal
          </Typography>
          <Typography variant='secondary'>
            Secondary
          </Typography>
          <Typography variant='date'>
            Date
          </Typography>
          <Button variant='contained'>
            hello
          </Button>
          <Button variant='outlined'>
            hello
          </Button>
        </Card>
        <br />
        <br />
        <br />
        <br />
        <Card>
          hello
        </Card>
      </Box>
    </Box>
  );
}

export default home;
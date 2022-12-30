import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import SearchBox from "../../molecules/box/SearchBox";
import CategoriesBox from "../../organisms/box/CategoriesBox";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "sticky",
    top: 85,
  },
}));

const FillterNewsFeed = ({setOpen, setUpdate, user}) => {
  const classes = UseStyles();
  const handleClick = ()=>{
    setOpen();
    setUpdate();
  }
  return (
    <Box
      className={classes.root}
      sx={{ m: { xs: "0 auto" }, maxWidth: { xs: 400, md: "100%" } }}>
      <Stack spacing="20px">
        <SearchBox />
        <CategoriesBox />
        {
          user && user.role == 'admin' && <Box display="flex">
          <Box flex={1} />
          <Button variant="contained" onClick={handleClick}>
            Post
          </Button>
        </Box>
        }
      </Stack>
    </Box>
  );
};

export default FillterNewsFeed;

FillterNewsFeed.propTypes = {};

FillterNewsFeed.defaultProps = {};

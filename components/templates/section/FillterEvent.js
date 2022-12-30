import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import SearchBox from "../../molecules/box/SearchBox";
import CategoriesBox from "../../organisms/box/CategoriesBox";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const FillterEvent = ({}) => {
  const classes = UseStyles();
  const [values, setValues] = useState({
    satus: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Box className={classes.root}>
      <Stack spacing="20px" direction={{xs: 'column', sm: 'row'}}>
        <Box order={{xs: 3, sm: 1}}>
          <CategoriesBox />
        </Box>
        <Box flex={1} order={2}/>
        <Box order={{xs: 1, sm: 3}} sx={{ width: '500px' }}>
          <SearchBox />
        </Box>
      </Stack>
    </Box>
  );
};

export default FillterEvent;

FillterEvent.propTypes = {};

FillterEvent.defaultProps = {};

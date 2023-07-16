import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Card, IconButton, InputBase, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

//icon
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SearchBox = ({}) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Card
        className={classes.card}
        sx={{ p: { xs: "5px 10px", sm: "5px 20px" } }}
      >
        <InputBase sx={{ flex: 1, fontSize: 16 }} placeholder="Search..."/>
        <Box>
          <Tooltip title="Search">
            <IconButton>
              <SearchRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Card>
    </Box>
  );
};

export default SearchBox;

SearchBox.propTypes = {};

SearchBox.defaultProps = {};

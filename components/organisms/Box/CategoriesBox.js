import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));
// data
import { categories } from "../../../utils/constant/information";

// component
import CategoryBox from "../../molecules/box/CategoryBox";
import { TabContext, TabList } from "@mui/lab";

const CategoriesBox = ({}) => {
  const classes = UseStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.root}>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        {categories.map((item, index) => {
          return (
            <Tab
              key={index}
              label={<CategoryBox title={item.title} path={item.path} />}
            />
          );
        })}
      </Tabs> */}
      <Stack flexDirection="row" justifyContent="space-between">
        {categories.map((item, index) => {
          return (
            <CategoryBox key={index} title={item.title} path={item.path} />
          );
        })}
      </Stack>
    </Box>
  );
};

export default CategoriesBox;

CategoriesBox.propTypes = {};

CategoriesBox.defaultProps = {};

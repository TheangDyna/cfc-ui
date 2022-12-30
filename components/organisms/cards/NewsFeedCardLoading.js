import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Divider,
  Skeleton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import useMediaQuery from "@mui/material/useMediaQuery";

const UseStyles = makeStyles((theme) => ({
  root: {},
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  imageBox: {
    width: "100%",
  },
  commentBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

const NewsFeedCardLoading = () => {
  const classes = UseStyles();
  const matches = useMediaQuery("(max-width:420px)");
  return (
    <Card sx={matches ? { width: "100%" } : { width: "400px" }}>
      {/* tite section */}
      <Box
        className={classes.header}
        sx={{ p: { xs: "20px 10px ", sm: "20px" } }}
      >
        <Box width="100%">
          <Box>
            <Skeleton height={20} width="80%" />
          </Box>
          <Box mt="5px">
            <Skeleton height={15} width="50%" />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Box>
      <Divider orientation="vertical" sx={{ width: "100%", height: "0.5px" }} />
      {/* image section */}

      <Box>
        <Box
          sx={{
            display: "flex",
            p: { xs: "20px 5px 0px 5px", sm: "20px 10px 0px 10px" },
          }}
        >
          <Box className={classes.imageBox}>
            <Skeleton variant="rounded" width="100%" height={220} />
          </Box>
        </Box>
        {/* description section */}
        <Box sx={{ p: { xs: "20px 10px", sm: "20px" } }}>
          <Skeleton height={20} width="80%" />
          <Skeleton height={20} width="50%" />
        </Box>

        <Divider
          orientation="vertical"
          sx={{ width: "100%", height: "0.5px" }}
        />
      </Box>
      {/* react section */}
      <Box
        className={classes.commentBox}
        sx={{ p: { xs: "30px 10px", sm: "30px" } }}
      />
    </Card>
  );
};

export default NewsFeedCardLoading;

NewsFeedCardLoading.propTypes = {};

NewsFeedCardLoading.defaultProps = {};

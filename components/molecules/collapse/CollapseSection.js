import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Collapse, IconButton, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DividerText from "../../atoms/DividerText";

import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  collapeCtrl: {
    display: "flex",
  },
}));

const CollapseSection = ({ label, children }) => {
  const classes = UseStyles();
  const [open, setOpen] = useState(true);
  return (
    <Box className={classes.root}>
      <Box className={classes.collapeCtrl}>
        <DividerText label={label} />
        <Tooltip title={open ? "Close" : "open"}>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <ExpandLessRoundedIcon />
            ) : (
              <ExpandLessRoundedIcon sx={{ transform: "rotate(180deg)" }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Collapse in={open}>
        <Box sx={{ pt: "20px" }}>{children}</Box>
      </Collapse>
    </Box>
  );
};

export default CollapseSection;

CollapseSection.propTypes = {
};

CollapseSection.defaultProps = {};

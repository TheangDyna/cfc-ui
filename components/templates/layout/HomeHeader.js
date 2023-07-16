import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Stack, Button } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 65px)",
    width: "100%",
    backgroundImage: `url('./images/homeHeader/topRight.png'), url('./images/homeHeader/bottomLeft.png')`,
    backgroundPosition: "top right, bottom left",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    padding: "0 20px",
  },
  content: {
    background: "red",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
}));

const HomeHeader = ({}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* <Box sx={{ background: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Box className={classes.content}>
                    <Box sx={{ mb: '20px'}}>
                        <Typography variant='logo'>
                            FCF Alunmi
                        </Typography>
                    </Box>
                    <Box sx={{ mb: '20px'}}>
                        <Typography variant='primary'>
                            Coding and STEM for the Youngters.
                            We aspire to be the highest quality coder and robots school for children.
                        </Typography>
                    </Box>
                    <Box sx={{ mb: '20px'}}>
                        <Button variant='outlined'>
                            Learn More
                        </Button>
                        <Button variant='contained'>
                            Get Start
                        </Button>
                    </Box>
                </Box>
            </Box> */}
      <Box
        back
        sx={{
          width: "716px",
          height: "450px",
          backgroundImage: `url('./images/homeHeader/imageHome.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
    </Box>
  );
};
export default HomeHeader;

HomeHeader.propTypes = {};

HomeHeader.defaultProps = {};

import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Toaster } from "react-hot-toast";

//component
import Navbar from "./Navbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: 65,
  },
}));

const Layout = ({ children, user }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Toaster reverseOrder={true} />
      <Box>
        {router.pathname != "/authentication" && <Navbar user={user} />}
        <Box className={classes.toolbar} />
        <Box>
          {/* {router.pathname == "/home" ? <HomeHeader /> : null} */}
          <Box
            sx={{
              p: {
                xs: "20px 10px",
                sm: "20px 30px",
                md: "20px 50px",
              },
              minHeight: "100vh",
            }}>
            {children}
          </Box>
          {router.pathname != "/authentication" && <Footer />}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;

Layout.propTypes = {};

Layout.defaultProps = {};

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import WrapTextBox from "../../atoms/WrapTextBox";

const UseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 225,
    width: "100%",
    height: 280,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    backgroundImage: `url('/images/card/bgStCardTop.png'), url('/images/card/bgStCardBottom.png')`,
    backgroundPosition: "top , bottom",
    backgroundRepeat: "no-repeat",
    padding: "50px 5px 0 5px",
  },
}));

const StudentCard = ({ profile, firstName, lastName, email, id, studentId }) => {
  const classes = UseStyles();
  const router = useRouter();
  return (
    <Box>
      <Card className={classes.root}>
        <Box className={classes.backgroundImage}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#ffffff",
              borderRadius: "50px",
              border: "2px solid #ff9900",
              mb: "10px",
            }}>
            <Avatar
              src={profile}
              sx={{ width: "90px", height: "90px" }}
            />
          </Box>
          <Box>
            <Typography
              variant="title"
              sx={{
                cursor: "pointer",
                ":hover": { textDecoration: "underline" },
              }}
              onClick={() => {
                router.push(`/student/class/${studentId}/${id}`);
              }}>
              {firstName} {lastName}
            </Typography>
          </Box>
          <Box>
            <WrapTextBox line={1}>
            <Typography variant="secondary">
              {email}
            </Typography>
            </WrapTextBox>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default StudentCard;

StudentCard.propTypes = {};

StudentCard.defaultProps = {};

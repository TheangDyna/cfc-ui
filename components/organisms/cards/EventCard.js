import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Card, IconButton, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Lightbox from "react-image-lightbox";

//icon
import StarRoundedIcon from "@mui/icons-material/StarRounded";

//conponent
import WrapTextBox from "../../atoms/WrapTextBox";
import EventDateBox from "../../molecules/box/EventDateBox";
import MoreButtonEvent from "../../molecules/button/MoreButtonEvent";
import deleteDataFunc from "../../../utils/func/api/deleteDataFunc";
import postDataFunc from "../../../utils/func/api/postDataFunc";
import { BookmarkRounded } from "@mui/icons-material";

const UseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    width: "100%",
  },
  cover: {
    width: "100%",
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  },
  content: {
    width: "100%",
  },
  headerContent: {
    width: "100%",
    display: "flex",
    alignItems: "start",
    flexWrap: "wrap",
  },
  titleBox: {
    flex: 1,
  },
  bottomContent: {
    display: "flex",
    alignItems: "center",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
  },
}));

const EventCard = ({
  userId,
  role,
  id,
  path,
  cover,
  category,
  title,
  month,
  date,
  interested,
  update,
  interesting,
}) => {
  const classes = UseStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [reacted, setReacted] = useState(false);
  const router = useRouter();
  const handleInterest = async () => {
    try {
      reacted
        ? await deleteDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/events/removeInteresting/${id}`
          )
        : await postDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/events/addInteresting/${id}`
          );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (interesting && userId) {
      setReacted(interesting.find((item) => item === userId) === userId);
    }
  }, [userId, interesting]);
  return (
    <Box>
      <Card className={classes.root}>
        <Box className={classes.coverBox}>
          <Box
            className={classes.cover}
            onClick={() => setIsOpen(true)}
            sx={{
              backgroundImage: `url(${cover})`,
            }}
          />
        </Box>
        <Box
          sx={{ p: { xs: "20px 5px 15px 10px", sm: "20px 10px 15px 20px" } }}
          className={classes.content}>
          <Box className={classes.headerContent}>
            <EventDateBox month={month} date={date} />
            <Box
              className={classes.titleBox}
              sx={{
                mr: "10px",
                cursor: "pointer",
                ":hover": { textDecoration: "underline" },
              }}
              onClick={() => {
                router.push(`/event/${id}`);
              }}>
              <WrapTextBox line={2}>
                <Typography variant="title" sx={{}}>
                  {category?.toUpperCase()}
                </Typography>
                <Typography variant="secondary"> • </Typography>
                <Typography variant="primary">{title}</Typography>
              </WrapTextBox>
            </Box>
            {role &&
              (role == "admin" ? (
                <MoreButtonEvent id={id} path={path} update={update} />
              ) : (
                <IconButton>
                  <BookmarkRounded />
                </IconButton>
              ))}
          </Box>
          <Box className={classes.bottomContent}>
            <Box sx={{ flexGrow: 1 }} />
            <Box className={classes.iconBox}>
              <Typography variant="primary" sx={{ mr: "10px" }}>
                {interested}
              </Typography>
              <Tooltip title="Interested">
                <IconButton
                  sx={{
                    mr: { xs: "5px", sm: "10px" },
                    color: reacted ? "#FF9900" : "",
                  }}
                  onClick={() => handleInterest()}>
                  <StarRoundedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Card>
      {isOpen && (
        <Lightbox mainSrc={cover} onCloseRequest={() => setIsOpen(false)} />
      )}
    </Box>
  );
};

export default EventCard;

EventCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  interested: PropTypes.number.isRequired,
};

EventCard.defaultProps = {};

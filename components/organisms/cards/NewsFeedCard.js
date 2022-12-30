import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import CommentBox from "../../molecules/box/CommentBox";
import ReactionSection from "../icon/ReactionSection";
import CommentTextField from "../../molecules/textField/CommentTextFeild";
import useMediaQuery from "@mui/material/useMediaQuery";
import FbImageGrid from "@yalamber/react-fb-image-grid";

// icon
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import MoreButton from "../../molecules/button/MoreButton";
import dayjs from "dayjs";

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

const NewsFeedCard = ({
  id,
  userId,
  title,
  category,
  paths,
  images,
  description,
  date,
  profile,
  name,
  role,
  comments,
  update,
  react,
}) => {
  const classes = UseStyles();
  const matches = useMediaQuery("(max-width:420px)");
  const [open, setOpen] = useState(false);
  return (
    <Card sx={matches ? { width: "100%" } : { width: "400px" }}>
      {/* tite section */}
      <Box
        className={classes.header}
        sx={{ p: { xs: "20px 10px ", sm: "20px" } }}>
        <Box width="100%">
          <Box>
            <Typography variant="title">{category.toUpperCase()}</Typography>
            <Typography variant="secondary"> • </Typography>
            <Typography variant="small">{date}</Typography>
          </Box>
          <Box>
            <Typography variant="primary">{title}</Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          {role == "admin" ? (
            <MoreButton id={id} paths={paths} update={update} />
          ) : (
            <Tooltip title="Add to favorite">
              <IconButton>
                <BookmarkRoundedIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>
      <Divider orientation="vertical" sx={{ width: "100%", height: "0.5px" }} />
      {/* image section */}
      {images == "" ? null : (
        <Box>
          <Box
            sx={{
              display: "flex",
              p: { xs: "20px 5px 0px 5px", sm: "20px 10px 0px 10px" },
            }}>
            <Box className={classes.imageBox}>
              <FbImageGrid images={images} hideOverlay={true} />
            </Box>
          </Box>
          {/* description section */}
          {description ? (
            <Box sx={{ p: { xs: "20px 10px", sm: "20px" } }}>
              <Typography variant="primary">{description}</Typography>
            </Box>
          ) : (
            <Box sx={{ p: { xs: "10px 10px", sm: "10px" } }} />
          )}

          <Divider
            orientation="vertical"
            sx={{ width: "100%", height: "0.5px" }}
          />
        </Box>
      )}
      {/* react section */}
      {!open ? (
        <Box
          className={classes.commentBox}
          sx={{ p: { xs: "20px 10px", sm: "20px" } }}>
          {/* react */}
          <ReactionSection
            userId={userId}
            react={react}
            newsId={id}
            numReact={react.length}
            numComment={comments.length}
            numShare={50}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <Box sx={{ display: "flex", flexGrow: 1 }} />
          {/* date */}
        </Box>
      ) : (
        // icon close comment
        <Box
          className={classes.commentBox}
          sx={{ p: { xs: "5px 10px", sm: "5px 20px" } }}>
          <Box sx={{ display: "flex", flexGrow: 1 }} />
          <Tooltip title="Close">
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}>
              <ExpandLessRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      {/* comment section */}
      <Collapse in={open}>
        {/* comment input */}
        <Box
          sx={
            comments.length > 0
              ? { p: { xs: "0 10px 0px 10px", sm: "0px 20px 0px 20px" } }
              : { p: { xs: "0 10px 20px 10px", sm: "0px 20px 20px 20px" } }
          }>
          <CommentTextField
            name={name}
            profile={profile}
            userId={userId}
            id={id}
          />
        </Box>
        {/* show other comment */}
        {comments.length > 0 && (
          <Box sx={{ p: { xs: "20px 10px", sm: "20px 20px 20px 20px" } }}>
            <Stack direction="column" spacing="5px">
              {comments.map((item, index) => {
                return (
                  <CommentBox
                    key={index}
                    profile={item.userId.profileUrl}
                    name={item.userId.lastName}
                    comment={item.text}
                    date={dayjs(item.date).format("DD MMM YYYY")}
                    newsId={id}
                    commentId={item._id}
                    userIdComment={item.userId._id}
                    userId={userId}
                  />
                );
              })}
            </Stack>
          </Box>
        )}
      </Collapse>
    </Card>
  );
};

export default NewsFeedCard;

NewsFeedCard.propTypes = {
  title: PropTypes.string,
  images: PropTypes.array,
  description: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.array,
};

NewsFeedCard.defaultProps = {};

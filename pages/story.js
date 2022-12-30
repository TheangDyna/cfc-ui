import React, { useState, useEffect } from "react";
import { Box, Button, Dialog, Stack, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import StoryCard from "../components/organisms/cards/StoryCard";
import PostStoryCard from "../components/organisms/cards/PostStoryCard";

import dayjs from "dayjs";
import useSWR from "swr";
import unauthFetch from "../utils/func/api/unauthFetch";
import convertPathToURLs from "../utils/func/convertPathToURLs";
import StoryCardLoading from "../components/organisms/cards/StoryCardLoading";

const UseStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  imgOver: {
    width: "100%",
    height: "100%",
    background: "rgba(102,102,102, 0.5)",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const Story = ({ user }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({ status: false });
  const res = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/stories`, unauthFetch);

  const convertToURL = async (data) => {
    const newData = await convertPathToURLs(data);
    setData([...newData.reverse()]);
  };

  // convert data to url
  useEffect(() => {
    if (res?.data?.data?.length > 0) {
      convertToURL(res.data.data);
    }
  }, [res?.data?.data]);

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (update.status) {
      setOpen(true);
    }
  }, [update.status]);

  useEffect(() => {
    if (!open) {
      setUpdate({ status: false });
    }
  }, [open]);

  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        {user?.role == "admin" && (
          <Box display="flex">
            <Box flex={1} />
            <Button variant="contained" onClick={() => setOpen(true)}>
              Create
            </Button>
          </Box>
        )}
        {loading
          ? [1, 2, 3].map((item, index) => {
              return <StoryCardLoading key={index} />;
            })
          : data.map((item, index) => {
              return (
                <StoryCard
                  role={user?.role}
                  key={index}
                  id={item._id}
                  paths={item.coverName}
                  date={dayjs(item.createdAt).format("DD MMMM YYYY")}
                  category={item.category}
                  title={item.title}
                  coverUrls={item.coverUrls}
                  description={item.description}
                  update={() => setUpdate({ status: true, ...item })}
                />
              );
            })}
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm">
        <PostStoryCard
          user={user}
          update={update}
          setOpen={() => setOpen(false)}
        />
      </Dialog>
    </Box>
  );
};

export default Story;

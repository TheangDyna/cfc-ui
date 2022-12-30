import React, { useEffect, useState } from "react";
import { Box, Dialog, Stack, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";
//component
import NewsFeedCard from "../components/organisms/cards/NewsFeedCard";
import FillterNewsFeed from "../components/templates/section/FillterNewsFeed";

import useSWR from "swr";

import unauthFetch from "../utils/func/api/unauthFetch";
import NewsFeedCardLoading from "../components/organisms/cards/NewsFeedCardLoading";
import PostNewsCard from "../components/organisms/cards/PostNewsCard";
import convertPathToURLsNews from "../utils/func/convertPathToURLsNews";

//data

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const News = ({ user }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState({ status: false });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const res = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/news`, unauthFetch);

  const convertToURL = async (data) => {
    const newData = await convertPathToURLsNews(data);
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
      setUpdate({status: false});
    }
  }, [open]);
  return (
    <Box className={classes.root}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: "0", md: "40px" }}
        alignItems={{ xs: "center", md: "normal" }}>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            pb: "20px",
            pr: { xs: 0, md: "20px", lg: 0 },
          }}>
          <FillterNewsFeed
            user={user}
            setOpen={() => setOpen(true)}
            setUpdate={() => setUpdate({ status: false })}
          />
        </Box>
        <Box flex={1}>
          <Stack
            spacing={"10px"}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {loading
              ? [1, 2, 3].map((item, index) => {
                  return <NewsFeedCardLoading key={index} />;
                })
              : data.map((item, index) => {
                  return (
                    <Box key={index}>
                      <NewsFeedCard
                        id={item._id}
                        userId={user?._id}
                        title={item.title}
                        category={item.category}
                        paths={item.coverName}
                        images={item.coverUrls}
                        description={item.description}
                        date={dayjs(item.createdAt).format("DD MMMM YYYY")}
                        profile={user?.profileUrl}
                        name={user?.lastName}
                        role={user?.role}
                        comments={item.comment}
                        update={() => setUpdate({ status: true, ...item })}
                        react={item.react}
                      />
                    </Box>
                  );
                })}
          </Stack>
        </Box>
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm">
        <PostNewsCard
          user={user}
          update={update}
          setOpen={() => setOpen(false)}
        />
      </Dialog>
    </Box>
  );
};

export default News;

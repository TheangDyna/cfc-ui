import React, { useState, useEffect } from "react";
import { Box, Button, Dialog, Stack, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useSWR from "swr";
import unauthFetch from "../../utils/func/api/unauthFetch";
import dayjs from "dayjs";

const UseStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

// components
import QuestionHomeCard from "../../components/organisms/cards/QuestionHomeCard";
import convertPopulatePathToURLProfile from "../../utils/func/convertPopulatePathToURLProfile";
// data
import PostCommunityCard from "../../components/organisms/cards/PostCommunityCard";
import QuestionHomeCardLaoding from "../../components/organisms/cards/QuestionHomeCardLaoding";

const Community = ({ user }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({ status: false });
  const [loading, setLoading] = useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const res = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/communities`,
    unauthFetch
  );

  const convertToURL = async (data) => {
    const newData = await convertPopulatePathToURLProfile(data);
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
  }, [update]);

  useEffect(() => {
    if (!open) {
      setUpdate({ status: false });
    }
  }, [open]);
  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        <Box display="flex">
          <Box flex={1} />
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
              setUpdate({ status: false });
            }}>
            New Topic
          </Button>
        </Box>
        {loading
          ? [1, 2, 3, 4, 5].map((item, index) => {
              return <QuestionHomeCardLaoding key={index} />;
            })
          : data.map((item, index) => {
              return (
                <Box key={index} sx={{ mr: "10px" }}>
                  <QuestionHomeCard
                    id={item._id}
                    firstName={item.createBy.firstName}
                    lastName={item.createBy.lastName}
                    profile={item.createBy.profileUrl}
                    title={item.title}
                    description={item.description}
                    date={dayjs(item.createAt).format("DD MMMM YYYY")}
                    vote={item.vote.length}
                    answer={item.answer.length}
                  />
                </Box>
              );
            })}
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm">
        <PostCommunityCard closeDialog={setOpen} user={user} update={update} />
      </Dialog>
    </Box>
  );
};

export default Community;

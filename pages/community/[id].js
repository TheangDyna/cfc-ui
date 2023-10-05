import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import QuestionCard from "../../components/organisms/cards/QuestionCard";
import AnswerCard from "../../components/organisms/cards/AnswerCard";
import DividerText from "../../components/atoms/DividerText";
import { useTheme } from "@mui/material/styles";
import useSWR from "swr";
import dayjs from "dayjs";
import convertPopulatePathToURLProfile from "../../utils/func/convertPopulatePathToURLProfile";
import EmptyField from "../../components/molecules/box/EmptyField";
import AnswerCommunityCard from "../../components/organisms/cards/AnswerCommunityCard";
import postDataFunc from "../../utils/func/api/postDataFunc";
import deleteDataFunc from "../../utils/func/api/deleteDataFunc";
import unauthFetcher from "../../utils/func/api/unauthFetch";
import QuestionHomeCardLaoding from "../../components/organisms/cards/QuestionHomeCardLaoding";
import QuestionCardLoading from "../../components/organisms/cards/QuestionCardLoading";
import AnswerCardLoading from "../../components/organisms/cards/AnswerCardLoading";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export const getServerSideProps = (ctx) => {
  const id = ctx.query.id;
  return {
    props: {
      id,
    },
  };
};

const CommunityDetail = ({ user, id }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const res = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/communities/getDetailCommunity/${id}`,
    unauthFetcher
  );

  const convertToURL = async (data) => {
    const newData = await convertPopulatePathToURLProfile([data]);
    setData(...newData);
  };

  const handleAddVote = async () => {
    try {
      await postDataFunc(
        `${process.env.NEXT_PUBLIC_API_URL}/communuties/addVote/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveVote = async () => {
    try {
      await deleteDataFunc(
        `${process.env.NEXT_PUBLIC_API_URL}/communuties/removeVote/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  // convert data to url
  useEffect(() => {
    if (res?.data?.data) {
      convertToURL(res.data.data);
    }
  }, [res?.data?.data]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);
  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        <Box sx={{ display: "flex" }}>
          <Box flex={1} />
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}>
            answer
          </Button>
        </Box>
        {loading ? (
          <QuestionCardLoading />
        ) : (
          <QuestionCard
            firstName={data.createBy.firstName}
            lastName={data.createBy.lastName}
            profile={data.createBy.profileUrl}
            title={data.title}
            description={data.description}
            date={dayjs(data.createAt).format("DD MMMM YYYY")}
            vote={data.vote}
            answer={data.answer.length}
            addVote={() => handleAddVote()}
            removeVote={() => handleRemoveVote()}
            userId={user?._id}
          />
        )}
        <DividerText label={loading ? "" : "Answer"} />
        {loading ? (
          [1, 2, 3].map((item, index) => {
            return <AnswerCardLoading key={index} />;
          })
        ) : data.answer.length > 0 ? (
          data.answer.map((item, index) => {
            return (
              <AnswerCard
                key={index}
                title={data.title}
                answer={item.answer}
                profile={item.userId.profileUrl}
                firstName={item.userId.firstName}
                lastName={item.userId.lastName}
                date={dayjs(data.createAt).format("DD MMM YYYY")}
                vote={item.vote}
                communityId={id}
                id={item._id}
                userId={user?._id}
              />
            );
          })
        ) : (
          <EmptyField item="answer" />
        )}
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm">
        <AnswerCommunityCard closeDialog={setOpen} user={user} id={id} />
      </Dialog>
    </Box>
  );
};

export default CommunityDetail;

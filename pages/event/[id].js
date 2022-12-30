import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import useSWR from "swr";
//icon
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import unauthFetcher from "../../utils/func/api/unauthFetch";
import convertPathToURL from "../../utils/func/convertPathToURL";
import dayjs from "dayjs";
import deleteDataFunc from "../../utils/func/api/deleteDataFunc";
import postDataFunc from "../../utils/func/api/postDataFunc";
import Image from "next/image";

const UseStyles = makeStyles((theme) => ({
  textIcon: {
    fontSize: 20,
    color: "#999999",
    marginRight: "10px",
  },
  textIconBox: {
    display: "flex",
    alignItems: "start",
  },
  bottomContent: {
    display: "flex",
    alignItems: "center",
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

const EventDetail = ({ user, id }) => {
  const classes = UseStyles();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [interested, setInterested] = useState(false);
  const res = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/events/getDetailEvent/${id}`,
    unauthFetcher
  );

  const handleInterest = async () => {
    try {
      interested
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

  const convertToURL = async (data) => {
    const newData = await convertPathToURL([data]);
    setData(...newData);
  };

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

  useEffect(() => {
    if (data?.interesting && user?._id) {
      setInterested(
        data.interesting.find((item) => item === user._id) === user._id
      );
    }
  }, [user?._id, data?.interesting]);
  return (
    <Box className={classes.root}>
      {loading ? (
        <Stack direction={{ xs: "column", md: "row" }} spacing="20px">
          <Box flex={1} sx={{ maxWidth: "500px" }}>
            <Skeleton variant="rounded" width="500px" height="300px" />
          </Box>
          <Box flex={1}>
            <Stack spacing="20px">
              <Box>
                <Skeleton height="20px" width="80%" />
              </Box>
              <Box className={classes.textIconBox}>
                <Skeleton height="20px" width="50%" />
              </Box>
              <Box className={classes.textIconBox}>
                <Skeleton height="20px" width="50%" />
              </Box>
              <Box className={classes.textIconBox}>
                <Skeleton height="20px" width="50%" />
              </Box>
              <Box className={classes.textIconBox}>
                <Skeleton height="20px" width="50%" />
              </Box>
              <Box className={classes.textIconBox}>
                <Skeleton height="20px" width="80%" />
              </Box>
              <Box className={classes.textIconBox}>
                <Skeleton height="20px" width="80%" />
              </Box>
              <Box className={classes.textIconBox}>
                <Skeleton height="20px" width="80%" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <Stack direction={{ xs: "column", md: "row" }} spacing="20px">
          <Box flex={1} sx={{ maxWidth: "500px" }}>
            <img
              src={data.coverUrl}
              width="100%"
              height="auto"
              style={{
                borderRadius: 5,
              }}
              alt="event"
            />
          </Box>
          <Box flex={1}>
            <Stack spacing="20px">
              <Box>
                <Typography variant="title">{data.category}</Typography>
                <Typography variant="secondary"> • </Typography>
                <Typography variant="title">{data.title}</Typography>
              </Box>
              <Box className={classes.bottomContent}>
                {/* <Box sx={{ flexGrow: 1 }} /> */}
                <Box
                  sx={{ mr: { xs: "10px", sm: "20px" } }}
                  className={classes.iconBox}>
                  <Typography
                    variant="secondary"
                    sx={{
                      mr: {
                        xs: "5px",
                        sm: "10px",
                      },
                    }}>
                    {data.interesting.length} Interesting People
                  </Typography>
                  <Tooltip title="Intersted">
                    <IconButton
                      sx={{
                        color: interested ? "#FF9900" : "",
                      }}
                      onClick={() => handleInterest()}>
                      <StarRoundedIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box />
              </Box>
              <Box className={classes.textIconBox}>
                <Tooltip title="start date">
                  <EventRoundedIcon className={classes.textIcon} />
                </Tooltip>
                <Typography variant="secondary">
                  {dayjs(data.startDate).format("ddd, DD MMM YYYY")} at{" "}
                  {dayjs(data.startDate).format("h:mm A")}
                </Typography>
              </Box>
              <Box className={classes.textIconBox}>
                <Tooltip title="end date">
                  <EventAvailableRoundedIcon className={classes.textIcon} />
                </Tooltip>
                <Typography variant="secondary">
                  {dayjs(data.endDate).format("ddd, DD MMM YYYY")} at{" "}
                  {dayjs(data.startDate).format("h:mm A")}
                </Typography>
              </Box>
              <Box className={classes.textIconBox}>
                <Tooltip title="location">
                  <LocationOnRoundedIcon className={classes.textIcon} />
                </Tooltip>
                <Typography variant="secondary">{data.location}</Typography>
              </Box>
              <Box>
                <Typography variant="secondary">{data.description}</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default EventDetail;

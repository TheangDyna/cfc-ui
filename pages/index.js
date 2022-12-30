import React, { useState, useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import TitleBar from "../components/molecules/box/TitleBar";
import NewsFeedHomeCardSection from "../components/templates/section/NewsFeedHomeCardSection";
import EventHomeCardSection from "../components/templates/section/EventHomeCardSection";
import ClassHomeCardSection from "../components/templates/section/ClassHomeCardSection";

// icon
import VerticalSplitRoundedIcon from "@mui/icons-material/VerticalSplitRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import StoryHomeCard from "../components/organisms/cards/StoryHomeCard";
import QuestionHomeCardSection from "../components/templates/section/QuestioneHomeCardSection";

// data
import useSWR from "swr";
import convertPathToURLsNews from "../utils/func/convertPathToURLsNews";
import unauthFetcher from "../utils/func/api/unauthFetch";
import convertPathToURL from "../utils/func/convertPathToURL";
import convertPathToURLs from "../utils/func/convertPathToURLs";
import convertPopulatePathToURLProfile from "../utils/func/convertPopulatePathToURLProfile";
import CarouselSlide from "../components/molecules/slide/Carousel";
import EventCardLoading from "../components/organisms/cards/EventCardLoading";
import StoryCardLoading from "../components/organisms/cards/StoryCardLoading";
import ClassCardLoading from "../components/organisms/cards/ClassCardLoading";
import QuestionHomeCardLaoding from "../components/organisms/cards/QuestionHomeCardLaoding";
import NewsFeedHomeCardLoading from "../components/organisms/cards/NewsFeedHomeCardLoading";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Home = ({ user }) => {
  const classes = UseStyles();

  const [dataNews, setDataNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const res = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/news`, unauthFetcher);

  const convertToURL = async (data) => {
    const newDataNews = await convertPathToURLsNews(data);
    const filterNews = newDataNews.filter(
      (data) => data.coverUrls.length > 0 && data.title
    );
    setDataNews([...filterNews.reverse()]);
  };

  // convert data to url
  useEffect(() => {
    if (res?.data?.data?.length > 0) {
      convertToURL(res.data.data);
    }
  }, [res?.data?.data]);

  useEffect(() => {
    if (dataNews.length > 0) {
      setLoadingNews(false);
    }
  }, [dataNews]);

  const [dataEvent, setDataEvent] = useState([]);
  const [loadingEvent, setLoadingEvent] = useState(true);
  const resEvent = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    unauthFetcher
  );
  const convertToURLEvent = async (data) => {
    const newDataEvent = await convertPathToURL(data);
    setDataEvent([...newDataEvent.reverse()]);
  };

  // convert data to url
  useEffect(() => {
    if (resEvent?.data?.data?.length > 0) {
      convertToURLEvent(resEvent.data.data);
    }
  }, [resEvent?.data?.data]);

  useEffect(() => {
    if (dataEvent.length > 0) {
      setLoadingEvent(false);
    }
  }, [dataEvent]);

  const [loadingStory, setLoadingStory] = useState(true);
  const [dataStory, setDataStory] = useState([]);
  const resStory = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/stories`,
    unauthFetcher
  );

  const convertToURLStory = async (data) => {
    const newDataStory = await convertPathToURLs(data);
    let collectImages = [];
    for (let i = 0; i < newDataStory.length; i++) {
      collectImages.push(...newDataStory[i].coverUrls);
    }
    setDataStory(collectImages);
  };

  // convert data to url
  useEffect(() => {
    if (resStory?.data?.data?.length > 0) {
      convertToURLStory(resStory.data.data);
    }
  }, [resStory?.data?.data]);

  useEffect(() => {
    if (dataStory.length > 0) {
      setLoadingStory(false);
    }
  }, [dataStory]);

  const [dataStudent, setDataStudent] = useState([]);
  const [loadingStudnet, setLoadingStudent] = useState(true);
  const resStudent = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/students`,
    unauthFetcher
  );

  const convertToURLStudent = async (data) => {
    const newDataStudent = await convertPathToURL(data);
    setDataStudent([...newDataStudent.reverse()]);
  };

  // convert data to url
  useEffect(() => {
    if (resStudent?.data?.data?.length > 0) {
      convertToURLStudent(resStudent.data.data);
    }
  }, [resStudent?.data?.data]);

  useEffect(() => {
    if (dataStudent.length > 0) {
      setLoadingStudent(false);
    }
  }, [dataStudent]);

  const [dataCommunity, setDataCommunity] = useState([]);
  const [loadingCommunity, setLoadingCommunity] = useState(true);
  const resCommunity = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/communities`,
    unauthFetcher
  );

  const convertToURLCommunity = async (data) => {
    const newDataCommunity = await convertPopulatePathToURLProfile(data);
    setDataCommunity([...newDataCommunity.reverse()]);
  };

  // convert data to url
  useEffect(() => {
    if (resCommunity?.data?.data?.length > 0) {
      convertToURLCommunity(resCommunity.data.data);
    }
  }, [resCommunity?.data?.data]);
  useEffect(() => {
    if (dataCommunity.length > 0) {
      setLoadingCommunity(false);
    }
  }, [dataCommunity]);
  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        <TitleBar
          icon={<VerticalSplitRoundedIcon />}
          label="Latest News"
          href="news"
        />
        {loadingNews ? (
          <CarouselSlide>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Box key={index} sx={{ mr: "10px", p: "1px" }}>
                  <NewsFeedHomeCardLoading />
                </Box>
              );
            })}
          </CarouselSlide>
        ) : (
          <NewsFeedHomeCardSection data={dataNews} />
        )}
        <TitleBar
          icon={<EventNoteRoundedIcon />}
          label="Upcoming Event"
          href="event"
        />
        {loadingEvent ? (
          <CarouselSlide>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <Box key={index} sx={{ mr: "10px", p: "1px" }}>
                  <EventCardLoading key={index} />
                </Box>
              );
            })}
          </CarouselSlide>
        ) : (
          <EventHomeCardSection data={dataEvent} user={user} />
        )}
        <TitleBar icon={<ImageRoundedIcon />} label="Story" href="story" />
        {loadingStory ? (
          <StoryCardLoading />
        ) : (
          <StoryHomeCard data={dataStory} />
        )}
        <TitleBar
          icon={<PeopleAltRoundedIcon />}
          label="Student & Alumni"
          href="student"
        />
        {loadingStudnet ? (
          <CarouselSlide>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <Box key={index} sx={{ mr: "10px", p: "1px" }}>
                  <ClassCardLoading />
                </Box>
              );
            })}
          </CarouselSlide>
        ) : (
          <ClassHomeCardSection data={dataStudent} />
        )}
        <TitleBar
          icon={<ForumRoundedIcon />}
          label="Community"
          href="community"
        />
        {loadingCommunity ? (
          [1, 2, 3, 4, 5].map((item, index) => {
            return <QuestionHomeCardLaoding key={index} />;
          })
        ) : (
          <QuestionHomeCardSection data={dataCommunity} />
        )}
      </Stack>
    </Box>
  );
};
export default Home;

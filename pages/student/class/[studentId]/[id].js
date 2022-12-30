import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//component
import CollapseSection from "../../../../components/molecules/collapse/CollapseSection";
import InfomationField from "../../../../components/molecules/box/InfomationField";
import InfomationFieldUniversity from "../../../../components/molecules/box/InfomationFieldUniversity";
import InfomationFieldWork from "../../../../components/molecules/box/InfomationFieldWork";

// icon
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

//date
import { stu } from "../../../../utils/constant/student";
import dayjs from "dayjs";
import useSWR from "swr";
import unauthFetcher from "../../../../utils/func/api/unauthFetch";
import convertPathToURLProfile from "../../../../utils/func/convertPathToURLProfile";
import DividerText from "../../../../components/atoms/DividerText";

const UseStyles = makeStyles((theme) => ({
  root: {},
  header: {
    display: "flex",
    flex: 1,
  },
  name: {
    marginLeft: 20,
    display: "flex",
    alignItems: "end",
    flex: 1,
  },
  iconText: {
    color: "#999999",
    marginRight: 20,
  },
  contactSection: {},
}));

export const getServerSideProps = (ctx) => {
  const studentId = ctx.query.studentId;
  const id = ctx.query.id;
  return {
    props: {
      studentId,
      id,
    },
  };
};

const Profile = ({ studentId, id }) => {
  const classes = UseStyles();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const res = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/students/getDetailStudentAlumni/${studentId}/${id}`,
    unauthFetcher
  );
  const convertToURL = async (data) => {
    const newData = await convertPathToURLProfile(data);
    setData(newData);
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

  console.log(data);
  return (
    <Box className={classes.root}>
      {loading ? (
        <Stack spacing="20px" flex={1}>
          <Box className={classes.header}>
            <Skeleton
              variant="rounded"
              sx={{ width: { xs: 100, md: 150 }, height: { xs: 100, md: 150 } }}
            />
            <Box className={classes.name}>
              <Box display="flex" flexDirection="column">
                <Skeleton
                  height={20}
                  sx={{ mb: 1, width: { xs: "100px", md: "120px" } }}
                />
                <Skeleton
                  height={20}
                  sx={{ width: { xs: "40px", md: "60px" } }}
                />
              </Box>
            </Box>
          </Box>
          <DividerText />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "180px", sm: "200px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "160px", sm: "180px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "180px", sm: "200px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "160px", sm: "180px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "180px", sm: "200px" } }}
          />
          <DividerText />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "180px", sm: "200px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "160px", sm: "180px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "180px", sm: "200px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "160px", sm: "180px" } }}
          />
          <Skeleton
            height={20}
            sx={{ mb: 1, width: { xs: "180px", sm: "200px" } }}
          />
          <DividerText />
          <Skeleton height={20} sx={{ mb: 1, width: "80%" }} />
          <Skeleton height={20} sx={{ mb: 1, width: "80%" }} />
          <Skeleton height={20} sx={{ mb: 1, width: "60%" }} />
        </Stack>
      ) : (
        <Stack spacing="20px" flex={1}>
          <Box className={classes.header}>
            {data.profileUrl ? (
              <Box
                sx={{
                  width: { xs: "100px", md: "150px" },
                  height: { xs: "100px", md: "150px" },
                  borderRadius: "5px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url(${data.profileUrl})`,
                }}
              />
            ) : (
              <Box
                sx={{
                  width: { xs: "100px", md: "150px" },
                  height: { xs: "100px", md: "150px" },
                  borderRadius: "5px",
                  background: "#CECECE",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <PersonRoundedIcon
                  sx={{ fontSize: "50px", color: "#FFFFFF" }}
                />
              </Box>
            )}
            <Box className={classes.name}>
              <Box>
                <Box>
                  <Typography variant="title">
                    {data.firstName + " " + data.lastName + "🔥"}
                  </Typography>
                </Box>
                <Box>
                  <Typography color="#ff9900">student</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <DividerText label="Basic Personal Information" />
          <Box>
            <Grid container spacing="10px">
              <InfomationField label="First name" info={data.firstName} />
              <InfomationField label="Last name" info={data.lastName} />
              {data.gender && (
                <InfomationField label="Gender" info={data.gender} />
              )}
              {data.birthdate && (
                <InfomationField
                  label="Date of Birth"
                  info={dayjs(data.birthdate).format("DD MMMM YYYY")}
                />
              )}
              <InfomationField
                label="Generation"
                info={stu.basicInfo.generation}
              />
              {data.homeTown && (
                <InfomationField label="Place of Birth" info={data.homeTown} />
              )}
              {data.currentAddress && (
                <InfomationField
                  label="Current Address"
                  info={data.currentAddress}
                />
              )}
            </Grid>
          </Box>
          {/* <CollapseSection label="Education &#38; Job">
          <Grid container spacing="10px">
            {data.education.primary && (
              <InfomationField
                label="Primary School"
                info={data.education.primary}
              />
            )}
            {data.education.secondary && (
              <InfomationField
                label="Secondary School"
                info={data.education.secondary}
              />
            )}
            {data.education.high && (
              <InfomationField label="High School" info={data.education.high} />
            )}

            {data.education.university.map((item, index) => {
              return (
                <InfomationFieldUniversity
                  key={index}
                  label={item.status}
                  info={item.name}
                  at={item.at}
                  degreeLevel={item.degreeLevel}
                  major={item.major}
                  currentYear={item.currentYear}
                  startYear={item.startYear}
                  endYear={item.endYear}
                />
              );
            })}
            {data.education.work.map((item, index) => {
              return (
                <InfomationFieldWork
                  key={index}
                  label={item.status}
                  info={item.name}
                  at={item.at}
                  position={item.position}
                  duration={item.duration}
                />
              );
            })}
          </Grid>
        </CollapseSection> */}
          {Object.keys(data.contact).length > 0 && (
            <DividerText label="Contact" />
          )}
          <Box
            className={classes.contactSection}
            sx={{ width: { xs: "100%", md: "350px" } }}>
            <Stack spacing="20px">
              {data.contact.email && (
                <Box sx={{ display: "flex" }}>
                  <AlternateEmailRoundedIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {data.contact.email}
                  </Typography>
                </Box>
              )}
              {data.contact.tel == [] && (
                <Box sx={{ display: "flex" }}>
                  <PhoneRoundedIcon className={classes.iconText} />

                  <Box>
                    {data.contact.tel.map((item, index) => {
                      return (
                        <Typography
                          key={index}
                          variant="primary"
                          sx={{ mr: "10px" }}>
                          {item}
                          {index < data.contact.tel.length - 1 && ","}
                        </Typography>
                      );
                    })}
                  </Box>
                </Box>
              )}
              {data.contact.facebook && (
                <Box sx={{ display: "flex" }}>
                  <FacebookIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {data.contact.facebook}
                  </Typography>
                </Box>
              )}
              {data.contact.telegram && (
                <Box sx={{ display: "flex" }}>
                  <TelegramIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {data.contact.telegram}
                  </Typography>
                </Box>
              )}
              {data.contact.linkedin && (
                <Box sx={{ display: "flex" }}>
                  <LinkedInIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {data.contact.linkedin}
                  </Typography>
                </Box>
              )}
              {data.contact.instagram && (
                <Box sx={{ display: "flex" }}>
                  <InstagramIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {data.contact.instagram}
                  </Typography>
                </Box>
              )}
              {data.contact.twitter && (
                <Box sx={{ display: "flex" }}>
                  <TwitterIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {data.contact.twitter}
                  </Typography>
                </Box>
              )}
            </Stack>
          </Box>
          {data.bio && <DividerText label="Bio" />}
          {data.bio && <Typography variant="secondary">{data.bio}</Typography>}
        </Stack>
      )}
    </Box>
  );
};

export default Profile;

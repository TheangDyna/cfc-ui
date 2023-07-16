import React, { useState, useContext } from "react";
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
import CollapseSection from "../../components/molecules/collapse/CollapseSection";
import InfomationField from "../../components/molecules/box/InfomationField";
import InfomationFieldUniversity from "../../components/molecules/box/InfomationFieldUniversity";
import InfomationFieldWork from "../../components/molecules/box/InfomationFieldWork";

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
import { stu } from "../../utils/constant/student";
import dayjs from "dayjs";
import DividerText from "../../components/atoms/DividerText";

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

const Profile = ({ user }) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      {user ? (
        <Stack spacing="20px" flex={1}>
          <Box className={classes.header}>
            {user?.profileUrl ? (
              <Box
                sx={{
                  width: { xs: "100px", md: "150px" },
                  height: { xs: "100px", md: "150px" },
                  borderRadius: "5px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url(${user.profileUrl})`,
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
                    {user.firstName + " " + user.lastName + "🔥"}
                  </Typography>
                </Box>
                <Box>
                  <Typography color="#ff9900">student</Typography>
                </Box>
              </Box>
              <Box flex={1} />
              <Button
                variant="outlined"
                startIcon={<EditRoundedIcon />}
                href="/profile/edit">
                Add
              </Button>
            </Box>
          </Box>
          <DividerText label="Basic Personal Information" />
          <Box>
            <Grid container spacing="10px">
              <InfomationField label="First name" info={user.firstName} />
              <InfomationField label="Last name" info={user.lastName} />
              {user.gender && (
                <InfomationField label="Gender" info={user.gender} />
              )}
              {user.birthdate && (
                <InfomationField
                  label="Date of Birth"
                  info={dayjs(user.birthdate).format("DD MMMM YYYY")}
                />
              )}
              {/* <InfomationField
                label="Generation"
                info={stu.basicInfo.generation}
              /> */}
              {user.homeTown && (
                <InfomationField label="Place of Birth" info={user.homeTown} />
              )}
              {user.currentAddress && (
                <InfomationField
                  label="Current Address"
                  info={user.currentAddress}
                />
              )}
            </Grid>
          </Box>
          {/* <CollapseSection label="Education &#38; Job">
          <Grid container spacing="10px">
            {user.education.primary && (
              <InfomationField
                label="Primary School"
                info={user.education.primary}
              />
            )}
            {user.education.secondary && (
              <InfomationField
                label="Secondary School"
                info={user.education.secondary}
              />
            )}
            {user.education.high && (
              <InfomationField label="High School" info={user.education.high} />
            )}

            {user.education.university.map((item, index) => {
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
            {user.education.work.map((item, index) => {
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
          {/* {Object.keys(data.contact).length > 0 && <DividerText label="Contact" />} */}
          <Box
            className={classes.contactSection}
            sx={{ width: { xs: "100%", md: "350px" } }}>
            <Stack spacing="20px">
              {user.contact.email && (
                <Box sx={{ display: "flex" }}>
                  <AlternateEmailRoundedIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {user.contact.email}
                  </Typography>
                </Box>
              )}
              {user.contact.tel == [] && (
                <Box sx={{ display: "flex" }}>
                  <PhoneRoundedIcon className={classes.iconText} />

                  <Box>
                    {user.contact.tel.map((item, index) => {
                      return (
                        <Typography
                          key={index}
                          variant="primary"
                          sx={{ mr: "10px" }}>
                          {item}
                          {index < user.contact.tel.length - 1 && ","}
                        </Typography>
                      );
                    })}
                  </Box>
                </Box>
              )}
              {user.contact.facebook && (
                <Box sx={{ display: "flex" }}>
                  <FacebookIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {user.contact.facebook}
                  </Typography>
                </Box>
              )}
              {user.contact.telegram && (
                <Box sx={{ display: "flex" }}>
                  <TelegramIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {user.contact.telegram}
                  </Typography>
                </Box>
              )}
              {user.contact.linkedin && (
                <Box sx={{ display: "flex" }}>
                  <LinkedInIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {user.contact.linkedin}
                  </Typography>
                </Box>
              )}
              {user.contact.instagram && (
                <Box sx={{ display: "flex" }}>
                  <InstagramIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {user.contact.instagram}
                  </Typography>
                </Box>
              )}
              {user.contact.twitter && (
                <Box sx={{ display: "flex" }}>
                  <TwitterIcon className={classes.iconText} />
                  <Typography variant="primary">
                    {user.contact.twitter}
                  </Typography>
                </Box>
              )}
            </Stack>
          </Box>
          {user.bio && <DividerText label="Bio" />}
          {user.bio && <Typography variant="secondary">{user.bio}</Typography>}
        </Stack>
      ) : (
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
      )}
    </Box>
  );
};

export default Profile;

import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputBase,
  Menu,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// function
import updateDataFunc from "../../utils/func/api/updateDataFunc";

//component
import CollapseSection from "../../components/molecules/collapse/CollapseSection";

// icon
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

//date
import AddStudy from "../../components/organisms/cards/AddStudy";
import AddWork from "../../components/organisms/cards/addWork";

// functionn
import { uploadProfile } from "../../utils/func/upload";
import DividerText from "../../components/atoms/DividerText";

const UseStyles = makeStyles((theme) => ({
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
  uploadProfile: {
    display: "none",
  },
  bgBtnUl: {
    background: "#FFFFFF",
  },
  textFieldBox: {
    display: "flex",
  },
  label: {
    width: 150,
    minWidth: 150,
  },
  subLabel: {
    width: 130,
    minWidth: 130,
  },
  noBorder: {
    border: "none",
  },
  noPadding: {
    padding: 0,
  },
  iconText: {
    color: "#999999",
    marginRight: 20,
  },
}));

const Edit = ({ user }) => {
  const classes = UseStyles();
  const [file, setFile] = useState(null);
  const [viewFile, setViewFile] = useState(user?.profileUrl);
  const [selectGender, setSelectGender] = useState(
    user?.gender == undefined ? "" : user.gender
  );
  const [birthdate, setBirthDate] = useState(
    user?.birthdate == undefined ? "" : user.birthdate
  );
  const [values, setValues] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    homeTown: user?.homeTown == undefined ? "" : user.homeTown,
    currentAddress:
      user?.currentAddress == undefined ? "" : user.currentAddress,
    primary: user?.education.primary == undefined ? "" : user.education.primary,
    secondary:
      user?.education.secondary == undefined ? "" : user.education.secondary,
    high: user?.education.high == undefined ? "" : user.education.high,
    email: user?.contact.email == undefined ? "" : user.contact.email,
    tel: user?.contact.tel == undefined ? "" : user.contact.tel,
    facebook: user?.contact.facebook == undefined ? "" : user.contact.facebook,
    telegram: user?.contact.telegram == undefined ? "" : user.contact.linkedin,
    linkedin: user?.contact.linkedin == undefined ? "" : user.contact.linkedin,
    instagram:
      user?.contact.instagram == undefined ? "" : user.contact.instagram,
    twitter: user?.contact.twitter == undefined ? "" : user.contact.twitter,
    bio: user?.bio == undefined ? "" : user.bio,
  });
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = (e) => {
    let profile = e.target.files[0];
    if (profile) {
      setFile(profile);
      setViewFile(URL.createObjectURL(profile));
    }
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSave = async () => {
    setIsLoading(true);
    let key;
    if (file) {
      key = await uploadProfile(`userProfile/${user._id}`, file);
    }
    let body = {
      profile: key,
      firstName: values.firstName,
      lastName: values.lastName,
      gender: selectGender,
      birthdate: birthdate,
      currentAddress: values.currentAddress,
      homeTown: values.homeTown,
      bio: values.bio,
      contact: {
        email: values.email,
        tel: ["085 365 150"],
        facebook: values.facebook,
        telegram: values.telegram,
        linkedin: values.linkedin,
        instagram: values.telegram,
        twitter: values.twitter,
      },
    };
    const data = await updateDataFunc(
      `${process.env.NEXT_PUBLIC_API_URL}/users/updateUser`,
      body
    );
    if (data) {
      setIsLoading(false);
      history.back();
    }
  };
  return (
    <Box className={classes.root}>
      {user ? (
        <Stack spacing="20px" flex={1}>
          {viewFile ? (
            <Box sx={{ width: "max-content" }}>
              <input
                accept="image/*"
                className={classes.uploadProfile}
                id="icon-button-file"
                type="file"
                onChange={uploadFile}
              />
              <label htmlFor="icon-button-file">
                <Box
                  sx={{
                    width: { xs: "100px", md: "150px" },
                    height: { xs: "100px", md: "150px" },
                    borderRadius: "5px",
                    display: "flex",
                    background: "#f2f2f2",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: `url(${viewFile})`,
                  }}>
                  <Box
                    sx={{
                      width: { xs: "100px", md: "150px" },
                      height: { xs: "100px", md: "150px" },
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "rgba(0,0,0,0.5)",
                      opacity: 0,
                      "&: hover": {
                        opacity: 1,
                      },
                    }}>
                    <Typography color="#ffffff">chagne file</Typography>
                  </Box>
                </Box>
              </label>
            </Box>
          ) : (
            <Box sx={{ width: "max-content" }}>
              <input
                accept="image/*"
                className={classes.uploadProfile}
                id="icon-button-file"
                type="file"
                onChange={uploadFile}
              />
              <label htmlFor="icon-button-file">
                <Box
                  sx={{
                    width: { xs: "100px", md: "150px" },
                    height: { xs: "100px", md: "150px" },
                    borderRadius: "5px",
                    display: "flex",
                    background: "#CECECE",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}>
                  <PersonRoundedIcon
                    sx={{ fontSize: "50px", color: "#FFFFFF" }}
                  />
                </Box>
              </label>
            </Box>
          )}
          <DividerText label="Basic Personal Information" />
          <Grid container spacing="10px">
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">First name:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("firstName")}
                  value={values.firstName}
                  placeholder="add first name"
                />
              </Box>
            </Grid>
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">Last name:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("lastName")}
                  value={values.lastName}
                  placeholder="add last name"
                />
              </Box>
            </Grid>
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">Gender:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onClick={(e) => setAnchorElUser(e.currentTarget)}
                  value={selectGender}
                  placeholder="add gender"
                />
                <Menu
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}
                  onClick={() => setAnchorElUser(null)}>
                  <MenuItem onClick={() => setSelectGender("Male")}>
                    Male
                  </MenuItem>
                  <MenuItem onClick={() => setSelectGender("Female")}>
                    Female
                  </MenuItem>
                </Menu>
              </Box>
            </Grid>
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">Date of Birth:</Typography>
              </Box>
              <Box flex={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    renderInput={(params) => (
                      <TextField
                        size="small"
                        {...params}
                        fullWidth
                        InputProps={{
                          classes: {
                            notchedOutline: classes.noBorder,
                            input: classes.noPadding,
                          },
                        }}
                        placeholder="add birth date"
                      />
                    )}
                    value={birthdate}
                    inputFormat="DD MMMM YYYY"
                    onChange={(newValue) => {
                      setBirthDate(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">Place of Birth:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("homeTown")}
                  value={values.homeTown}
                  placeholder="add place of birth"
                />
              </Box>
            </Grid>
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">Current Address:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("currentAddress")}
                  value={values.currentAddress}
                  placeholder="add current address"
                />
              </Box>
            </Grid>
          </Grid>
          {/* <CollapseSection label="Education &#38; Job">
          <Grid container spacing="10px">
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">Primary School:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("primary")}
                  value={values.primary}
                  placeholder="add primary school"
                />
              </Box>
            </Grid>
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">Secondary School:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("secondary")}
                  value={values.secondary}
                  placeholder="add secondary school"
                />
              </Box>
            </Grid>
            <Grid className={classes.textFieldBox} item xs={12}>
              <Box className={classes.label}>
                <Typography variant="secondary">High School:</Typography>
              </Box>
              <Box flex={1}>
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("high")}
                  value={values.high}
                  placeholder="add high school"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <AddStudy />
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "end" }} item xs={12}>
              <Button variant="outlined" startIcon={<AddRoundedIcon />}>
                Study
              </Button>
            </Grid>
            <Grid item xs={12}>
              <AddWork />
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "end" }} item xs={12}>
              <Button variant="outlined" startIcon={<AddRoundedIcon />}>
                Work
              </Button>
            </Grid>
          </Grid>
        </CollapseSection> */}
          <DividerText label="Contact" />
          <Box
            className={classes.contactSection}
            sx={{ width: { xs: "100%", md: "350px" } }}>
            <Stack spacing="20px">
              <Box sx={{ display: "flex" }}>
                <AlternateEmailRoundedIcon className={classes.iconText} />
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("email")}
                  value={values.email}
                  placeholder="add email"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <PhoneRoundedIcon className={classes.iconText} />
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("tel")}
                  value={values.tel}
                  placeholder="add phone"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <FacebookIcon className={classes.iconText} />
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("facebook")}
                  value={values.facebook}
                  placeholder="add facebook"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <TelegramIcon className={classes.iconText} />
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("telegram")}
                  value={values.telegram}
                  placeholder="add telegram"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <LinkedInIcon className={classes.iconText} />
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("linkedin")}
                  value={values.linkedin}
                  placeholder="add linkedin"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <InstagramIcon className={classes.iconText} />
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("instagram")}
                  value={values.instagram}
                  placeholder="add instagram"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <TwitterIcon className={classes.iconText} />
                <InputBase
                  fullWidth
                  size="small"
                  onChange={handleChange("twitter")}
                  value={values.twitter}
                  placeholder="add twitter"
                />
              </Box>
            </Stack>
          </Box>
          <DividerText label="Bio" />
          <InputBase
            fullWidth
            multiline
            size="small"
            onChange={handleChange("bio")}
            value={values.bio}
            placeholder="add bio"
          />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={isLoading ? true : false}>
              {isLoading ? "Save..." : " Save"}
            </Button>
          </Box>
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

export default Edit;

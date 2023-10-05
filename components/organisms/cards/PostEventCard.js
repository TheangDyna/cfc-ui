import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  Divider,
  FormHelperText,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";

//icon
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// function
import { upload, uploadUpdate } from "../../../utils/func/upload";
import postDataFunc from "../../../utils/func/api/postDataFunc";
import updateDataFunc from "../../../utils/func/api/updateDataFunc";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  card: {
    boxShadow: "none",
  },
  previewImageBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  action: {
    display: "flex",
    alignItems: "center",
  },
  noBorder: {
    border: "none",
  },
  noPadding: {
    padding: 0,
  },
}));

const PostEventCard = ({ closeDialog, user, update }) => {
  const classes = UseStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [select, setSelect] = useState("");
  const [file, setFile] = useState(null);
  const [viewFile, setViewFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [values, setValues] = useState({
    title: "",
    cover: file,
    description: "",
    location: "",
  });

  const uploadFile = (e) => {
    let cover = e.target.files[0];
    if (cover) {
      setViewFile(URL.createObjectURL(cover));
      setFile(cover);
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let key;
    if (file) {
      if (update.status) {
        key = await uploadUpdate(update.coverName, file);
      } else {
        key = await upload(`event/`, file);
      }
    }
    const category = select;
    const title = values.title;
    const location = values.location;
    const description = values.description;

    let body = {
      createBy: user?._id,
      category,
      title,
      coverName: key,
      startDate,
      endDate,
      location,
      description,
    };
    try {
      update.status
        ? await updateDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/events/${update._id}`,
            body
          )
        : await postDataFunc(`${process.env.NEXT_PUBLIC_API_URL}/events`, body);
    } catch (error) {
      console.log(error);
    }
    closeDialog(false);
    setIsLoading(false);
  };

  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const invalidDate = startDate && endDate && startTime > endTime;

  const disable =
    !isLoading &&
    select &&
    values.title &&
    values.location &&
    values.description &&
    viewFile.length &&
    startDate &&
    endDate &&
    !invalidDate;
  useEffect(() => {
    if (update.status == true) {
      setSelect(update.category);
      setValues({
        title: update.title,
        location: update.location,
        description: update.description,
      });
      setViewFile(update.coverUrl);
      setStartDate(update.startDate);
      setEndDate(update.endDate);
    }
  }, [update]);
  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            p: { xs: "20px 10px ", sm: "20px" },
          }}>
          <Typography variant="primary">
            {update.status ? "Update Event" : "Add Event"}
          </Typography>
          <Box flex={1} />
          <IconButton sx={{ mr: "10px" }} onClick={() => closeDialog(false)}>
            <Tooltip title="close">
              <CloseRoundedIcon />
            </Tooltip>
          </IconButton>
        </Box>
        <Divider
          orientation="vertical"
          sx={{ width: "100%", height: "0.5px" }}
        />
        <Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ p: { xs: "20px 10px", sm: "20px" } }}>
              <Stack spacing="20px">
                <Box>
                  <InputBase
                    fullWidth
                    placeholder="Category"
                    onClick={(e) => setAnchorElUser(e.currentTarget)}
                    value={select}
                    required
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
                    <MenuItem onClick={() => setSelect("Hot")}>Hot</MenuItem>
                    <MenuItem onClick={() => setSelect("Event")}>
                      Event
                    </MenuItem>
                    <MenuItem onClick={() => setSelect("Holiday")}>
                      Holiday
                    </MenuItem>
                    <MenuItem onClick={() => setSelect("Scholarship")}>
                      Scholarship
                    </MenuItem>
                    <MenuItem onClick={() => setSelect("Job")}>Job</MenuItem>
                    <MenuItem onClick={() => setSelect("Tip")}>Tip</MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <InputBase
                    fullWidth
                    multiline
                    placeholder="What's on your mind?"
                    onChange={handleChange("title")}
                    value={values.title}
                    required
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}>
                  <Tooltip
                    title={viewFile.length > 0 ? "Change Photo" : "Add Photo"}>
                    <IconButton
                      component="label"
                      sx={{
                        width: "100%",
                        maxWidth: "300px",
                        height: "200px",
                      }}>
                      <Box
                        sx={
                          viewFile.length > 0
                            ? {
                                width: "100%",
                                height: "100%",
                                borderRadius: "5px",
                                backgroundImage: `url(${viewFile})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }
                            : {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "2px dashed #CECECE",
                              }
                        }>
                        <input
                          onChange={uploadFile}
                          type="file"
                          hidden
                          name="coverFileName"
                          accept="image/*"
                        />
                        {viewFile.length > 0 ? null : (
                          <InsertPhotoRoundedIcon
                            sx={{ fontSize: "100px", color: "#CECECE" }}
                          />
                        )}
                      </Box>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDateTimePicker
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          placeholder="Start Date"
                          {...params}
                          fullWidth
                          InputProps={{
                            classes: {
                              notchedOutline: classes.noBorder,
                              input: classes.noPadding,
                            },
                          }}
                        />
                      )}
                      value={startDate}
                      inputFormat="ddd, DD MMM YYYY hh:mm A"
                      onChange={(newValue) => {
                        setStartDate(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </Box>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDateTimePicker
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          placeholder="End Date"
                          {...params}
                          fullWidth
                          InputProps={{
                            classes: {
                              notchedOutline: classes.noBorder,
                              input: classes.noPadding,
                            },
                          }}
                        />
                      )}
                      value={endDate}
                      inputFormat="ddd, DD MMM YYYY hh:mm A"
                      onChange={(newValue) => {
                        setEndDate(newValue);
                      }}
                    />
                  </LocalizationProvider>
                  {invalidDate && (
                    <FormHelperText error>Invalid End Date</FormHelperText>
                  )}
                </Box>
                <Box>
                  <InputBase
                    fullWidth
                    placeholder="Location"
                    minRows={1}
                    multiline
                    required
                    onChange={handleChange("location")}
                    value={values.location}
                  />
                </Box>
                <Box>
                  <InputBase
                    fullWidth
                    required
                    placeholder="Describe your post"
                    minRows={1}
                    multiline
                    onChange={handleChange("description")}
                    value={values.description}
                  />
                </Box>
              </Stack>
            </Box>
            <Box
              className={classes.action}
              sx={{ p: { xs: "0 10px 20px 10px", sm: "0 20px 20px 20px" } }}>
              <Box flexGrow={1} />
              <Box>
                <Button variant="contained" type="submit" disabled={!disable}>
                  {update.status
                    ? isLoading
                      ? "Update..."
                      : " Update"
                    : isLoading
                    ? "Add..."
                    : " Add"}
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default PostEventCard;

PostEventCard.propTypes = {};

PostEventCard.defaultProps = {};

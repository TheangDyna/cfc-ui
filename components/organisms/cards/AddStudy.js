import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//component

// icon

//data

const UseStyles = makeStyles((theme) => ({
  root: {
    background: "#f2f2f2",
    padding: "10px 0px 10px 20px",
    borderRadius: 5,
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
}));

const AddStudy = () => {
  const classes = UseStyles();
  const [values, setValues] = useState({
    name: "RUPP",
    at: "Pnhom Penh",
    major: "ITE",
    currentYearth: "4th",
  });
  const [selectStatus, setSelectStatus] = useState("Studying");
  const [selectDegree, setSelectDegree] = useState("Bacherlor");
  const [startYear, setStartYear] = useState("2017");
  const [endYear, setEndYear] = useState("2022");
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [anchorElStatus, setAnchorElStatus] = useState(null);
  const [anchorElDegree, setAnchorElDegree] = useState(null);
  return (
    <Box className={classes.root}>
      <Grid container spacing="10px">
      <Grid className={classes.textFieldBox} item xs={12}>
          <Box className={classes.subLabel}>
            <Typography variant="secondary">School&lsquo;s Name:</Typography>
          </Box>
          <Box flex={1}>
            <InputBase
              fullWidth
              size="small"
              onChange={handleChange("name")}
              value={values.name}
            />
          </Box>
        </Grid>
        <Grid className={classes.textFieldBox} item xs={12}>
          <Box className={classes.subLabel}>
            <Typography variant="secondary">Status:</Typography>
          </Box>
          <Box flex={1}>
            <InputBase
              fullWidth
              size="small"
              onClick={(e) => setAnchorElStatus(e.currentTarget)}
              value={selectStatus}
            />
            <Menu
              anchorEl={anchorElStatus}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElStatus)}
              onClose={() => setAnchorElStatus(null)}
              onClick={() => setAnchorElStatus(null)}
            >
              <MenuItem onClick={() => setSelectStatus("Studying")}>
                Studying
              </MenuItem>
              <MenuItem onClick={() => setSelectStatus("Studied")}>
                Studied
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
        <Grid className={classes.textFieldBox} item xs={12}>
          <Box className={classes.subLabel}>
            <Typography variant="secondary">At:</Typography>
          </Box>
          <Box flex={1}>
            <InputBase
              fullWidth
              size="small"
              onChange={handleChange("at")}
              value={values.at}
            />
          </Box>
        </Grid>
        <Grid className={classes.textFieldBox} item xs={12}>
          <Box className={classes.subLabel}>
            <Typography variant="secondary">Degree Level:</Typography>
          </Box>
          <Box flex={1}>
            <InputBase
              fullWidth
              size="small"
              onClick={(e) => setAnchorElDegree(e.currentTarget)}
              value={selectDegree}
            />
            <Menu
              anchorEl={anchorElDegree}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElDegree)}
              onClose={() => setAnchorElDegree(null)}
              onClick={() => setAnchorElDegree(null)}
            >
              <MenuItem onClick={() => setSelectDegree("Bacherlor")}>
                Bacherlor
              </MenuItem>
              <MenuItem onClick={() => setSelectDegree("Master")}>
                Master
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
        <Grid className={classes.textFieldBox} item xs={12}>
          <Box className={classes.subLabel}>
            <Typography variant="secondary">Major:</Typography>
          </Box>
          <Box flex={1}>
            <InputBase
              fullWidth
              size="small"
              onChange={handleChange("major")}
              value={values.major}
            />
          </Box>
        </Grid>
        {selectStatus == "Studying" && (
          <Grid className={classes.textFieldBox} item xs={12}>
            <Box className={classes.subLabel}>
              <Typography variant="secondary">Current Yearth:</Typography>
            </Box>
            <Box flex={1}>
              <InputBase
                fullWidth
                size="small"
                onChange={handleChange("currentYearth")}
                value={values.currentYearth}
              />
            </Box>
          </Grid>
        )}
        <Grid className={classes.textFieldBox} item xs={12}>
          <Box className={classes.subLabel}>
            <Typography variant="secondary">Start Year:</Typography>
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
                  />
                )}
                value={startYear}
                views={["year"]}
                inputFormat="YYYY"
                onChange={(newValue) => {
                  setStartYear(newValue);
                }}
              />
            </LocalizationProvider>
          </Box>
        </Grid>
        {selectStatus == "Studied" && (
          <Grid className={classes.textFieldBox} item xs={12}>
            <Box className={classes.subLabel}>
              <Typography variant="secondary">End Year:</Typography>
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
                    />
                  )}
                  value={endYear}
                  views={["year"]}
                  inputFormat="YYYY"
                  onChange={(newValue) => {
                    setEndYear(newValue);
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AddStudy;

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    width: "100%",
    margin: "0 auto",
  },
}));

const AddNewsFeedForm = ({}) => {
  const classes = UseStyles();
  const [values, setValues] = useState({
    title: "",
    cover: "",
    description: "",
    category: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = values.title;
    const cover = values.cover;
    const description = values.description;
    const category = values.category;

    alert(
      "title: " + title
      +"\n\n\ncover: " + cover
      +"\n\n\ndescription: " + description
      +"\n\n\ncategory: " + category
    );
  };
  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing="20px">
          <Grid item lg={12}>
            <Typography variant="logo">Add News</Typography>
          </Grid>
          <Grid item lg={12}>
            <TextField
              fullWidth
              size="small"
              required
              variant="standard"
              type="text"
              label="Title"
              name="title"
              onChange={handleChange("title")}
              value={values.title}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              fullWidth
              size="small"
              required
              variant="standard"
              type="text"
              label="URL image"
              name="cover"
              onChange={handleChange("cover")}
              value={values.cover}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              fullWidth
              size="small"
              required
              multiline
              variant="standard"
              type="text"
              label="Discription"
              name="description"
              onChange={handleChange("description")}
              value={values.description}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              fullWidth
              size="small"
              required
              select
              variant="standard"
              type="text"
              label="Category"
              name="category"
              onChange={handleChange("category")}
              value={values.category}
            >
              <MenuItem value="hot">Hot</MenuItem>
              <MenuItem value="event">Event</MenuItem>
              <MenuItem value="holiday">Holiday</MenuItem>
              <MenuItem value="scholarship">Scholarship</MenuItem>
              <MenuItem value="job">Job</MenuItem>
              <MenuItem value="tip">Tip</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item lg={12} sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddNewsFeedForm;

AddNewsFeedForm.propTypes = {};

AddNewsFeedForm.defaultProps = {};

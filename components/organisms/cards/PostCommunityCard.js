import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  FormHelperText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const PostCommunityCard = ({ closeDialog, user, update }) => {
  const classes = UseStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [select, setSelect] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    description: "",
  });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const category = select;
    const title = values.title;
    const description = values.description;

    let body = {
      createBy: user._id,
      category,
      title,
      description,
    };

    try {
      update.status
        ? await updateDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/communities/${update._id}`,
            body
          )
        : await postDataFunc(`${process.env.NEXT_PUBLIC_API_URL}/communities`, body);
    } catch (error) {
      console.log(error);
    }
    closeDialog(false);
    setIsLoading(false);
  };

  const disable =
    !isLoading &&
    select &&
    values.title &&
    values.description;

  useEffect(() => {
    if (update.status == true) {
      setSelect(update.category);
      setValues({
        title: update.title,
        description: update.description,
      });
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
            {update.status ? "Update Question" : "Create Question"}
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
                    placeholder="Title"
                    onChange={handleChange("title")}
                    value={values.title}
                    required
                  />
                </Box>
                <Box>
                  <InputBase
                    fullWidth
                    multiline
                    placeholder="Description"
                    required
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
                      : "Update"
                    : isLoading
                    ? "Create..."
                    : "Create"}
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default PostCommunityCard;

PostCommunityCard.propTypes = {};

PostCommunityCard.defaultProps = {};

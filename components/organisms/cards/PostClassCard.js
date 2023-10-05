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

const PostClassCard = ({ closeDialog, user, update }) => {
  const classes = UseStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [select, setSelect] = useState("");
  const [file, setFile] = useState(null);
  const [viewFile, setViewFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClass, setIsClass] = useState(false);
  const [isGeneration, setIsGeneration] = useState(false);
  const [values, setValues] = useState({
    title: "",
    cover: file,
    generation: "",
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
        key = await upload(`class/`, file);
      }
    }
    const category = select;
    const title = values.title;
    const generation = values.generation;

    let body = {
      createBy: user?._id,
      category,
      title,
      coverName: key,
      generation,
    };
    try {
      update.status
        ? await updateDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/students/${update._id}`,
            body
          )
        : await postDataFunc(`${process.env.NEXT_PUBLIC_API_URL}/students`, body);
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
    values.generation &&
    viewFile.length &&
    !isClass &&
    !isGeneration;

  useEffect(() => {
    const validRegex = /^12 [A-Z]$/;
    if (values.title) {
      if (!validRegex.test(values.title)) {
        setIsClass(true);
      } else {
        setIsClass(false);
      }
    } else {
      setIsClass(false);
    }
  }, [values.title]);

  useEffect(() => {
    const validRegex = /^[0-9]{2}$/;
    if (values.generation) {
      if (!validRegex.test(values.generation)) {
        setIsGeneration(true);
      } else {
        setIsGeneration(false);
      }
    } else {
      setIsGeneration(false);
    }
  }, [values.generation]);

  useEffect(() => {
    if (update.status == true) {
      setSelect(update.category);
      setValues({
        title: update.title,
        generation: update.generation,
      });
      setViewFile(update.coverUrl);
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
            {update.status ? "Update Class" : "Add Class"}
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
                    placeholder="School"
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
                    <MenuItem onClick={() => setSelect("Aranh")}>
                      Aranh
                    </MenuItem>
                    <MenuItem onClick={() => setSelect("Bakong")}>
                      Bakong
                    </MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <InputBase
                    fullWidth
                    placeholder="Class"
                    onChange={handleChange("title")}
                    value={values.title}
                    required
                  />
                  {isClass && (
                    <FormHelperText error>example: 12 A</FormHelperText>
                  )}
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
                  <InputBase
                    fullWidth
                    placeholder="Generation"
                    required
                    onChange={handleChange("generation")}
                    value={values.generation}
                  />
                  {isGeneration && (
                    <FormHelperText error>example: 01</FormHelperText>
                  )}
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

export default PostClassCard;

PostClassCard.propTypes = {};

PostClassCard.defaultProps = {};

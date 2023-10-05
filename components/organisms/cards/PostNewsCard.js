import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//icon
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

//component
import PreviewImage from "../image/PreviewImage";

//function
import postDataFunc from "../../../utils/func/api/postDataFunc";
import { uploads } from "../../../utils/func/upload";
import { deletes } from "../../../utils/func/delete";
import updateDataFunc from "../../../utils/func/api/updateDataFunc";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  card: {
    boxShadow: 'none'
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
}));

const PostNewsCard = ({ user, update, setOpen }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [select, setSelect] = useState("");
  const [file, setFile] = useState([]);
  const [coverPath, setCoverPath] = useState([]);
  const [deletePath, setDeletePath] = useState([]);
  const [viewFile, setViewFile] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const uploadSingleFile = (e) => {
    let ImagesViewArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    setViewFile([...viewFile, ...ImagesViewArray]);
    let ImageArray = e.target.files;
    setFile([...file, ...ImageArray]);
  };
  const deleteFile = (e) => {
    const saveViewFile = viewFile.filter((item, index) => index !== e);
    setViewFile(saveViewFile);
    const saveFile = file.filter((item, index) => index !== e);
    setFile(saveFile);
    const savePath = coverPath.filter((item, index) => index !== e);
    setCoverPath(savePath);
    const saveDelete = coverPath.filter((item, index) => index === e);
    setDeletePath([...deletePath, ...saveDelete]);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (deletePath.length > 0) {
      const deleteCover = await deletes(deletePath);
      console.log(deleteCover);
    }

    let key;
    if (file.length > 0) {
      key = await uploads(`news/`, file);
      console.log("upload");
    } else {
      key = [];
    }

    const title = values.title;
    const cover = [...coverPath, ...key];
    const description = values.description;
    const category = select;
    let body = {
      createBy: user?._id,
      category,
      title,
      coverName: cover,
      description,
    };
    try {
      update.status
        ? await updateDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/news/${update._id}`,
            body
          )
        : await postDataFunc(
            `${process.env.NEXT_PUBLIC_API_URL}/createNews`,
            body
          );
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setOpen();
  };
  const disable = !isLoading && select && (values.title || viewFile.length > 0);
  useEffect(() => {
    if (update.status == true) {
      setSelect(update.category);
      setValues({ title: update.title, description: update.description });
      setViewFile(update.coverUrls);
      setCoverPath(update.coverName);
    }
  }, [update]);
  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <Box sx={{ display: "flex", alignItems: 'end', p: { xs: "20px 10px ", sm: "20px" } }}>
          <Typography variant="primary">
            {update.status ? "Update Post" : "Post Something"}
          </Typography>
          <Box flex={1} />
          <IconButton sx={{ mr: "10px" }} onClick={setOpen}>
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
            <Box
              sx={
                viewFile.length > 0
                  ? { p: { xs: "20px 10px 0 20px", sm: "20px 20px 0 20px" } }
                  : { p: { xs: "20px 10px", sm: "20px" } }
              }>
              <Box pb="20px">
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
                  <MenuItem onClick={() => setSelect("Event")}>Event</MenuItem>
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
              <Box sx={viewFile.length > 0 ? { pb: "20px" } : null}>
                <InputBase
                  fullWidth
                  placeholder="What's on your mind?"
                  multiline
                  value={values.title}
                  onChange={handleChange("title")}
                  required={viewFile.length > 0 ? false : true}
                />
              </Box>
              {viewFile.length > 0 && (
                <Box
                  className={classes.previewImageBox}
                  sx={{ justifyContent: "center" }}>
                  {viewFile.map((item, index) => {
                    return (
                      <Box key={index} sx={{ m: "0 20px 20px 0" }}>
                        <PreviewImage
                          index={index}
                          image={item}
                          file={viewFile}
                          onClick={() => deleteFile(index)}
                          deleteMode={deleteMode}
                        />
                      </Box>
                    );
                  })}
                </Box>
              )}
              {viewFile.length > 0 && (
                <Box sx={viewFile.length > 0 && { pb: "20px" }}>
                  <InputBase
                    fullWidth
                    minRows={1}
                    multiline
                    value={values.description}
                    placeholder="Describe your post"
                    onChange={handleChange("description")}
                  />
                </Box>
              )}
            </Box>
            <Box
              className={classes.action}
              sx={{ p: { xs: "0 10px 20px 10px", sm: "0 20px 20px 20px" } }}>
              <Box sx={{ display: "flex" }}>
                <Tooltip title="Remove Photos">
                  {xs ? (
                    <Box>
                      {viewFile.length > 0 &&
                        (deleteMode ? (
                          <IconButton
                            sx={{
                              mr: { xs: "10px", sm: "20px" },
                              color: "#FF4848",
                              backgroundColor: "#FFe6e6",
                            }}
                            onClick={() => setDeleteMode(!deleteMode)}>
                            <DeleteRoundedIcon />
                          </IconButton>
                        ) : (
                          <IconButton
                            sx={{ mr: { xs: "10px", sm: "20px" } }}
                            onClick={() => setDeleteMode(!deleteMode)}>
                            <DeleteRoundedIcon />
                          </IconButton>
                        ))}
                    </Box>
                  ) : (
                    <Box />
                  )}
                </Tooltip>
                <Tooltip title="Add Photos">
                  <IconButton component="label">
                    <input
                      onChange={uploadSingleFile}
                      type="file"
                      hidden
                      name="coverFileName"
                      accept="image/*"
                      multiple
                    />
                    <InsertPhotoRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box flexGrow={1} />
              <Box>
                <Button variant="contained" type="submit" disabled={!disable}>
                  {update.status
                    ? isLoading
                      ? "Update..."
                      : " Update"
                    : isLoading
                    ? "Post..."
                    : " Post"}
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default PostNewsCard;

PostNewsCard.propTypes = {};

PostNewsCard.defaultProps = {};

import toast from "react-hot-toast";
import { Box, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const successToast = (message)=> toast.success(
  (t) => (
    <Box>
      <Typography mr="20px">{message}</Typography>
      <IconButton onClick={() => toast.dismiss(t.id)}>
        <CloseRoundedIcon />
      </IconButton>
    </Box>
  ),
  {
    duration: 10000,
    style: {
      borderRadius: "5px",
      padding: "0 0px 0 15px",
    },
  }
);

const errorToast = (message)=> toast.error(
  (t) => (
    <Box>
      <Typography mr="20px">{message}</Typography>
      <IconButton onClick={() => toast.dismiss(t.id)}>
        <CloseRoundedIcon />
      </IconButton>
    </Box>
  ),
  {
    duration: 10000,
    style: {
      borderRadius: "5px",
      padding: "0 0px 0 15px",
    },
  }
);


export  { successToast, errorToast};

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MoreButtonClass from "../../molecules/button/MoreButtonClass";
import WrapTextBox from "../../atoms/WrapTextBox";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import copyFunc from "../../../utils/func/copy";
import { useRouter } from "next/router";
import Lightbox from "react-image-lightbox";
const UseStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    width: "100%",
  },
  cover: {
    width: "100%",
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer"
  },
  content: {
    width: "100%",
  },
  headerContent: {
    width: "100%",
    textAlign: "center",
  },
}));

const ClassCard = ({
  id,
  path,
  cover,
  title,
  category,
  code,
  generation,
  update,
  role,
}) => {
  const classes = UseStyles();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Card className={classes.root}>
        <Box className={classes.coverBox}>
          <Box
            className={classes.cover}
            onClick={() => setIsOpen(true)}
            sx={{
              backgroundImage: `url(${cover})`,
            }}
          />
        </Box>
        <Box
          display="flex"
          sx={{ p: { xs: "20px 5px 20px 10px", sm: "20px 10px 20px 20px" } }}
          className={classes.content}>
          <Stack spacing="10px" flex={1} mr="10px">
            <Box
              minHeight="50px"
              sx={{
                cursor: "pointer",
                ":hover": { textDecoration: "underline" },
              }}
              onClick={() => {
                router.push(`student/${id}`);
              }}>
              <WrapTextBox line={2}>
                <Typography variant="title">
                  {category == "Aranh"
                    ? "Aranh Sakor CFC"
                    : "Hun Sen Prasat Bakong"}
                  {` - ${generation}`}
                </Typography>
              </WrapTextBox>
            </Box>

            <Typography variant="primary">{title}</Typography>
          </Stack>
          {role == "admin" && (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <MoreButtonClass id={id} path={path} update={update} />
              <Box sx={{ mt: "auto" }}>
                <Tooltip title={`Copy: ${code}`}>
                  <IconButton onClick={() => copyFunc(code)}>
                    <ContentCopyRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          )}
        </Box>
      </Card>
      {isOpen && (
        <Lightbox mainSrc={cover} onCloseRequest={() => setIsOpen(false)} />
      )}
    </Box>
  );
};

export default ClassCard;

ClassCard.propTypes = {};

ClassCard.defaultProps = {};

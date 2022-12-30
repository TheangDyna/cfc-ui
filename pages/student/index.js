import React, { useState, useEffect } from "react";
import { Box, Button, Dialog, Grid, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

// component
import ClassCard from "../../components/organisms/cards/ClassCard";

import useSWR from "swr";
import unauthFetch from "../../utils/func/api/unauthFetch";
import convertPathToURL from "../../utils/func/convertPathToURL";
import PostClassCard from "../../components/organisms/cards/PostClassCard";
import ClassCardLoading from "../../components/organisms/cards/ClassCardLoading";
import JoinClassCard from "../../components/organisms/cards/JoinClassCard";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Student = ({ user }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({ status: false });
  const [loading, setLoading] = useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const res = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/students`,
    unauthFetch
  );

  const convertToURL = async (data) => {
    const newData = await convertPathToURL(data);
    setData([...newData.reverse()]);
  };

  // convert data to url
  useEffect(() => {
    if (res?.data?.data?.length > 0) {
      convertToURL(res.data.data);
    }
  }, [res?.data?.data]);

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (update.status) {
      setOpen(true);
    }
  }, [update]);

  useEffect(() => {
    if (!open) {
      setUpdate({ status: false });
    }
  }, [open]);

  console.log(data);
  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        <Box display="flex">
          <Box flex={1} />
          <Button
            variant="contained"
            onClick={() => {
              setOpen(true);
              setUpdate({ status: false });
            }}>
            {user?.role == "admin"
              ? "Add"
              : user?.role == "user"
              ? "Join"
              : null}
          </Button>
        </Box>
        <Box>
          <Grid container rowSpacing="20px" columnSpacing="10px">
            {loading
              ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                  return (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{ display: "flex", justifyContent: "center" }}>
                      <Box sx={{ maxWidth: "350px", width: "100%" }}>
                        <ClassCardLoading />
                      </Box>
                    </Grid>
                  );
                })
              : data.map((item, index) => {
                  return (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      sx={{ display: "flex", justifyContent: "center" }}>
                      <Box sx={{ maxWidth: "350px", width: "100%" }}>
                        <ClassCard
                          role={user?.role}
                          id={item._id}
                          path={item.coverName}
                          cover={item.coverUrl}
                          title={item.title}
                          category={item.category}
                          code={item.code}
                          generation={item.generation}
                          update={() => setUpdate({ status: true, ...item })}
                        />
                      </Box>
                    </Grid>
                  );
                })}
          </Grid>
        </Box>
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm">
        {user.role == "admin" ? (
          <PostClassCard closeDialog={setOpen} user={user} update={update} />
        ) : (
          <JoinClassCard closeDialog={setOpen} user={user} />
        )}
      </Dialog>
    </Box>
  );
};

export default Student;

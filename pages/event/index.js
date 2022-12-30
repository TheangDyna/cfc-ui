import React, { useState, useEffect } from "react";
import { Box, Button, Dialog, Grid, Stack, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import dayjs from "dayjs";

// component
import EventCard from "../../components/organisms/cards/EventCard";
import PostEventCard from "../../components/organisms/cards/PostEventCard";
import useSWR from "swr";
import unauthFetch from "../../utils/func/api/unauthFetch";

// data
import CollapseSection from "../../components/molecules/collapse/CollapseSection";
import convertPathToURL from "../../utils/func/convertPathToURL";
import EventCardLoading from "../../components/organisms/cards/EventCardLoading";
import DividerText from "../../components/atoms/DividerText";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Event = ({ user }) => {
  const classes = UseStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState({ status: false });
  const [loading, setLoading] = useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const res = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/events`, unauthFetch);

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

  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        {/* <FillterEvent /> */}
        {user?.role == "admin" && (
          <Box display="flex">
            <Box flex={1} />
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
                setUpdate({ status: false });
              }}>
              Add
            </Button>
          </Box>
        )}
        {/* <DividerText label="Upcoming" /> */}
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
                        <EventCardLoading key={index} />
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
                        <EventCard
                          role={user?.role}
                          userId={user?._id}
                          id={item._id}
                          path={item.coverName}
                          cover={item.coverUrl}
                          category={item.category}
                          title={item.title}
                          month={dayjs(item.startDate).format("MMM")}
                          date={dayjs(item.startDate).format("DD")}
                          interested={item.interesting.length}
                          update={() => setUpdate({ status: true, ...item })}
                          interesting={item.interesting}
                        />
                      </Box>
                    </Grid>
                  );
                })}
          </Grid>
      </Stack>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="sm">
        <PostEventCard closeDialog={setOpen} user={user} update={update} />
      </Dialog>
    </Box>
  );
};

export default Event;

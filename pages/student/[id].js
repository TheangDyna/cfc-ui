import React, { useState, useEffect } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

// component
import StudentCard from "../../components/organisms/cards/StudentCard";

// data
import { students } from "../../utils/constant/student";
import useSWR from "swr";
import unauthFetcher from "../../utils/func/api/unauthFetch";
import convertPathToURLProfileStudent from "../../utils/func/convertPathToURLProfileStudent";
import StudentCardLoading from "../../components/organisms/cards/StudentCardLoading";
import EmptyField from "../../components/molecules/box/EmptyField";

const UseStyles = makeStyles((theme) => ({
  root: {},
}));

export const getServerSideProps = (ctx) => {
  const id = ctx.query.id;
  return {
    props: {
      id,
    },
  };
};

let LoadingCard = [];
for (let i = 0; i < 6; i++) {
  LoadingCard.push(i);
}

const ClassDetail = ({ id }) => {
  const classes = UseStyles();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const res = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/students/getDetailStudent/${id}`,
    unauthFetcher
  );

  const convertToURL = async (data) => {
    const newData = await convertPathToURLProfileStudent([data]);
    setData(...newData);
  };

  useEffect(() => {
    if (res?.data?.data?.student?.length > 0) {
      convertToURL(res.data.data);
    } else {
      setData(res?.data?.data);
    }
  }, [res?.data?.data]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);
  return (
    <Box className={classes.root}>
      <Grid container rowSpacing="20px" columnSpacing="10px">
        {loading ? (
          LoadingCard.map((item, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ maxWidth: "225px", width: "100%" }}>
                  <StudentCardLoading />
                </Box>
              </Grid>
            );
          })
        ) : data.student.length > 0 ? (
          data.student.map((item, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ maxWidth: "225px", width: "100%" }}>
                  <StudentCard
                    studentId={id}
                    id={item._id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    profile={item.profileUrl}
                    email={item.email}
                  />
                </Box>
              </Grid>
            );
          })
        ) : (
          <EmptyField item="student" />
        )}
      </Grid>
    </Box>
  );
};

export default ClassDetail;

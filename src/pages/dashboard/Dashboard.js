import React from 'react';
import ChartLoader from "../../components/chartLoader/ChartLoader";
import {Grid} from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container direction={'column'}>
      <Grid mb={2}>
        <ChartLoader />
      </Grid>
      <Grid mb={2}>
        <ChartLoader />
      </Grid>
      <Grid mb={2}>
        <ChartLoader />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
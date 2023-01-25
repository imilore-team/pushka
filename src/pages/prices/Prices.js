import React from 'react';
import {Grid} from "@mui/material";
import PriceExample from "../../components/priceExample/PriceExample";

const Prices = () => {
  return (
    <>
      <Grid pb={3}>
        <PriceExample />
      </Grid>
      <Grid pb={3}>
        <PriceExample />
      </Grid>
      <Grid pb={3}>
        <PriceExample />
      </Grid>
      <Grid pb={3}>
        <PriceExample />
      </Grid>
    </>
  );
};

export default Prices;
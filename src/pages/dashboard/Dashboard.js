import React, {useEffect, useMemo, useState} from 'react';
import ChartLoader from "../../components/chartLoader/ChartLoader";
import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {getDisk} from "../../helpers/api/getDisk";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [disk, setDisk] = useState();
  const [isLoading, setIsLoading] = useState();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getDisk(id)
      .then((disk) => {
        setDisk(disk);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [id])

  const values = useMemo(() => {
    if (!disk?.data) {
      return []
    }

    return Array.from(disk?.data.slice(-1000).map((disk) => {
      return disk.value;
    }))
  }, [disk])

  const categories = useMemo(() => {
    if (!disk?.data) {
      return []
    }

    return Array.from(disk?.data.slice(-1000).map((disk) => {
      return disk.time;
    }))
  }, [disk])

  const colors = useMemo(() => {
    if (!disk?.data) {
      return []
    }

    return Array.from(disk?.data.slice(-1000).map((disk) => {
      if (disk.error) {
        return 'red';
      }

      if (disk.warn) {
        return 'yellow';
      }

      return '#1A73E8';
    }))
  })


  return (
    <Grid container direction={'column'}>
      {disk && !isLoading && <>
        <div style={{ maxWidth: '100%' }}>
          <Chart
            series={[
              {
                data: values
              }
            ]}
            options={{
              fill: {
                colors
              },
              chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: disk?.title,
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories
              }
            }}
            type="line"
            height={400}
          />
        </div>
      </>}
      {isLoading && <>
        <Grid mb={2}>
          <ChartLoader />
        </Grid>
        <Grid mb={2}>
          <ChartLoader />
        </Grid>
        <Grid mb={2}>
          <ChartLoader />
        </Grid>
      </>}
    </Grid>
  );
};

export default Dashboard;
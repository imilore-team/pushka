import React, {useEffect, useMemo, useState} from 'react';
import ChartLoader from "../../components/chartLoader/ChartLoader";
import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {getDisk} from "../../helpers/api/getDisk";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

  const data = useMemo(() => {
    if (!disk?.data) {
      return;
    }

    return {
      labels: [...disk?.data?.map(({ time }) => moment(time, "YYYY-MM-DDTHH:mm:ss").format("DD.MM.YY"))],
      datasets: [
        {
          label: disk.title,
          data: [...disk?.data?.map(({ value }) => Number(value))],
          borderColor: [...disk?.data?.map(({ error, warn }) => {
            if (!error && !warn) {
              return '#36a2eb'
            }

            if (warn) {
              return 'orange'
            }

            if (error) {
              return 'red';
            }
          })],
          backgroundColor: [...disk?.data?.map(({ error, warn }) => {
            if (!error && !warn) {
              return '#36a2eb'
            }

            if (error) {
              return 'red';
            }

            if (warn) {
              return 'orange'
            }
          })],
        }
      ],
    }
  }, [disk]);

  return (
    <Grid container direction={'column'}>
      {disk && !isLoading && <>
        <div style={{ width: '100%', height: '800px'}}>
          <Line data={data} height={'100%'}/>
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
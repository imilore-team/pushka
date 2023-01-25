import React from 'react';
import {Skeleton} from "@mui/material";
import styles from './ChartLoader.module.scss';

const ChartLoader = () => {
  return (
    <div className={styles.main}>
      <Skeleton
        className={styles.header}
        variant={'rectangular'}
      />
      <Skeleton variant={'text'} width={'40%'}/>
      <Skeleton variant={'text'} width={'90%'}/>
      <Skeleton variant={'text'} width={'60%'}/>
      <Skeleton
        className={styles.body}
        variant={'rectangular'}
      />
    </div>
  );
};

export default ChartLoader;
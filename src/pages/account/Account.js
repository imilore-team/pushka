import React from 'react';
import {Grid} from "@mui/material";
import styles from './Account.module.scss';

const Account = () => {
  return (
    <>
      <Grid>
        <h1 className={styles.title}>
          HEY! Example@mail.com
        </h1>
        <p className={styles.text}>
          <strong className={styles.contactUs}>
            Contact us
          </strong>
          to change userinfo
        </p>
      </Grid>
    </>
  );
};

export default Account;
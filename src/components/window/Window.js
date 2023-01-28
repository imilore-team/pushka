import React from 'react';
import styles from './Window.module.scss';
import {Backdrop, Grid, IconButton} from "@mui/material";
import Close from "../../icons/Close";

const Window = ({children, close, isOpen, width, height}) => {
  return (
    <Backdrop sx={{ zIndex: 100000 }} onClose={close} open={isOpen}>
      <div className={styles.main} style={{ width, height }}>
        <Grid
          position={'absolute'}
          right={15}
          top={15}
        >
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </Grid>
        {children}
      </div>
    </Backdrop>
  );
};

export default Window;
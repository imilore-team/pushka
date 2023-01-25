import React from 'react';
import Window from "../window/Window";
import {Button, Grid} from "@mui/material";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import styles from './ContactUs.module.scss'

const ContactUsModal = ({ isOpen, close }) => {
  return (
    <Window isOpen={isOpen} close={close} width={'800px'} height={'440px'}>
      <Grid pb={3}>
        <h1 className={styles.header}>
          Contact us
        </h1>
      </Grid>
      <Grid container pb={2}>
        <Input placeholder={'email'} />
      </Grid>
      <Grid container pb={2}>
        <Textarea placeholder={'describe your problem'}/>
      </Grid>
      <Grid mt={'auto'} pb={2}>
        <Button fullWidth variant={'contained'}>
          Contact us
        </Button>
      </Grid>
    </Window>
  );
};

export default ContactUsModal;
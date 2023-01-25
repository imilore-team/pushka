import React, {useCallback} from 'react';
import {Button, Grid} from "@mui/material";
import styles from './AuthModal.module.scss';
import Input from "../input/Input";
import useLocalStorage from "use-local-storage";
import Window from "../window/Window";

const AuthModal = ({ isOpen, close }) => {
  const [isLogin, setIsLogin] = useLocalStorage("auth-modal-login",false);

  const toggleIsLogin = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);

  return (
    <Window isOpen={isOpen} close={close} width={'330px'} height={'400px'}>
      <>
        {isLogin && <>
          <h1 className={styles.title}>
            Register
          </h1>
          <Grid container pb={3}>
            <Input placeholder={"email"} />
          </Grid>
          <Grid container pb={2}>
            <Input placeholder={"password"} type={'password'} />
          </Grid>
          <Grid container pb={3}>
            <Input placeholder={"confirm password"} type={'password'} />
          </Grid>
          <Grid container>
            <p className={styles.login} onClick={toggleIsLogin}>
              login
            </p>
          </Grid>
          <Grid mt={'auto'} width={'100%'} mb={2}>
            <Button variant={'contained'} fullWidth>
              Register
            </Button>
          </Grid>
        </>}
        {!isLogin && <>
          <h1 className={styles.title}>
            Login
          </h1>
          <Grid container pb={2}>
            <Input placeholder={"email"} />
          </Grid>
          <Grid container pb={2}>
            <Input placeholder={"password"} type={'password'} />
          </Grid>
          <Grid container>
            <p className={styles.login} onClick={toggleIsLogin}>
              register
            </p>
          </Grid>
          <Grid mt={'auto'} width={'100%'} mb={2}>
            <Button variant={'contained'} fullWidth>
              Login
            </Button>
          </Grid>
        </>}
      </>
    </Window>
  );
};

export default AuthModal;
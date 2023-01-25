import React, {useCallback, useState} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Drawer as MuiDrawer} from "@mui/material";
import styles from "./Drawer.module.scss";
import Field from "./components/field/Field";
import AuthModal from "../authModal/AuthModal";
import {Link} from "react-router-dom";
import { routes } from '../../helpers/routes';
import ContactUsModal from "../contactUsModal/ContactUsModal";

const Drawer = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModalOpen(!isAuthModalOpen);
  }, [isAuthModalOpen]);

  const toggleContactUsModalOpen = useCallback(() => {
    setIsContactUsModalOpen(!isContactUsModalOpen);
  }, [isContactUsModalOpen]);

  return (
    <MuiDrawer
      sx={{
        width: '300px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '300px',
          boxSizing: 'border-box',
          background: "#ebebeb"
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Grid2 height={'65px'} justifyContent={'center'} alignItems={'center'}>
        <h1 className={styles.name}>
          Imilore
        </h1>
      </Grid2>
      <Grid2 overflow={'hidden'}>
        <Link to={routes.account}>
          <Field label={'Account'} onClick={toggleAuthModal}/>
        </Link>
        <Link to={routes.prices}>
          <Field label={'Prices'}/>
        </Link>
        <Field
          label={'Dashboard'}
          childFields={[
            {
              label: 'server 1'
            },
            {
              label: 'server 2'
            },
            {
              label: 'server 3'
            },
          ]}
        />
        <Field label={'Contact us'} onClick={toggleContactUsModalOpen}/>
      </Grid2>
      <AuthModal isOpen={isAuthModalOpen} close={toggleAuthModal} />
      <ContactUsModal isOpen={isContactUsModalOpen} close={toggleContactUsModalOpen} />
    </MuiDrawer>
  );
};

export default Drawer;
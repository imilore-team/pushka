import React, {useCallback, useState} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Drawer as MuiDrawer} from "@mui/material";
import styles from "./Drawer.module.scss";
import Field from "./components/field/Field";
import {Link} from "react-router-dom";
import { routes } from '../../helpers/routes';
import {useOpenPopup} from "../../hooks/useOpenPopup";
import {getEnums} from "../../helpers/getParams";

const Drawer = ({ variant, isOpen, close }) => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const openPopup = useOpenPopup();

  const onContactUsClick = useCallback(() => {
    if (close) {
      close();
    }
    openPopup(getEnums.popup.contact);
  }, [isContactUsModalOpen, openPopup, close]);

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
      variant={variant || "permanent"}
      anchor="left"
      open={isOpen}
      ModalProps={{ onBackdropClick: close }}
    >
      <Grid2 height={'65px'} justifyContent={'center'} alignItems={'center'}>
        <h1 className={styles.name} onClick={close}>
          Imilore
        </h1>
      </Grid2>
      <Grid2 overflow={'hidden'}>
        <Link to={routes.account}>
          <Field label={'Account'} onClick={close}/>
        </Link>
        <Link to={routes.prices}>
          <Field label={'Prices'} onClick={close}/>
        </Link>
        <Field
          label={'Dashboard'}
          close={close}
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
        <Field label={'Contact us'} onClick={onContactUsClick}/>
      </Grid2>
    </MuiDrawer>
  );
};

export default Drawer;
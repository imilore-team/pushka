import React, {useCallback, useEffect, useState} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Drawer as MuiDrawer} from "@mui/material";
import styles from "./Drawer.module.scss";
import Field from "./components/field/Field";
import {Link} from "react-router-dom";
import { routes } from '../../helpers/routes';
import {useOpenPopup} from "../../hooks/useOpenPopup";
import {getEnums} from "../../helpers/getParams";
import useLocalStorage from "use-local-storage";
import {getDisks} from "../../helpers/api/getDisks";

const Drawer = ({ variant, isOpen, close }) => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [disks, setDisks] = useLocalStorage("disks-app-drawer", []);
  const openPopup = useOpenPopup();

  const onContactUsClick = useCallback(() => {
    if (close) {
      close();
    }
    openPopup(getEnums.popup.contact);
  }, [isContactUsModalOpen, openPopup, close]);

  useEffect(() => {
    getDisks()
      .then((disks) => {
        const formattedDisks = disks.map((disk) => {
          return {
            id: disk.id,
            label: disk.title
          }
        });

        setDisks(formattedDisks);
      })
  }, []);

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
          childFields={disks}
        />
        <Field label={'Contact us'} onClick={onContactUsClick}/>
      </Grid2>
    </MuiDrawer>
  );
};

export default Drawer;
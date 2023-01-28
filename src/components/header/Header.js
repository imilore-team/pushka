import React, {useCallback, useEffect, useState} from 'react';
import styles from './Header.module.scss';
import {IconButton} from "@mui/material";
import Menu from "../../icons/Menu";
import Drawer from "../drawer/Drawer";

const Header = () => {
  useEffect(() => {
    document.body.style.paddingTop = '70px';

    return () => {
      document.body.style.paddingTop = null;
    }
  }, [])

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleIsDrawerOpen = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <IconButton onClick={toggleIsDrawerOpen}>
          <Menu />
        </IconButton>
        <Drawer isOpen={isDrawerOpen} variant={"temporary"} close={toggleIsDrawerOpen} />
      </div>
      <div className={styles.account}>
        Account
      </div>
    </div>
  );
};

export default Header;
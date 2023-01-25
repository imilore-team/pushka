import React, {useEffect} from 'react';
import styles from './Header.module.scss';

const Header = () => {
  useEffect(() => {
    document.body.style.paddingTop = '70px';

    return () => {
      document.body.style.paddingTop = null;
    }
  }, [])

  return (
    <div className={styles.header}>
      <div className={styles.account}>
        Account
      </div>
    </div>
  );
};

export default Header;
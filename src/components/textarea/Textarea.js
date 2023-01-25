import React from 'react';
import styles from './Textarea.module.scss';

const Textarea = (props) => {
  return (
    <textarea className={styles.main} {...props} />
  );
};

export default Textarea;
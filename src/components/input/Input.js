import React from 'react';
import styles from './input.module.scss';

const Input = ({ value, onChange, placeholder, ...props }) => {
  return (
    <input
      {...props}
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
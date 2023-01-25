import React from 'react';
import styles from "./PriceExample.module.scss";

const PriceExample = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>
        Personal Plan
      </h1>
      <p className={styles.desc}>
        Персональная настройка искусственного интеллекта и его обучение
      </p>
    </div>
  );
};

export default PriceExample;
import React, {useCallback, useState} from 'react';
import styles from './Field.module.scss';
import Arrow from "../../../../icons/Arrow";
import classNames from "classnames";
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import { routes } from "../../../../helpers/routes";

const Field = ({ label, onClick, childFields, close }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handler = useCallback(() => {
    if (onClick) {
      onClick();
      return;
    }

    setIsExpanded(!isExpanded);
  }, [isExpanded, onClick]);

  return (
    <>
      <div
        className={classNames(styles.field, { [styles.expanded]: isExpanded && childFields })}
        onClick={handler}
      >
        <p className={styles.fieldText}>
          { label }
        </p>
        {!!childFields?.length && <div className={styles.icon}>
          <IconButton>
            <Arrow />
          </IconButton>
        </div>}
      </div>
      {isExpanded && childFields?.map(({ label }, index) => (
        <Link to={routes.dashboard}>
          <div className={styles.item} key={index} onClick={close}>
            {label}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Field;
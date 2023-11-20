'use client';

import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Arrow.module.scss';
import AngleLeftIcon from '@assets/icon-angle-left.svg';
import AngleRightIcon from '@assets/icon-angle-right.svg';

export const LeftArrow: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <span className={styles.arrow} {...props}>
      <AngleLeftIcon />
    </span>
  );
};

export const RightArrow: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <span className={styles.arrow} {...props}>
      <AngleRightIcon />
    </span>
  );
};

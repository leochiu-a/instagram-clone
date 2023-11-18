'use client';

import { Children, FC, PropsWithChildren, useCallback, useState } from 'react';

import styles from './Carousel.module.scss';
import AngleLeftIcon from '@assets/icon-angle-left.svg';
import AngleRightIcon from '@assets/icon-angle-right.svg';

export const CarouselItem: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.carousel__item}>{children}</div>;
};

const Carousel: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenCount = Children.count(children);

  const updateIndex = useCallback(
    (newIndex: number) => {
      if (newIndex < 0) {
        newIndex = childrenCount - 1;
      } else if (newIndex >= childrenCount) {
        newIndex = 0;
      }

      setActiveIndex(newIndex);
    },
    [childrenCount],
  );

  const prevSlide = useCallback(() => {
    updateIndex(activeIndex - 1);
  }, [activeIndex, updateIndex]);

  const nextSlide = useCallback(() => {
    updateIndex(activeIndex + 1);
  }, [activeIndex, updateIndex]);

  return (
    <div className={styles.carousel}>
      {activeIndex !== 0 && (
        <button className={styles.carousel__leftButton} onClick={prevSlide}>
          <AngleLeftIcon />
        </button>
      )}
      <div className={styles.carousel__inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {children}
      </div>
      {activeIndex !== childrenCount - 1 && (
        <button className={styles.carousel__rightButton} onClick={nextSlide}>
          <AngleRightIcon />
        </button>
      )}
    </div>
  );
};

export default Carousel;

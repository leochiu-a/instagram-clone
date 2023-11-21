'use client';

import { Children, FC, ReactNode, useCallback, useState } from 'react';

import { LeftArrow, RightArrow } from '@/components/Arrow';

import styles from './Carousel.module.scss';

interface CarouselItemProps {
  children: ReactNode;
}

export const CarouselItem: FC<CarouselItemProps> = ({ children }) => {
  return <div className={styles.carousel__item}>{children}</div>;
};

interface CarouselProps {
  children: ReactNode;
}

const Carousel: FC<CarouselProps> = ({ children }) => {
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
        <button onClick={prevSlide} className={styles.carousel__leftArrow}>
          <LeftArrow />
        </button>
      )}
      <div className={styles.carousel__inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {children}
      </div>
      {activeIndex !== childrenCount - 1 && (
        <button onClick={nextSlide}  className={styles.carousel__rightArrow}>
          <RightArrow />
        </button>
      )}
    </div>
  );
};

export default Carousel;

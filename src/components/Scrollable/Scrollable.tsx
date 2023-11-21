'use client';

import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './Scrollable.module.scss';

enum ScrollDirectionEnum {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

interface ScrollableProps {
  leftArrow: ReactNode;
  rightArrow: ReactNode;
}

/**
 * 可捲動的容器
 */
const Scrollable: FC<PropsWithChildren<ScrollableProps>> = ({ children, leftArrow, rightArrow }) => {
  /** 是否已經向左滾到底 */
  const [isScrollStart, setIsScrollStart] = useState(true);
  /** 是否已經向右滾到底 */
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((direction: ScrollDirectionEnum) => {
    if (ref.current) {
      const clientWidth = ref.current?.clientWidth ?? 0;
      const scrollLeft = ref.current?.scrollLeft ?? 0;

      if (direction === ScrollDirectionEnum.LEFT) {
        ref.current.scrollTo({ left: scrollLeft - clientWidth * 0.7, behavior: 'smooth' });
      } else {
        ref.current.scrollTo({ left: scrollLeft + clientWidth * 0.7, behavior: 'smooth' });
      }
    }
  }, []);

  const checkIsScrollEnd = useCallback(() => {
    const scrollWidth = ref.current?.scrollWidth ?? 0;
    const clientWidth = ref.current?.clientWidth ?? 0;
    const scrollLeft = ref.current?.scrollLeft ?? 0;

    // 向左滾到底就不用顯示箭頭
    setIsScrollStart(scrollLeft === 0);
    // 向右滾到底就不用顯示箭頭
    setIsScrollEnd(Math.floor(scrollWidth - scrollLeft) <= clientWidth);
  }, []);

  useEffect(() => {
    // 初始化箭頭
    checkIsScrollEnd();

    ref.current?.addEventListener('scroll', checkIsScrollEnd);
    window.addEventListener('resize', checkIsScrollEnd);

    return () => {
      window.removeEventListener('resize', checkIsScrollEnd);
    };
  }, [checkIsScrollEnd]);

  return (
    <div className={styles.scrollable}>
      <div ref={ref} className={styles.container}>
        {!isScrollStart && (
          <button className={styles.leftArrow} onClick={() => scrollTo(ScrollDirectionEnum.LEFT)}>
            {leftArrow}
          </button>
        )}
        <div>{children}</div>
        {!isScrollEnd && (
          <button className={styles.rightArrow} onClick={() => scrollTo(ScrollDirectionEnum.RIGHT)}>
            {rightArrow}
          </button>
        )}
      </div>
    </div>
  );
};

export default Scrollable;

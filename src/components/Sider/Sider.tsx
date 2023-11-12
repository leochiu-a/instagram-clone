'use client';

import { NextPage } from 'next';

// import { usePathname } from 'next/navigation';
import styles from './Sider.module.scss';
import BarsRegularIcon from '@assets/icon-bars-regular.svg';
import ExploreRegularIcon from '@assets/icon-explore-regular.svg';
// import ExploreSolidIcon from '@assets/icon-explore-solid.svg';
import HomeRegularIcon from '@assets/icon-home-regular.svg';
// import homeSolidIcon from '@assets/icon-home-solid.svg';
// import InstagramRegularIcon from '@assets/icon-instagram-regular.svg';
import MessengerRegularIcon from '@assets/icon-messenger-regular.svg';
import NewPostRegularIcon from '@assets/icon-new-post-regular.svg';
import NotificationRegularIcon from '@assets/icon-notification-regular.svg';
// import NotificationSolidIcon from '@assets/icon-notification-solid.svg';
import ReelsRegularIcon from '@assets/icon-reels-regular.svg';
// import ReelsSolidIcon from '@assets/icon-reels-solid.svg';
import SearchRegularIcon from '@assets/icon-search-regular.svg';
// import SearchSolidIcon from '@assets/icon-search-solid.svg';
import InstagramLogo from '@assets/instagram-logo.svg';

const Sider: NextPage = () => {
  // const pathname = usePathname();

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <InstagramLogo />
      </div>

      <div className={styles.nav}>
        <div className={styles.navItem}>
          <HomeRegularIcon />
          <span>首頁</span>
        </div>
        <div className={styles.navItem}>
          <SearchRegularIcon />
          <span>搜尋</span>
        </div>
        <div className={styles.navItem}>
          <ExploreRegularIcon />
          <span>探索</span>
        </div>
        <div className={styles.navItem}>
          <ReelsRegularIcon />
          <span>連續短片</span>
        </div>
        <div className={styles.navItem}>
          <MessengerRegularIcon />
          <span>訊息</span>
        </div>
        <div className={styles.navItem}>
          <NotificationRegularIcon />
          <span>通知</span>
        </div>
        <div className={styles.navItem}>
          <NewPostRegularIcon />
          <span>建立</span>
        </div>
        <div className={styles.navItem}>
          <SearchRegularIcon />
          <span>個人檔案</span>
        </div>
      </div>

      <div className={styles.moreButton}>
        <BarsRegularIcon />
        <span>更多</span>
      </div>
    </aside>
  );
};

export default Sider;

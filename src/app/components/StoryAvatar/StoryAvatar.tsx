import { FC } from 'react';
import Image from 'next/image';

import styles from './StoryAvatar.module.scss';

const StoryAvatar: FC = () => {
  return (
    <a href="#">
      <div className={styles.storyAvatar__avatarImgCircle}>
        <div className={styles.storyAvatar__avatarImgCircleInner}>
          <div className={styles.storyAvatar__avatarImgContainer}>
            <Image src="https://i.pravatar.cc/56" width={56} height={56} alt="avatar" />
          </div>
        </div>
      </div>
      <div className={styles.storyAvatar__userName}>name</div>
    </a>
  );
};

export default StoryAvatar;

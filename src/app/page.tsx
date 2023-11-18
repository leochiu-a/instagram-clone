import { NextPage } from 'next';
import Image from 'next/image';

import styles from './page.module.scss';
import BookmarkIcon from '@assets/icon-bookmark-regular.svg';
import EllipsisIcon from '@assets/icon-ellipsis-regular.svg';
import NotificationIcon from '@assets/icon-notification-regular.svg';
import ResponseIcon from '@assets/icon-response-regular.svg';
import ShareIcon from '@assets/icon-share-regular.svg';

const HomePage: NextPage = () => {
  return (
    <div className={styles.mainLayout}>
      <header></header>
      <section className={styles.mainLayout__content}>
        <div className={styles.mainLayout__contentInner}>
          {/* stories */}
          <div className={styles.storiesList}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                {/* avatar */}
                <div className={styles.stories__avatarImgContainer}>
                  <Image src="https://i.pravatar.cc/56" width={56} height={56} alt="avatar" />
                </div>
                <div className={styles.stories__userName}>name</div>
              </div>
            ))}
          </div>

          {/* posts */}
          <div className={styles.posts}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.post}>
                {/* account */}
                <div className={styles.post__accountInfo}>
                  <div className={styles.post__accountAvatar}>
                    <Image src="https://i.pravatar.cc/56?img=37" width={56} height={56} alt="avatar" />
                  </div>
                  <div className={styles.post__accountDetail}>
                    <div className={styles.post__accountName}>a_day_mag</div>
                    <div className={styles.post__separator}>•</div>
                    <div className={styles.post__time}>20小時</div>
                  </div>
                  <div className={styles.post__operationButton}>
                    <EllipsisIcon />
                  </div>
                </div>

                {/* Image */}
                <div>
                  <Image
                    className={styles.post__image}
                    src="https://picsum.photos/640/640"
                    width={470}
                    height={640}
                    alt="image"
                  />
                </div>

                {/* Operation */}
                <div className={styles.operations}>
                  <div className={styles.operations__wrapper}>
                    <div className={styles.operations__item}>
                      <NotificationIcon />
                    </div>
                    <div className={styles.operations__item}>
                      <ResponseIcon />
                    </div>
                    <div className={styles.operations__item}>
                      <ShareIcon />
                    </div>
                  </div>

                  <div className={styles.operations__bookmark}>
                    <BookmarkIcon />
                  </div>
                </div>

                {/* Likes */}
                <div className={styles.likes}>2911個讚</div>

                {/* content */}
                <div className={styles.content}>
                  <span className={styles.content__account}>a_day_mag</span>
                  <span>
                    #ADayQuote #朴寶英 主演的《#精神病房也會迎來清晨》在 Netflix
                    開播後，獲得不少好評，每集的劇情都會介紹一種精神疾病，通過患者與主角的處境，彷彿也看見無助的自己，其中溫暖又真切的共鳴感對白，句句戳中了當代人的心。
                    Editor: Barbra W. __________ 📣 點讚關注 @a_day_mag 讓 A DAY 帶來每一份靈感和美好 ！
                  </span>
                </div>

                {/* comment */}
                <div className={styles.comment}>
                  <div className={styles.comment__loadMore}>查看全部2則留言</div>
                  <div className={styles.comment__inputWrapper}>
                    <input className={styles.comment__input} placeholder="留言......" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.mainLayout__feedSiderContainer}>
          <div className={styles.mainLayout__feedSider}>
            <div className={styles.feedSider__accountWrapper}>
              <div className={styles.feedSider__accountAvatar}>
                <Image src="https://i.pravatar.cc/44" width={44} height={44} alt="avatar" />
              </div>
              <div className={styles.feedSider__userInfo}>
                <div className={styles.feedSider__account}>my_account</div>
                <div className={styles.feedSider__userName}>my name</div>
              </div>
              <div className={styles.feedSider__switchAccount}>切換</div>
            </div>
            <div className={styles.feedSider__suggestion}>
              <div className={styles.feedSider__suggestionText}>為你推薦</div>
              <div className={styles.feedSider__suggestionLink}>查看全部</div>
            </div>
            <div className={styles.feedSider__suggestionAccounts}>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className={styles.feedSider__suggestionAccountItem}>
                  <div className={styles.feedSider__accountWrapper}>
                    <div className={styles.feedSider__accountAvatar}>
                      <Image src="https://i.pravatar.cc/44" width={44} height={44} alt="avatar" />
                    </div>
                    <div className={styles.feedSider__userInfo}>
                      <div className={styles.feedSider__account}>my_account</div>
                      <div className={styles.feedSider__suggestionAccountDetail}>asdfasd + 其他 4 人的追蹤對象</div>
                    </div>
                    <div className={styles.feedSider__switchAccount}>追蹤</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>關於</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>使用說明</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>新聞稿</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>API</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>工作機會</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>隱私</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>使用條款</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>地點</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>語言</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>Meta</span>
              </a>
              <a href="#" className={styles.footer__link}>
                <span className={styles.footer__linkText}>驗證</span>
              </a>

              <div className={styles.footer__copyright}>© 2023INSTAGRAM FROM META</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

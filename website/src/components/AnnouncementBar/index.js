import React from 'react';
import ThemeToggle from '../themeToggle';
import styles from './styles.module.css';

const AnnouncementBar = () => {
  return (
    <div className={styles.announcementBarBackground}>
      <div className="container">
        <div className="row">
          <div className={`col col--8 col--offset-2 ${styles.announcementBarContainer}`}>
            <div className="col-demo">
              <p className={styles.announcementBarContent}>
              Join us Apr 9-10 at  <a className={styles.announcementLink} target="_blank" href="https://jdconf.com/?ocid=biafy25h1_cn_webpage_azuremktg" data-bi-area="AnnouncementBar" data-bi-name="Announcement">Microsoft JDConf 2025</a> | Give us a 🌟 <a className={styles.announcementLink} target="_blank" href="https://github.com/azure/cloud-native" data-bi-area="AnnouncementBar" data-bi-name="Give us a star on GitHub">on GitHub</a>
              </p>
            </div>
          </div>
          <div className={`col col--2 ${styles.announcementBarIconContainer}`}>
            <div className="col-demo">
              <a href="https://github.com/azure/cloud-native" target="_blank" className={styles.icon} aria-label="Visit us on GitHub">
                <svg width="24" height="24" viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill="#FFFFFF">
                  <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/>
                </svg>
              </a>
              <a href="https://azure.github.io/Cloud-Native/60DaysOfIA/rss.xml" target="_blank" className={styles.icon} aria-label="Subscribe to RSS">
                <svg width="24" height="24" viewBox='0 0 333333 333333' xmlns='http://www.w3.org/2000/svg' fill="#f49c4f">
                  <path d='M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-57698 203357c-11551 0-20938 9418-20938 20897 0 11537 9386 20857 20938 20857 11587 0 20967-9320 20967-20857 0-11479-9378-20897-20967-20897zm-20918-61899v30148c19632 0 38081 7677 51977 21585 13883 13868 21548 32406 21548 52114h30276c0-57254-46585-103838-103801-103838v-9zm38-53431v30154c70007 0 126979 57031 126979 127116l30235 3c0-86697-70539-157270-157212-157270l-2-3z'/>
                </svg>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

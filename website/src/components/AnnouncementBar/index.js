import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { MyGlobalContext } from '../../contexts/MyGlobalContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';



export default function AnnouncementBar() {
  return(
    <div className={styles.announcementBarContainer}>
        <div className={styles.announcementBarContent}>Check out the <a className={styles.announcementLink} target="_blank" href="https://developer.microsoft.com/en-us/reactor/series/S-1308/?wt.mc_id=blog_S-1308_webpage_reactor" data-bi-area="AnnouncementBar" data-bi-name="Intelligent Apps on Azure Container Apps">Intelligent Apps on Azure Container Apps</a> series for quick demo bytes | Give us a 🌟 <a className={styles.announcementLink} target="_blank" href="https://github.com/azure/cloud-native" data-bi-area="AnnouncementBar" data-bi-name="Give us a star on GitHub">on GitHub</a></div>
    </div>
  );
}

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { MyGlobalContext } from '../../contexts/MyGlobalContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';



export default function AnnouncementBar() {
  return(
    <div className={styles.announcementBarContainer}>
        <div className={styles.announcementBarContent}>Meet the Azure team at <a className={styles.announcementLink} target="_blank" href="https://aka.ms/aks-day">KubeCon + Azure Day</a> - Give us <a className={styles.announcementLink} target="_blank" href="https://github.com/azure/cloud-native">🌟 on GitHub</a></div>
    </div>
  );
}

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const UHFFooter = () => {
  const footerContent = window.footerHtml;

  return (
    <footer>
        <div dangerouslySetInnerHTML={{ __html: footerContent }} />
    </footer>
  );
};

export default UHFFooter;

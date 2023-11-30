import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const UHFHeader = () => {

  const headerContent = window.headerHtml;
  console.log("header");
  console.log(window.headerHtml);
  return (
    <header>
      <div dangerouslySetInnerHTML={{ __html: headerContent }} />
    </header>
  );
};

export default UHFHeader;

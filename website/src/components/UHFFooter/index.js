import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { MyGlobalContext } from '../../contexts/MyGlobalContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const UHFFooter = () => {
  const { globalState, setIsFooterHtmlProcessed } = useContext(MyGlobalContext) || {};
  let { footerHtml } = globalState || {};

  let displayFooterHtml =null;
  if (ExecutionEnvironment.canUseDOM && footerHtml) {
    displayFooterHtml = footerHtml;
  }

  useEffect(() => {
    setIsFooterHtmlProcessed(true);
  }, [setIsFooterHtmlProcessed]);

  return (
    <footer>
        <div dangerouslySetInnerHTML={{ __html: displayFooterHtml }} />
    </footer>
  );
};

export default UHFFooter;

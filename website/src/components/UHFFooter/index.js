import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { MyGlobalContext } from '../../contexts/MyGlobalContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const UHFFooter = () => {
  const { globalState, setIsFooterHtmlProcessed } = useContext(MyGlobalContext) || {};
  let { footerHtml } = globalState || {};

  if (ExecutionEnvironment.canUseDOM && !footerHtml) {
    let div = document.getElementById("footerHtmlDiv");
    if (div) {
      footerHtml = atob(div.getAttribute("data-html-content"));
    }
  }

  useEffect(() => {
    setIsFooterHtmlProcessed(true);
  }, [setIsFooterHtmlProcessed]);

  return (
    <footer>
        <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </footer>
  );
};

export default UHFFooter;

import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { MyGlobalContext } from '../../contexts/MyGlobalContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const UHFHeader = () => {
  const { globalState, setIsHeaderHtmlProcessed } = useContext(MyGlobalContext) || {};
  let { headerHtml } = globalState || {};

  if (ExecutionEnvironment.canUseDOM && !headerHtml) {
    console.log('uhf header no html');
    let div = document.getElementById("headerHtmlDiv");
    if (div) {
      headerHtml = atob(div.getAttribute("data-html-content"));
      console.log(headerHtml);      
    }
  }

  useEffect(() => {
    setIsHeaderHtmlProcessed(true); // Signal that processing is complete
  }, [setIsHeaderHtmlProcessed]);

  return (
    <header>
      <div dangerouslySetInnerHTML={{ __html: headerHtml }} />
    </header>
  );
};

export default UHFHeader;

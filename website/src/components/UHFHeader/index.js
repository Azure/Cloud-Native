import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { MyGlobalContext } from '../../contexts/MyGlobalContext';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const UHFHeader = () => {
  const { globalState, setIsHeaderHtmlProcessed } = useContext(MyGlobalContext) || {};
  let { headerHtml } = globalState || {};

  //console.log('in UHFHeader');

  let displayHeaderHtml =null;
  if (ExecutionEnvironment.canUseDOM && headerHtml) {
    displayHeaderHtml = headerHtml;
  }
  
  //console.log('set HTML in UHFHeader');

  useEffect(() => {
    setIsHeaderHtmlProcessed(true);
    //console.log('set setIsHeaderHtmlProcessed in UHFHeader to true');
  }, [setIsHeaderHtmlProcessed]);

  return (
    <header>
      <div dangerouslySetInnerHTML={{ __html: displayHeaderHtml }} />
    </header>
  );
};

export default UHFHeader;

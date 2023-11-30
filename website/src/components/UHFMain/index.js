// src/components/UHFMain.js
import React, { useEffect, useState } from 'react';
//import parseString from 'xml2js';
import UHFHeader from '../UHFHeader';
import UHFFooter from '../UHFFooter';

const UHFMain = () => {
  const [footerHtml, setFooterHtml] = useState('');
  const [headerHtml, setHeaderHtml] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('https://uhf.microsoft.com/en-us/shell/xml/MSNativeMaturity/?headerId=MSNativeMaturityHeader&footerId=MSNativeMaturityFooter&CookieComplianceEnabled=true%22');
        let content = await response.text();
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(content, "text/xml");
        let cssIncludes = xmlDoc.getElementsByTagName('cssIncludes')[0].textContent;

        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = cssIncludes;

        Array.from(tempDiv.childNodes).forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
              document.getElementsByTagName('head')[0].appendChild(node);
          }
        });

        let javascriptIncludes = xmlDoc.getElementsByTagName('javascriptIncludes')[0].textContent;

        tempDiv = document.createElement('div');
        tempDiv.innerHTML = javascriptIncludes;

        Array.from(tempDiv.childNodes).forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
              document.getElementsByTagName('head')[0].appendChild(node);
          }
        });

        // setFooterHtml(xmlDoc.getElementsByTagName('footerHtml')[0].textContent);
        // setHeaderHtml(xmlDoc.getElementsByTagName('headerHtml')[0].textContent);    
        window.footerHtml = xmlDoc.getElementsByTagName('footerHtml')[0].textContent;
        window.headerHtml = xmlDoc.getElementsByTagName('headerHtml')[0].textContent;
      } catch (error) {
        console.error('Error fetching XML:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* <UHFHeader headerHtml={headerHtml} />
      <UHFFooter footerHtml={footerHtml} /> */}
    </div>
  );
};

export default UHFMain;

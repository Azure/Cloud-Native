import React, { createContext, useState, useEffect } from 'react';
import xml2js from 'xml2js';

export const MyGlobalContext = createContext();

export const MyGlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});
  const [isHeaderHtmlProcessed, setIsHeaderHtmlProcessed] = useState(false);
  const [isFooterHtmlProcessed, setIsFooterHtmlProcessed] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      try {
        let div = document.getElementById("footerHtmlDiv");
        if (div) {
          return;
        }
      
        const request = new XMLHttpRequest();
        request.open('GET', 'https://uhf.microsoft.com/en-us/shell/xml/MSNativeMaturity/?headerId=MSNativeMaturityHeader&footerId=MSNativeMaturityFooter&CookieComplianceEnabled=true%22', false);
        request.send(null);

        var parser = new xml2js.Parser();
        parser.parseString(request.responseText, function(err,result) {
          let cssIncludes = result.shell.cssIncludes[0];
          let javascriptIncludes = result.shell.javascriptIncludes[0];
          let footerHtml = result.shell.footerHtml[0];
          let headerHtml = result.shell.headerHtml[0].replace(/(^\s+|\s+)$/gm, "").replace(/(\n|\r)/gm, "");

          let tempDiv = document.createElement('div');
          tempDiv.innerHTML = cssIncludes;
    
          Array.from(tempDiv.childNodes).forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                document.getElementsByTagName('head')[0].appendChild(node);
            }
          });
    
          let storageDiv = document.createElement('div');
          storageDiv.id = 'footerHtmlDiv';
          storageDiv.setAttribute('data-html-content', btoa(footerHtml));
          storageDiv.style.display = 'none';
          document.body.appendChild(storageDiv);

          // Search has not been working. Just remove for now.
          let $headerHtmlObj = $(headerHtml);
          $headerHtmlObj.find('#search').remove();
          headerHtml = $headerHtmlObj.html();

          storageDiv = document.createElement('div');
          storageDiv.id = 'headerHtmlDiv';
          storageDiv.setAttribute('data-html-content', btoa(headerHtml));
          storageDiv.style.display = 'none';
          document.body.appendChild(storageDiv);

          storageDiv = document.createElement('div');
          storageDiv.id = 'javascriptHtmlDiv';
          storageDiv.setAttribute('data-html-content', btoa(javascriptIncludes));
          storageDiv.style.display = 'none';
          document.body.appendChild(storageDiv);

          setGlobalState(prevState => ({
            ...prevState,
            footerHtml: footerHtml,
            headerHtml: headerHtml
          }));
        });
      } catch (error) {
        setGlobalState(prevState => ({
          ...prevState,
          error: 'An error occurred while fetching data'
        }));
      }
    };

    fetchData();
  }, []);

  // The idea was to insert JS last but it didn't seem to matter so far.
  useEffect(() => {
    // Insert JavaScript into the head only after header and footer HTML are processed
    if (isHeaderHtmlProcessed && isFooterHtmlProcessed) {
      let div = document.getElementById("javascriptHtmlDiv");
      if (!div) {
        return;
      }

      // Don't keep adding UHF javascript on page navigation.
      if (div.getAttribute('ranonce') === 'true') {
        return;
      }

      div.setAttribute('ranonce', 'true');

      let javascriptIncludes = atob(div.getAttribute("data-html-content"));

      let tempDiv = document.createElement('div');
      tempDiv.innerHTML = javascriptIncludes;

      Array.from(tempDiv.childNodes).forEach(function(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          document.getElementsByTagName('head')[0].appendChild(node);
        }
      });
    }
  }, [isHeaderHtmlProcessed, isFooterHtmlProcessed]);

  return (
    <MyGlobalContext.Provider value={{ globalState, setGlobalState, setIsHeaderHtmlProcessed, setIsFooterHtmlProcessed }}>
      {children}
    </MyGlobalContext.Provider>
  );
};

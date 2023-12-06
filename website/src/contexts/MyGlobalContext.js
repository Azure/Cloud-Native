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

        console.log("in fetchData()");
        let div = document.getElementById("footerHtmlDiv");
        if (div) {
          console.log("fetchData return");
          return;
        }
      
        const request = new XMLHttpRequest();
        request.open('GET', 'https://uhf.microsoft.com/en-us/shell/xml/MSNativeMaturity/?headerId=MSNativeMaturityHeader&footerId=MSNativeMaturityFooter&CookieComplianceEnabled=true%22', false);
        request.send(null);

        var parser = new xml2js.Parser();
        parser.parseString(request.responseText, function(err,result){
          let cssIncludes = result.shell.cssIncludes[0];
          let javascriptIncludes = result.shell.javascriptIncludes[0]; // xmlDoc.getElementsByTagName('javascriptIncludes')[0].textContent
          let footerHtml = result.shell.footerHtml[0]; // xmlDoc.getElementsByTagName('footerHtml')[0].textContent
          let headerHtml = result.shell.headerHtml[0].replace(/(^\s+|\s+)$/gm, "").replace(/(\n|\r)/gm, ""); // xmlDoc.getElementsByTagName('headerHtml')[0].textContent
          console.log("headerHtml", headerHtml);

          // let parser = new DOMParser();
          // let xmlDoc = parser.parseFromString(request.responseText, "text/xml");
          //let cssIncludes = xmlDoc.getElementsByTagName('cssIncludes')[0].textContent;
    
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
            footerHtml: footerHtml, // xmlDoc.getElementsByTagName('footerHtml')[0].textContent,
            headerHtml: headerHtml //xmlDoc.getElementsByTagName('headerHtml')[0].textContent
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

  useEffect(() => {
    console.log("global use effect.");
    // Insert JavaScript into the head only after header and footer HTML are processed
    if (isHeaderHtmlProcessed && isFooterHtmlProcessed) {
      console.log("now add header.");
      //debugger;
      let div = document.getElementById("javascriptHtmlDiv");
      if (!div) {
        return;
      }

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
      console.log("end add header.");
    }
  }, [isHeaderHtmlProcessed, isFooterHtmlProcessed]);

  return (
    <MyGlobalContext.Provider value={{ globalState, setGlobalState, setIsHeaderHtmlProcessed, setIsFooterHtmlProcessed }}>
      {children}
    </MyGlobalContext.Provider>
  );
};

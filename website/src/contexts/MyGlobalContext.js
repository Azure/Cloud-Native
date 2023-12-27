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
        request.open('GET', 'https://uhf.microsoft.com/en-us/shell/xml/MSNativeMaturity?headerId=MSNativeMaturityHeader&footerId=MSNativeMaturityFooter&CookieComplianceEnabled=true', false);
        request.send(null);

        var parser = new xml2js.Parser();
        parser.parseString(request.responseText, function(err,result) {

          let cssIncludes = result.shell.cssIncludes[0];
          let headerHtml = result.shell.headerHtml[0].replace(/(^\s+|\s+)$/gm, "").replace(/(\n|\r)/gm, "");
          let footerHtml = result.shell.footerHtml[0];
          let javascriptIncludes = result.shell.javascriptIncludes[0];
          let javascriptBlock;

          // Add CSS Includes into head.
          let tempDiv = document.createElement('div');
          tempDiv.innerHTML = cssIncludes;
          Array.from(tempDiv.childNodes).forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                document.getElementsByTagName('head')[0].appendChild(node);
            }
          });

          // Add header html in div data.
          let storageDiv = document.createElement('div');
          storageDiv.id = 'headerHtmlDiv';
          storageDiv.setAttribute('data-html-content', btoa(headerHtml));
          storageDiv.style.display = 'none';
          document.body.appendChild(storageDiv);
          
          // Copy script block from footer html.
          let scriptRegex = /<script(?:\s+id="uhf-footer-ccpa")?.*?>([\s\S]*?)<\/script>/;
          let match = footerHtml.match(scriptRegex);
          if (match) {
            javascriptBlock = match[1];
          }

          // Remove useless script block from footer html.
          scriptRegex = /(<script(?:\s+id="uhf-footer-ccpa")?.*?>[\s\S]*?<\/script>)/;
          match = footerHtml.match(scriptRegex);
          if (match) {
            footerHtml = footerHtml.replace(scriptRegex, '');
          }

          // Add footer html in div data.
          storageDiv = document.createElement('div');
          storageDiv.id = 'footerHtmlDiv';
          storageDiv.setAttribute('data-html-content', btoa(footerHtml));
          storageDiv.style.display = 'none';
          document.body.appendChild(storageDiv);

          // Add javascript includes in div data.
          storageDiv = document.createElement('div');
          storageDiv.id = 'javascriptIncludesDiv';
          storageDiv.setAttribute('data-html-content', btoa(javascriptIncludes));
          storageDiv.style.display = 'none';
          document.body.appendChild(storageDiv);

          // Add javascript block to end of body. Did not need to add this block on every page navigation.
          let scriptElement = document.createElement('script');
          scriptElement.innerHTML = javascriptBlock;
          document.body.appendChild(scriptElement);

          setGlobalState(prevState => ({
            ...prevState,
            headerHtml: headerHtml,
            footerHtml: footerHtml
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
    if (isHeaderHtmlProcessed && isFooterHtmlProcessed) {

      // Add JS Includes as script elements into body. InnerHTML method was causing JS to not work. 
      // Must be added for every page navigation for JS to work (possible due to JQuery dependencies?).

      // Process JS Includes.
      let scriptIncludesDiv = document.getElementById("javascriptIncludesDiv");
      if (!scriptIncludesDiv) {
        return;
      }

      let scriptIncludes = atob(scriptIncludesDiv.getAttribute("data-html-content"));
      let scriptRegex = /<script.*?src=['"](.*?)['"].*?<\/script>/g;
      let scriptReferences = [];
      let match;
      while ((match = scriptRegex.exec(scriptIncludes)) !== null) {
        scriptReferences.push(match[1]);
      }

      const scriptElements = [];
      scriptReferences.forEach(function (src) {
        let scriptElement = document.createElement('script');
        scriptElement.src = src;
        scriptElements.push(scriptElement);
        document.body.appendChild(scriptElement);
      });

      return () => {
        // Remove script elements when component is unmounted to prevent duplicate script insertions.
        scriptElements.forEach(function (scriptElement) {
          document.body.removeChild(scriptElement);
        });
      }
    }
  }, [isHeaderHtmlProcessed, isFooterHtmlProcessed]);
  
  return (
    <MyGlobalContext.Provider value={{ globalState, setGlobalState, setIsHeaderHtmlProcessed, setIsFooterHtmlProcessed }}>
      {children}
    </MyGlobalContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from 'react';
import xml2js from 'xml2js';

export const MyGlobalContext = createContext();

export const MyGlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});
  const [fetchedData, setFetchedData] = useState(null);
  const [cssLoaded, setCssLoaded] = useState(false);
  const [isHeaderHtmlProcessed, setIsHeaderHtmlProcessed] = useState(false);
  const [isFooterHtmlProcessed, setIsFooterHtmlProcessed] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      try {
        if (fetchedData) {
          // If data has already been fetched, no need to fetch again.
          //console.log('MyGlobalContext|fetchData: alreaded fetched uhf data, return.');
          return;
        }

        //console.log('MyGlobalContext|fetchData: fetch uhf data.');

        const request = new XMLHttpRequest();
        request.open('GET', 'https://uhf.microsoft.com/en-us/shell/xml/AZCloudNative?headerId=AZCloudNativeHeader&footerId=AZCloudNativeFooter&CookieComplianceEnabled=true', false);
        request.send(null);

        const parser = new xml2js.Parser();
        parser.parseString(request.responseText, function(err, result) {
          let cssIncludes = result.shell.cssIncludes[0];
          let headerHtml = result.shell.headerHtml[0].replace(/(^\s+|\s+)$/gm, "").replace(/(\n|\r)/gm, "");
          let footerHtml = result.shell.footerHtml[0];
          let javascriptIncludes = result.shell.javascriptIncludes[0];
          let javascriptBlock = '';

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

          //console.log('MyGlobalContext|fetchData: set fetched data component state.');

          // Set the fetched data in component state.
          setFetchedData({
            cssIncludes,
            headerHtml,
            footerHtml,
            javascriptIncludes,
            javascriptBlock
          });
        });
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
        setGlobalState(prevState => ({
          ...prevState,
          error: 'An error occurred while fetching data'
        }));
      }
    };

    fetchData();
  }, []); // useEffect will run only once when the component mounts

  useEffect(() => {

    //console.log('MyGlobalContext|cssLoaded: fetchedData=' + (fetchedData != null) + '; cssLoaded=' + cssLoaded);

    if (fetchedData && !cssLoaded) {

      //console.log('MyGlobalContext|cssLoaded: check head for css files.');

      // Add CSS Includes to the end of HTML head element.
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = fetchedData.cssIncludes;
      const cssNodes = Array.from(tempDiv.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);

      let isCssInHtml = false;
      cssNodes.forEach(cssNode => {
        let href = cssNode.getAttribute('href');
        let cssLink = document.querySelector(`link[href*="${href}"]`);
        if (cssLink) {
          //document.head.removeChild(cssLink);
          isCssInHtml = true; 
          //console.log('MyGlobalContext|cssLoaded: css already exists, remove or skip?.');
        }
      })

      if (isCssInHtml) {

        //console.log('MyGlobalContext|cssLoaded: all css files have already been loaded.');

        // All CSS files have been loaded.
        setCssLoaded(true); // Mark CSS as loaded.

        // Set headerHtml and footerHtml in global state.
        setGlobalState(prevState => ({
          ...prevState,
          headerHtml: fetchedData.headerHtml,
          footerHtml: fetchedData.footerHtml
        }));

        return;
      }

      //console.log('MyGlobalContext|cssLoaded: add css files to head.');

      let loadedCount = 0;
      cssNodes.forEach(cssNode => {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = cssNode.getAttribute('href');
        cssLink.onload = () => {
          loadedCount++;
          if (loadedCount === cssNodes.length) {

            //console.log('MyGlobalContext|cssLoaded: all css files have been loaded.');

            // All CSS files have been loaded.
            setCssLoaded(true); // Mark CSS as loaded.

            // Add header html in div data. Prevents redraw of header on page change.
            let storageDiv = document.createElement('div');
            storageDiv.id = 'headerHtmlDiv';
            storageDiv.setAttribute('data-html-content', btoa(fetchedData.headerHtml));
            storageDiv.style.display = 'none';
            document.body.appendChild(storageDiv);

            // Add footer html in div data. Prevents redraw of footer on page change.
            storageDiv = document.createElement('div');
            storageDiv.id = 'footerHtmlDiv';
            storageDiv.setAttribute('data-html-content', btoa(fetchedData.footerHtml));
            storageDiv.style.display = 'none';
            document.body.appendChild(storageDiv);

            // Set headerHtml and footerHtml in global state.
            setGlobalState(prevState => ({
              ...prevState,
              headerHtml: fetchedData.headerHtml,
              footerHtml: fetchedData.footerHtml
            }));
          }
        };
        document.head.appendChild(cssLink);
      });

      //console.log('MyGlobalContext: add javascript block to end of body.');

      // Add javascript block to end of body. Did not need to add this block on every page navigation.
      let scriptElement = document.createElement('script');
      scriptElement.innerHTML = fetchedData.javascriptBlock;
      document.body.appendChild(scriptElement);
    }
  }, [fetchedData, cssLoaded]); // Load CSS only when fetchedData changes and CSS hasn't been loaded

  useEffect(() => {

    //console.log('MyGlobalContext: in useEffect() for possible js loading');

    if (isHeaderHtmlProcessed && isFooterHtmlProcessed) {

      // Add JS Includes as script elements into body. InnerHTML method was causing JS to not work. 
      // Must be added for every page navigation for JS to work (possible due to JQuery dependencies?).

      //console.log('MyGlobalContext|jsIncludes: load/reload/run js');

      let scriptIncludes = fetchedData.javascriptIncludes;
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

      // Reload 1DS Script with each page navigation to pick up current GPC_DataSharingOptIn which can change in between page changes.
      let script1dsInit = document.createElement('script');
      script1dsInit.innerHTML = 
      'var analytics =  new oneDS.ApplicationInsights();' + 
      'var config = {' +
      '    instrumentationKey: "879d5e86926e435286a819ff03ec3d24-24bae527-c978-4bca-bfe0-5d925b52453f-7251",' +
      '   propertyConfiguration: {' +
      '       gpcDataSharingOptIn: false,' + 
      '    },' +
      '    webAnalyticsConfiguration: {' +
      '        coreData: {' +
      '        },' +
      '    autoCapture: {' +
      '            scroll: true,' +
      '            pageView: true,' +
      '            onLoad: true,' +
      '            onUnload: true,' +
      '            click: true,' +
      '            resize: true,' +
      '            jsError: true,' +
      '        },' +
      '        urlCollectQuery: true,' +
      '        urlCollectHash: true, ' +
      '        useShortNameForContentBlob: true' +
      '    }' +
      '};' +
      'analytics.initialize(config, []);';
      scriptElements.push(script1dsInit);
      document.body.appendChild(script1dsInit);

      return () => {
        // Remove script elements when component is unmounted to prevent duplicate script insertions.

        //console.log('MyGlobalContext|jsIncludes: remove js');

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

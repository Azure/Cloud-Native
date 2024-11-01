// AnnouncementBarContext.js
import React, { createContext, useContext } from 'react';

const AnnouncementBarContext = createContext({ hide: false });

export const AnnouncementBarProvider = ({ hide, children }) => (
  <AnnouncementBarContext.Provider value={{ hide }}>
    {children}
  </AnnouncementBarContext.Provider>
);

export const useAnnouncementBar = () => useContext(AnnouncementBarContext);
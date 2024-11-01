import React from 'react';
import Navbar from '@theme-original/Navbar';
import AnnouncementBar from '../../components/AnnouncementBar';
import UHFHeader from '../../components/UHFHeader';
import { useAnnouncementBar } from '../../contexts/AnnouncementBarContext';

export default function NavbarWrapper(props) {
  const { hide } = useAnnouncementBar();

  return (
    <>
      <UHFHeader />
      <Navbar {...props} />
      {!hide && <AnnouncementBar />}
    </>
  );
}

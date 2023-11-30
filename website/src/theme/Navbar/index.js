import React from 'react';
import Navbar from '@theme-original/Navbar';
import UHFHeader from '../../components/UHFHeader';

export default function NavbarWrapper(props) {
  return (
    <>
      <UHFHeader />
      <Navbar {...props} />
    </>
  );
}

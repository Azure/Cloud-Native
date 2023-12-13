import React from 'react';
import Footer from '@theme-original/Footer';
import UHFFooter from '../../components/UHFFooter';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <UHFFooter />
    </>
  );
}

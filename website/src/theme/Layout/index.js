import React from 'react';
import Layout from '@theme-original/Layout';
import { MyGlobalProvider } from '../../contexts/MyGlobalContext';

export default function LayoutWrapper(props) {
  return (
    <>
      <MyGlobalProvider>
        <Layout {...props} />
      </MyGlobalProvider>
    </>
  );
}

import React from 'react';
import GlobalStyles from "../styles/styled";

import Header from '../components/Header';
import Report from '../components/Report';
import Clients from '../components/Clients';
import Manifest from '../components/Manifest';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <>
      <GlobalStyles />
      <Header id="header" />

      <Report id="report" />
      <Clients id="clients" />
      <Manifest id="manifest" />
      <Contact id="contact" />

      <Footer id="footer" />
    </>
  )
}

export default Page;

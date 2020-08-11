import React from 'react';
import loadable from '@loadable/component'

import GlobalStyles from '../styles/styled';


const Header = loadable(() => import('../components/Header'));
const Banner = loadable(() => import('../components/Banner'));
const Report = loadable(() => import('../components/Report'));
const Clients = loadable(() => import('../components/Clients'));
const Manifest = loadable(() => import('../components/Manifest'));
const Contact = loadable(() => import('../components/Contact'));
const Footer = loadable(() => import('../components/Footer'));

const Page = () => {
  return (
    <>

      <GlobalStyles />
      <Header id="header" />
      <Banner id="banner" />
      <Report id="report" />
      <Clients id="clients" />
      <Manifest id="manifest" />
      <Contact id="contact" />
      <Footer id="footer" />
    </>
  )
}

export default Page;

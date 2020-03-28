import React from 'react';
import styled from 'styled-components/macro';

import Sidebar from './components/Sidebar';
import { colours } from './constants/colours';
import Routes from './components/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = styled.div`
  /* A 3 rows x 3 columns css grid*/
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
  height: 100%;
  background-color: ${colours.white};
`;

function App(): JSX.Element {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;

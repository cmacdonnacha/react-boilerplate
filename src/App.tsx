import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Sidebar from './components/Sidebar';
import { colours } from './constants/colours';
import Routes from './components/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = styled.div`
  height: 100%;
  background-color: ${colours.white};

  /* A 3 rows x 3 columns css grid */
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: auto 2fr auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
`;

function App(): JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout>
      <Header isSidebarOpen={isSidebarOpen} onMenuButtonClicked={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} onSidebarLinkClicked={toggleSidebar} />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;

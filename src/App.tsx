import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Sidebar from './components/Sidebar';
import { colours } from './constants/colours';
import Routes from './components/Routes';
import Header from './components/Header';

const Layout = styled.div`
  height: 100%;
  background-color: ${colours.white};

  /* A 2 rows x 2 columns css grid */
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: auto 2fr;
  grid-template-areas:
    'header header'
    'sidebar content ';
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
    </Layout>
  );
}

export default App;

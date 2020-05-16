import React from 'react';

import Dashboard from './pages/Dashboard';
import Repository from './pages/Repository';

function App() {
  return (
    <>
      <Dashboard nome="alex"/>
      <Repository reposirory="github-app" />
    </>
  );
}

export default App;

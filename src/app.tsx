import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteFc from './routes';
import { Player, Nav } from '@components/index';

import '@assets/css/default.css';
import '@assets/css/common.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <RouteFc />
      <Player />
    </Router>
  );
};

export default App;

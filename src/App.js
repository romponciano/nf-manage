import React from 'react';
import { BrowserRouter } from '../node_modules/react-router-dom'
import LoggedHome from './components/home/LoggedHome'

function App() {
  return (
      <BrowserRouter>
        <LoggedHome />
      </BrowserRouter>
  );
}

export default App;

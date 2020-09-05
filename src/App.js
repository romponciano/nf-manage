import React from 'react';
import { BrowserRouter } from '../node_modules/react-router-dom'
import TopNavbar from './components/menu/TopNavbar'
import SideNavbar from './components/menu/SideNavbar'
import { Route } from 'react-router-dom';
import LoggedHome from './components/home/LoggedHome';

function App() {
  return (
    <BrowserRouter>
      <SideNavbar />
      <TopNavbar />
      <Route exact path='/home' component={LoggedHome} />
    </BrowserRouter>
  );
}

export default App;

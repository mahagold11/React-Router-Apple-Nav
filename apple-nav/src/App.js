import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, Mac, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home} />
    <Route path='/mac' component={Mac} />
    <Route path='/contact' component={Contact} />
  </div>
);

export default App;


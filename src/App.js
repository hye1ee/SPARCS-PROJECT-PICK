import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main.js';
import Start from './pages/Start.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path='/universe' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

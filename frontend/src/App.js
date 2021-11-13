import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main.js';
import Start from './pages/Start.js';
import Create from './pages/Create.js';
import Draw from './pages/Draw.js';

function App() {

  const [name,setName] = useState('');
  const [size,setSize] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path='/universe' component={Main} />
        <Route exact path='/create' render={()=><Create setName={setName} setSize={setSize} />} />
        <Route exact path='/draw' render={()=><Draw name={name} size={size} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './component/Home';
import ShowCookies from './component/ShowCookies'
import Menu from './component/Buttons'

function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/showcookies" exact component={ShowCookies} />
    </div>
    </Router>
  );
}

export default App;

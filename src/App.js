import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Main from './components/main';
import HeaderBar from './components/headerbar';

class App extends Component {
  render() {
    return (
      <Router>  
      <div className="App" >
        <HeaderBar />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;

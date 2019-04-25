import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './components/main';
import HeaderBar from './components/headerbar';
import News from './components/news';
import Community from './components/community';
import RexMain from './components/rex';
import Catalog from './components/catalog';
import Schedules from './components/schedules';
import FullSchedule from './components/full-schedule';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Router>  
      <div className="App" >
        <Route path="/" component={HeaderBar} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/fetch" component={Main} />
          <Route exact path="/fetch/news" component ={News} />
          <Route exact path="/fetch/community" component ={Community} />
          <Route exact path="/rex/main" component ={RexMain} />
          <Route exact path="/rex/catalog" component ={Catalog} />
          <Route exact path="/rex/schedules" component ={Schedules} />
          <Route exact path="/rex/schedules/tv" component={FullSchedule} />
          <Route exact path="/rex/schedules/movies" component={FullSchedule} />
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;

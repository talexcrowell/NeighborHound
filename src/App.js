import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './components/main';
import HeaderBar from './components/headerbar';
import FooterBar from './components/footerbar';
import News from './components/news';
import Community from './components/community';
import CommunitySearch from './components/community-search';
import RexMain from './components/rex';
import Catalog from './components/catalog';
import Schedules from './components/schedules';
import TodayFullSchedule from './components/today-full-schedule';
import OnTheAirFullSchedule from './components/ontheair-full-schedule';
import Dashboard from './components/dashboard';
import MediaInfo from './components/media-info';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <Router>  
      <div className="App" >
        <Route path="/" component={HeaderBar} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/fetch" component={Main} />
          <Route exact path="/fetch/news" component ={News} />
          <Route exact path="/fetch/news/:category" component ={News} />
          <Route exact path="/fetch/community" component ={Community} />
          <Route exact path="/fetch/community/search" component ={CommunitySearch} />
          <Route exact path="/rex" component ={RexMain} />
          <Route exact path="/rex/catalog" component ={Catalog} />
          <Route exact path="/rex/catalog/tv/:id" component ={MediaInfo} />
          <Route exact path="/rex/schedules" component ={Schedules} />
          <Route exact path="/rex/schedules/tv/today" component={TodayFullSchedule} />
          <Route exact path="/rex/schedules/tv/ontheair" component={OnTheAirFullSchedule} />
        </Switch>
        <Route path="/" component={FooterBar} />
      </div>
    </Router>

    );
  }
}

export default App;

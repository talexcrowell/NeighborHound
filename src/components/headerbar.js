import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { searchFeed, toggleFilter } from '../actions/main';
import Filter from './filter';


export class HeaderBar extends React.Component {
  search(event){
    this.props.dispatch(searchFeed(event.target.value));
  }

  createfilter(){
    this.props.dispatch(toggleFilter());
  }

  render() {
    let param = window.location.href;
    let navmenu;

    if(param.endsWith("/") === true){
      navmenu = (
        <section className='main-menu-nav'>
          <div className='main-menu-nav-functions'>
            <input className='main-search' type='text' placeholder='Search Feed for Title...' onChange={event => this.search(event)}></input>
            <div className='filter-img'>
              <img className='filter-icon' src='https://i.imgur.com/HQtwQg6.png'alt='filter' onClick={() => this.createfilter()}></img>
            </div>
          </div>
          <ul className='main-menu-nav-buttons'>
            <Link to='/' ><li className='main-menu-choice-active'>Main</li></Link>
            <Link to='/news' ><li className='main-menu-choice'>News</li></Link>
            <Link to='/community' ><li className='main-menu-choice'>Community</li></Link>
          </ul>
        </section>);
    }
    else if(param.endsWith('/news') === true){
      navmenu = (
        <section className='main-menu-nav'>
          <div className='main-menu-nav-functions'>
            <input className='main-search' type='text' placeholder='Search Feed for Title...' onChange={event => this.search(event)}></input>
            <div className='filter-img'>
              <img className='filter-icon' src='https://i.imgur.com/HQtwQg6.png'alt='filter' onClick={() => this.createfilter()}></img>
            </div>
          </div>
          <ul className='main-menu-nav-buttons'>
            <Link to='/' ><li className='main-menu-choice'>Main</li></Link>
            <Link to='/news' ><li className='main-menu-choice-active'>News</li></Link>
            <Link to='/community' ><li className='main-menu-choice'>Community</li></Link>
          </ul>
        </section>);
    }
    else if(param.endsWith('/community') === true){
      navmenu = (
        <section className='main-menu-nav'>
          <div className='main-menu-nav-functions'>
            <input className='main-search' type='text' placeholder='Search Feed for Title...' onChange={event => this.search(event)}></input>
            <div className='filter-img'>
              <img className='filter-icon' src='https://i.imgur.com/HQtwQg6.png'alt='filter' onClick={() => this.createfilter()}></img>
            </div>
          </div>
          <ul className='main-menu-nav-buttons'>
            <Link to='/' ><li className='main-menu-choice'>Main</li></Link>
            <Link to='/news' ><li className='main-menu-choice'>News</li></Link>
            <Link to='/community' ><li className='main-menu-choice-active'>Community</li></Link>
          </ul>
        </section>);
    }
    else if(param.endsWith('/rex') === true){
      navmenu = (
        <section className='rex-menu-nav'>
          <ul className='rex-menu-nav-buttons'>
            <li className='rex-menu-choice'>Rex</li>
            <li className='rex-menu-choice'>Schedules</li>
            <li className='rex-menu-choice'>Catalogue</li>
            <li className='rex-menu-choice'>Watchlist</li>
          </ul>
        </section>);
    }


    let filter;
    if (this.props.filtered === true && param.endsWith("/") === true){
      filter = <Filter items={this.props.feed} />;
    }
    else if (this.props.filtered === true && param.endsWith("/news") === true){
      filter = <Filter items={this.props.articles} />;
    }
    else if (this.props.filtered === true && param.endsWith("/community") === true){
      filter = <Filter items={this.props.posts} />;
    }
    
    return(
      <div className='header'>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/'>
              <h2 className='header-title'>NeighborHound</h2>
            </Link>
            <ul className='header-menu'>
              <Link to='/rex' > <li className='header-menu-choice'>Rex</li></Link>
              <li className='header-menu-choice'>About</li>
              <li className='header-menu-choice'>User</li>
            </ul>
          </div>
        </div>
      {navmenu}
    </div>
      )
  }
}
  
function mapStateToProps(state){
    return{
      articles: state.news.articles,
      loading: state.news.loading,
      feed: state.main.feed,
      posts: state.community.posts,
      filtered: state.main.filtered
    }
  }
  
  export default connect(mapStateToProps)(HeaderBar);
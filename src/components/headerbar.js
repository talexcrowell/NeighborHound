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
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/'>
              <h2 className='header-title'>NeighborHound</h2>
            </Link>
            <ul className='header-menu'>
              <Link className='click-area' to='/rex/main' > <li className='header-menu-choice'>Rex</li></Link>
              <li className='header-menu-choice'>About</li>
              <li className='header-menu-choice'>User</li>
            </ul>
          </div>
        </div>
        <section className='main-menu-nav'>
          <ul className='main-menu-nav-buttons'>
            <Link to='/' ><li className='main-menu-choice-active'>Main</li></Link>
            <Link to='/news' ><li className='main-menu-choice'>News</li></Link>
            <Link to='/community' ><li className='main-menu-choice'>Community</li></Link>
          </ul>
      </section>
    </div>);
    }
    else if(param.endsWith('/news') === true){
      navmenu = (
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/'>
              <h2 className='header-title'>NeighborHound</h2>
            </Link>
            <ul className='header-menu'>
              <Link className='click-area' to='/rex/main' > <li className='header-menu-choice'>Rex</li></Link>
              <li className='header-menu-choice'>About</li>
              <li className='header-menu-choice'>User</li>
            </ul>
          </div>
        </div>
        <section className='main-menu-nav'>
          <ul className='main-menu-nav-buttons'>
            <Link to='/'  ><li className='main-menu-choice'>Main</li></Link>
            <Link to='/news' ><li className='main-menu-choice-active'>News</li></Link>
            <Link to='/community' ><li className='main-menu-choice'>Community</li></Link>
          </ul>
      </section>
    </div>);
    }
    else if(param.endsWith('/community') === true){
      navmenu = (
      <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/'>
              <h2 className='header-title'>NeighborHound</h2>
            </Link>
            <ul className='header-menu'>
              <Link className='click-area' to='/rex/main' ><li className='header-menu-choice'>Rex</li></Link>
              <li className='header-menu-choice'>About</li>
              <li className='header-menu-choice'>User</li>
            </ul>
          </div>
        </div>
        <section className='main-menu-nav'>
          <ul className='main-menu-nav-buttons'>
            <Link className='click-area' to='/' ><li className='main-menu-choice'>Main</li></Link>
            <Link to='/news' ><li className='main-menu-choice'>News</li></Link>
            <Link to='/community' ><li className='main-menu-choice-active'>Community</li></Link>
          </ul>
      </section>
    </div>);
    }
    else if(param.endsWith('/rex/main') === true){
      navmenu = (
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/rex/main'>
              <h2 className='header-title'>Rex</h2>
            </Link>
            <ul className='header-menu'>
              <Link className ='click-area' to='/' ><li className='header-menu-choice'>NeighborHound</li></Link>
              <li className='header-menu-choice'>About</li>
              <li className='header-menu-choice'>User</li>
            </ul>
          </div>
        </div>
        <div className='rex-menu-nav'>
          <ul className='rex-menu-nav-buttons'>
          <Link className ='click-area' to='/rex/main' ><li className='rex-menu-choice-active'>Home</li></Link>
            <li className='rex-menu-choice'>Rex</li>
          <Link className ='click-area' to='/rex/catalog' ><li className='rex-menu-choice'>Catalog</li></Link>
            <li className='rex-menu-choice'>Schedules</li>
            <li className='rex-menu-choice'>REXLists</li>
          </ul>
        </div>
        </div>);
    }
    else if(param.endsWith('/rex/catalog') === true){
      navmenu = (
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/rex/main'>
              <h2 className='header-title'>Rex</h2>
            </Link>
            <ul className='header-menu'>
              <Link className ='click-area' to='/' ><li className='header-menu-choice'>NeighborHound</li></Link>
              <li className='header-menu-choice'>About</li>
              <li className='header-menu-choice'>User</li>
            </ul>
          </div>
        </div>
        <div className='rex-menu-nav'>
          <ul className='rex-menu-nav-buttons'>
          <Link className ='click-area' to='/rex/main' ><li className='rex-menu-choice'>Home</li></Link>
            <li className='rex-menu-choice'>Rex</li>
          <Link className ='click-area' to='/rex/catalog' ><li className='rex-menu-choice-active'>Catalog</li></Link>
            <li className='rex-menu-choice'>Schedules</li>
            <li className='rex-menu-choice'>REXLists</li>
          </ul>
        </div>
        </div>);
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
        {navmenu}
      </div>
      );
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
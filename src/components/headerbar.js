import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { searchFeed, toggleFilter } from '../actions/main';


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

    if(param.endsWith("/fetch") === true){
      navmenu = (
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <h2 className='header-title' onClick={() => window.scrollTo(0,0)}>NeighborHound</h2>
            <ul className='header-menu'>
              <Link className='click-area' to='/rex/main' > <li className='header-menu-choice'>Rex</li></Link>
              <li className='header-menu-choice'>About</li>
              <Link className='click-area' to='/'><li className='header-menu-choice'>User</li></Link>
            </ul>
          </div>
        </div>
        <section className='main-menu-nav'>
          <ul className='main-menu-nav-buttons'>
            <Link to='/fetch' ><li className='main-menu-choice-active'>Main</li></Link>
            <Link to='/fetch/news/all' ><li className='main-menu-choice'>News</li></Link>
            <Link to='/fetch/community' ><li className='main-menu-choice'>Community</li></Link>
            <li className='main-menu-choice'>Custom Feed</li>
            <li className='main-menu-choice'>FetchLists</li>
          </ul>
      </section>
    </div>);
    }
    else if(param.endsWith('/fetch/news') === true){
      navmenu = (
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
              <h2 className='header-title'>NeighborHound</h2>
            <ul className='header-menu'>
              <Link className='click-area' to='/rex/main' > <li className='header-menu-choice'>Rex</li></Link>
              <li className='header-menu-choice'>About</li>
              <Link className='click-area' to='/'><li className='header-menu-choice'>User</li></Link>
            </ul>
          </div>
        </div>
        <section className='main-menu-nav'>
          <ul className='main-menu-nav-buttons'>
            <Link to='/fetch'  ><li className='main-menu-choice'>Main</li></Link>
            <Link to='/fetch/news/all' ><li className='main-menu-choice-active'>News</li></Link>
            <Link to='/fetch/community' ><li className='main-menu-choice'>Community</li></Link>
            <li className='main-menu-choice'>Custom Feed</li>
            <li className='main-menu-choice'>FetchLists</li>
          </ul>
      </section>
    </div>);
    }
    else if(param.endsWith('/fetch/community') === true){
      navmenu = (
      <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
              <h2 className='header-title'>NeighborHound</h2>
            <ul className='header-menu'>
              <Link className='click-area' to='/rex/main' ><li className='header-menu-choice'>Rex</li></Link>
              <li className='header-menu-choice'>About</li>
              <Link className='click-area' to='/'><li className='header-menu-choice'>User</li></Link>
            </ul>
          </div>
        </div>
        <section className='main-menu-nav'>
          <ul className='main-menu-nav-buttons'>
            <Link className='click-area' to='/fetch' ><li className='main-menu-choice'>Main</li></Link>
            <Link to='/fetch/news/all' ><li className='main-menu-choice'>News</li></Link>
            <Link to='/fetch/community' ><li className='main-menu-choice-active'>Community</li></Link>
            <li className='main-menu-choice'>Custom Feed</li>
            <li className='main-menu-choice'>FetchLists</li>
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
              <h2 className='header-title'>NeighborHound</h2>
            </Link>
            <ul className='header-menu'>
              <Link className ='click-area' to='/fetch' ><li className='header-menu-choice'>Fetch</li></Link>
              <li className='header-menu-choice'>About</li>
              <Link className='click-area' to='/'><li className='header-menu-choice'>User</li></Link>
            </ul>
          </div>
        </div>
        <div className='rex-menu-nav'>
          <ul className='rex-menu-nav-buttons'>
          <Link className ='click-area' to='/rex/main' ><li className='rex-menu-choice-active'>Home</li></Link>
            <li className='rex-menu-choice'>Rex</li>
          <Link className ='click-area' to='/rex/catalog' ><li className='rex-menu-choice'>Catalog</li></Link>
          <Link className ='click-area' to='/rex/schedules' ><li className='rex-menu-choice'>Schedules</li></Link>
            <li className='rex-menu-choice'>REXLists</li>
          </ul>
        </div>
        </div>);
    }
    else if(param.includes('/rex/catalog') === true){
      navmenu = (
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/rex/main'>
              <h2 className='header-title'>NeighborHound</h2>
            </Link>
            <ul className='header-menu'>
              <Link className ='click-area' to='/fetch' ><li className='header-menu-choice'>Fetch</li></Link>
              <li className='header-menu-choice'>About</li>
              <Link className='click-area' to='/'><li className='header-menu-choice'>User</li></Link>
            </ul>
          </div>
        </div>
        <div className='rex-menu-nav'>
          <ul className='rex-menu-nav-buttons'>
          <Link className ='click-area' to='/rex/main' ><li className='rex-menu-choice'>Home</li></Link>
            <li className='rex-menu-choice'>Rex</li>
          <Link className ='click-area' to='/rex/catalog' ><li className='rex-menu-choice-active'>Catalog</li></Link>
          <Link className ='click-area' to='/rex/schedules' ><li className='rex-menu-choice'>Schedules</li></Link>
            <li className='rex-menu-choice'>REXLists</li>
          </ul>
        </div>
        </div>);
    }
    else if(param.includes('/rex/schedules') === true){
      navmenu = (
        <div>
        <div className='headerbar'>
          <div className='header-container'>
            <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/>
            <Link to='/rex/main'>
              <h2 className='header-title'>NeighborHound</h2>
            </Link>
            <ul className='header-menu'>
              <Link className ='click-area' to='/fetch' ><li className='header-menu-choice'>Fetch</li></Link>
              <li className='header-menu-choice'>About</li>
              <Link className='click-area' to='/'><li className='header-menu-choice'>User</li></Link>
            </ul>
          </div>
        </div>
        <div className='rex-menu-nav'>
          <ul className='rex-menu-nav-buttons'>
          <Link className ='click-area' to='/rex/main' ><li className='rex-menu-choice'>Home</li></Link>
            <li className='rex-menu-choice'>Rex</li>
          <Link className ='click-area' to='/rex/catalog' ><li className='rex-menu-choice'>Catalog</li></Link>
          <Link className ='click-area' to='/rex/schedules' ><li className='rex-menu-choice-active'>Schedules</li></Link>
          <li className='rex-menu-choice'>REXLists</li>
          </ul>
        </div>
        </div>);
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
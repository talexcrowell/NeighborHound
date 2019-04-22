import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



export class HeaderBar extends React.Component {

 render() {
   let param = window.location.href;
   let navmenu;
   
   if(param.endsWith("/") === true){
    navmenu = (
      <ul className='main-menu-nav-buttons'>
        <Link to='/' ><li className='main-menu-choice-active'>Main</li></Link>
        <Link to='/news' ><li className='main-menu-choice'>News</li></Link>
        <Link to='/community' ><li className='main-menu-choice'>Community</li></Link>
      </ul>);
   }
   else if(param.endsWith('/news') === true){
    navmenu = (
      <ul className='main-menu-nav-buttons'>
        <Link to='/' ><li className='main-menu-choice'>Main</li></Link>
        <Link to='/news' ><li className='main-menu-choice-active'>News</li></Link>
        <Link to='/community' ><li className='main-menu-choice'>Community</li></Link>
      </ul>);
   }
   else if(param.endsWith('/community') === true){
    navmenu = (
      <ul className='main-menu-nav-buttons'>
        <Link to='/' ><li className='main-menu-choice'>Main</li></Link>
        <Link to='/news' ><li className='main-menu-choice'>News</li></Link>
        <Link to='/community' ><li className='main-menu-choice-active'>Community</li></Link>
      </ul>);
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
          <li className='header-menu-choice'>User</li>
        </ul>
      </div>
     </div>
     <section className='main-menu-nav'>
     <div className='main-menu-nav-functions'>
       <input className='main-search' type='text' placeholder='Search Feed...'></input>
       <div className='filter-img'>
         <img className='filter-icon' src='https://i.imgur.com/HQtwQg6.png'alt='filter'></img>
       </div>
     </div>
    {navmenu}
   </section>
   </div>
    )
 }
}
  
function mapStateToProps(state){
    return{
      articles: state.news.articles,
      loading: state.news.loading
    }
  }
  
  export default connect(mapStateToProps)(HeaderBar);
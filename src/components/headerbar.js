import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



export class HeaderBar extends React.Component {
 render() {
   return(
     <div className='headerbar'>
      <div className='header-container'>
        <Link to='/'>
          <img className='logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' />
          <h2 className='header-title'>NeighborHound</h2>
        </Link>
        <ul className='header-menu'>
          <Link to='/news' ><li className='header-menu-choice'>News</li></Link>
          <Link to='/community' ><li className='header-menu-choice'>Community</li></Link>
          <Link to='/rex' > <li className='header-menu-choice'>Rex</li></Link>
        </ul>
      </div>
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
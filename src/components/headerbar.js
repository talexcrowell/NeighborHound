import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



export class HeaderBar extends React.Component {
 render() {
   return(
     <div className='headerbar'>
     <Link to='/'><h2 className='header-title'>NeighborHound</h2></Link>
      <ul className='header-menu'>
        <Link to='/news' ><li className='header-menu-choice'>News</li></Link>
        <Link to='/community' ><li className='header-menu-choice'>Community</li></Link>
        <li className='header-menu-choice'>Rex</li>
      </ul>
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
import React from 'react';
import {connect} from 'react-redux';



export class HeaderBar extends React.Component {
 render() {
   return(
     <div className='headerbar'>
      <h2 className='header-title'>NeighborHound</h2>
      <ul className='header-menu'>
        <li className='header-menu-choice'>News</li>
        <li className='header-menu-choice'>Community</li>
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
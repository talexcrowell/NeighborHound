import React from 'react';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMainFeed} from '../actions/main';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMainFeed());
  }


  render() {

    return(
      <main role='main' className='main-page'>
        <div className='main-page-content'>
          <h1 className='main-menu-title'>Welcome to NeighborHound</h1>
          <img className='img-container' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' />
          <Link to='/fetch'>
            <div className='header-title'>Fetch</div>
          </Link>
          <Link to='/rex/main'>
            <div className='header-title'>Rex</div>
          </Link>
        </div>
      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    feed: state.main.feed,
    loading: state.main.loading,
    search: state.main.searchQuery
  }
}

export default connect(mapStateToProps)(Dashboard);
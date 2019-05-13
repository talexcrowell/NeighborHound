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
          <img className='img-container' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' />
          <h1 className='dashboard-title'>Welcome to NeighborHound</h1>
          <Link className='click-area' to='/fetch'>
            <div className='dashboard-entry'>
              <h2>Fetch</h2>
              <p className='csl'>Let's Fetch all upcoming news and fresh community content to keep you informed and entertained!</p>
            </div>
          </Link>
          <Link className='click-area' to='/rex/main'>
            <div className='dashboard-entry'>
              <h2>Rex</h2>
              <p className='csl'>With an endless ocean of media to choose from, come ask for a recommendation from Rex!</p>
            </div>
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
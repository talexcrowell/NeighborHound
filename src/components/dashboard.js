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
        <div className='dashboard-page-content'>
          <img className='dashboard-img-container' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' />
          <h1 className='dashboard-title'>NeighborHound</h1>
          <h3 className='dashboard-title'>"Let's See What We Can Find"</h3>
          <Link className='click-area' to='/fetch'>
            <div className='dashboard-entry'>
              <h2 className='dashboard-entry-title'>Fetch</h2>
              <p className='csl'>Let's Fetch all upcoming news and fresh community content to keep you informed and entertained!</p>
            </div>
          </Link>
          <Link className='click-area' to='/rex/main'>
            <div className='dashboard-entry'>
              <h2 className='dashboard-entry-title'>Rex</h2>
              <p className='csl'>With an endless ocean of media to choose from, come ask for a recommendation from Rex!</p>
            </div>
          </Link>
          <Link className='click-area' to='/settings'>
            <div className='dashboard-entry'>
              <h2 className='dashboard-entry-title'>Account Settings</h2>
              <p className='csl'>Maintain your account's preferences and settings</p>
            </div>
          </Link>
          <Link className='click-area' to='/about'>
            <div className='dashboard-entry'>
              <h2 className='dashboard-entry-title'>About</h2>
              <p className='csl'>Who made this thing?</p>
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
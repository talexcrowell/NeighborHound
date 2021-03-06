import React from 'react';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class Dashboard extends React.Component {
  render() {
    let accountSettings;

    if(this.props.loggedIn === true){
      accountSettings =  <Link className='click-area' to='/settings'>
      <div className='dashboard-entry'>
        <h2 className='dashboard-entry-title'>Account Settings</h2>
        <p className='csl'>Maintain your account's preferences and settings</p>
      </div>
      </Link>;
    } else if(this.props.loggedIn === false){
      accountSettings =  <Link className='click-area' to='/login'>
      <div className='dashboard-entry'>
        <h2 className='dashboard-entry-title'>Login</h2>
        <p className='csl'>Let Neighborhound Make It Easier for You</p>
      </div>
      </Link>;
    }

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
          {accountSettings}
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
    loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(Dashboard);
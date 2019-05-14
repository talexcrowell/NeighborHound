import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
export class FooterBar extends React.Component {
  render(){
    return(
      <div className='footerbar'>
        <div className='footer-container'>
          <img className='footer-logo' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' onClick={() => window.scrollTo(0,0)}/><p className='footer-text'>Click to Scroll Back to the Top!</p>
            <div className='footer-link'><p className= 'csl'>About</p></div>
        </div>
      </div>
    );
  }
}

export default connect()(FooterBar);

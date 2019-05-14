import React from 'react';
import {connect} from 'react-redux';
import{Link} from 'react-router-dom';

export function About(props) {


    return(
      <main role='main' className='main-page'>
        <div className='dashboard-page-content'>
        <Link to='/'><div>Back</div></Link>
        <p>This is the about page. I make stuff and things. try it i guess</p>
        </div>
      </main> 
    )
}

export default connect()(About);
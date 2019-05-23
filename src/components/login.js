import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function Login(props) {

    return(
      <main role='main' className='main-page'>
        <div className='dashboard-page-content'>
        <section className='main-menu'>
        <img className='dashboard-img-container' src='https://i.imgur.com/3xw03XE.png' alt='Neighborhound' />
          <h1 className='dashboard-title'>NeighborHound</h1>
          <h3 className='dashboard-title'>"Let's See What We Can Find"</h3>
        <h3>Login</h3>
          <form className='search-form'>
            <label>Email</label>
            <input className='search-query'></input>
            <br/>
            <label>Password</label>
            <input className='search-query'></input>
          </form>
          <br/>
          <Link to='/register'>Don't have an account?</Link>
          <br/>
          <Link to='/'><button className='search-link'>Back</button></Link>
        </section>
        </div>
      </main>
    )
}

export default connect()(Login);
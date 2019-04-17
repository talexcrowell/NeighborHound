import React from 'react';
import {connect} from 'react-redux';
import './main.css';

export class RexDashboard extends React.Component {
  componentDidMount() {
  }

  render() {
   

    

    return(
      <main role='main' className='rex-main-page'>
      <br/>
      <br/>
      <br/>
      <br/>
        <img className='post-img' src='https://i.imgur.com/3xw03XE.png' alt='Under Construction!' />
        <h1>Working on REX!</h1>
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    posts: state.community.posts,
    loading: state.news.loading
  }
}

export default connect(mapStateToProps)(RexDashboard);
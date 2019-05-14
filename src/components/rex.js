import React from 'react';
import {connect} from 'react-redux';

export class RexMain extends React.Component {
  componentDidMount() {
  }

  render() {


    return(
      <main role='main' className='rex-main-page'>
      <div className='main-menu'>
        <section className='rex-main-content'>
          <div className ='rex-main-text'>
            <h2>Welcome to Rex</h2>
          </div>
          <p>What can we help you find?</p>
        </section>
      </div>
    </main>
    )
  }
}

function mapStateToProps(state){
  return{
    movies: state.rex.movies,
    loading: state.news.loading,
    quickRec: state.rex.quickRec,
    upcoming: state.rex.upcoming,
    airingToday: state.rex.airingToday
  }
}

export default connect(mapStateToProps)(RexMain);
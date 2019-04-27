import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Details from './details';
import { fetchNowPlayingMovies, fetchAiringTodayTV, closeDetails, viewDetails } from '../actions/rex';

export class Schedules extends React.Component {

  closeDetails(){
    this.props.dispatch(closeDetails());
  }

  viewDetails(media){
    this.props.dispatch(viewDetails(media));
  }

  render() {
    return(
      <main role='main' className='rex-main-page'>
      <div className='main-menu'>
        <h1>Schedules</h1>
        <p className='schedule-description'>See what movies are playing now or coming soon!</p>
        <p className='schedule-description'>Come check out what shows are airing today and are in season</p>
        <section className='schedule-container'>
          <Link className='click-area' to='/rex/schedules/tv/today'>
          <div className='tv-schedule-description'>
            <img className='tv-logo' src='https://i.imgur.com/vNOeitC.png' alt='Rex TV'></img>
            <h2 className='schedule-section-title'>Television</h2> 
          </div>
          </Link>
          <div className='tv-schedule-description'>
          <img className='tv-logo' src='https://i.imgur.com/F6LGKZU.png' alt='Rex Movies'></img>
          <h2 className='schedule-section-title'>Movies</h2> 
        </div>
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
    schedule: state.rex.schedule,
    airingToday: state.rex.airingToday,
    nowPlaying: state.rex.nowPlaying,
    view: state.rex.view
  }
}

export default connect(mapStateToProps)(Schedules);
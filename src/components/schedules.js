import React from 'react';
import {connect} from 'react-redux';
import { fetchUpcomingMovies, fetchNowPlayingMovies, fetchAiringTodayTV, fetchOnTheAirTV } from '../actions/rex';

export class Schedules extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUpcomingMovies());
    this.props.dispatch(fetchNowPlayingMovies());
    this.props.dispatch(fetchAiringTodayTV());
    this.props.dispatch(fetchOnTheAirTV());
  }

  render() {
    let mainUpcoming = this.props.upcoming;
    let nowPlaying = this.props.nowPlaying;
    let airingToday = this.props.airingToday;
    let onAir = this.props.schedule;

    mainUpcoming.length = 10;
    nowPlaying.length = 10;
    airingToday.length = 10;
    onAir.length = 10;

    let upcomingMovies = mainUpcoming.map((movie, index) => (
      <li className='upcoming-card'>
        <p className='upcoming-title'>{movie.title.length < 40 ? movie.title : movie.title.slice(0,40)+'...'}</p>
      </li>
    ));

    let nowPlayingMovies = nowPlaying.map((movie, index) => (
      <li className='upcoming-card'>
        <p className='upcoming-title'>{movie.title.length < 40 ? movie.title : movie.title.slice(0,40)+'...'}</p>
      </li>
    ));

    let today = airingToday.map((show, index) => (
      <li className='schedule-card'>
        <p className='schedule-title'>{show.title.length < 40 ? show.title : show.title.slice(0,40)+'...'}</p>
      </li>
    ));

    let schedule = onAir.map((show, index) => (
      <li className='schedule-card'>
        <p className='schedule-title'>{show.title.length < 40 ? show.title : show.title.slice(0,40)+'...'}</p>
      </li>
    ));

    return(
      <main role='main' className='rex-main-page'>
      <div className='main-menu'>
        <h2>Schedules for Upcoming Entertainment</h2>
        <div className='tv-schedule'>
          <h3 className='main-title'>On TV Today:</h3>
          <uL className='main-list'>
            {today}
          </uL>
        </div>
        <div className='upcoming-movies'>
          <h3 className='main-title'>Upcoming:</h3>
          <ul className='main-list'>
            {upcomingMovies}
          </ul>
        </div>
        <div className='tv-schedule'>
          <h3 className='main-title'>Currently Airing:</h3>
          <uL className='main-list'>
            {schedule}
          </uL>
        </div>
        <div className='upcoming-movies'>
          <h3 className='main-title'>Currently Playing:</h3>
          <ul className='main-list'>
            {nowPlayingMovies}
          </ul>
      </div>
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
    nowPlaying: state.rex.nowPlaying
  }
}

export default connect(mapStateToProps)(Schedules);
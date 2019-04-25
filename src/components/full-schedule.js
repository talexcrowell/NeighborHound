import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchUpcomingMovies, fetchNowPlayingMovies, fetchAiringTodayTV, fetchOnTheAirTV } from '../actions/rex';

export class FullSchedule extends React.Component {
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
      <h2>Television</h2>
        <section className='tv-schedule-container'>
          <div className='full-tv-schedule'>
            <h3 className='main-title'>Today:</h3>
            <uL className='main-list'>
              {today}
            </uL>
          </div>
          <div className='full-tv-schedule'>
            <h3 className='main-title'>Currently Airing:</h3>
            <uL className='main-list'>
              {schedule}
            </uL>
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
    nowPlaying: state.rex.nowPlaying
  }
}

export default connect(mapStateToProps)(FullSchedule);
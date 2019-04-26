import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Details from './details';
import { fetchNowPlayingMovies, fetchAiringTodayTV, closeDetails, viewDetails } from '../actions/rex';

export class Schedules extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNowPlayingMovies());
    this.props.dispatch(fetchAiringTodayTV());
  }

  closeDetails(){
    this.props.dispatch(closeDetails());
  }

  viewDetails(media){
    this.props.dispatch(viewDetails(media));
  }

  render() {
    let details;

    if(this.props.view !== null){
      details = <Details media={this.props.view} ></Details>
    }

    let nowPlaying = this.props.nowPlaying;
    let airingToday = this.props.airingToday;
   

    nowPlaying.length = 5;
    airingToday.length = 5;

    let nowPlayingMovies = nowPlaying.map((movie, index) => (
      <li className='upcoming-card'>
        <p className='upcoming-title'>{movie.title.length < 40 ? movie.title : movie.title.slice(0,40)+'...'}</p>
      </li>
    ));

    let today = airingToday.map((show, index) => (
      <li className='schedule-card' onClick={() => this.viewDetails(show)}>
        <p className='schedule-title'>{show.title.length < 40 ? show.title : show.title.slice(0,40)+'...'}</p>
        <div className='schedule-details'>
          <p className='full-schedule-season'>S{show.nextEpisode.season_number}E{show.nextEpisode.episode_number}</p>
          <div className='network-img-container'>
            <img className='network-img' src={`https://image.tmdb.org/t/p/w200${show.networks[0].logo_path}`} alt={show.networks[0].name}></img>
          </div>
        </div>
      </li>
    ));

    return(
      <main role='main' className='rex-main-page'>
      <div className='main-menu'>
        <h1>Schedules</h1>
        <section className='schedule-container'>
          <Link className='click-area' to='/rex/schedules/tv'>
          <h2 className='schedule-section-title'>Television</h2>
          <div className='tv-schedule-description'>
            <img className='tv-logo' src='https://i.imgur.com/vNOeitC.png' alt='Rex TV'></img>
            <p className='schedule-description'>Come check out what shows are airing today and are in season</p>
          </div>
          </Link>
          <div className='tv-schedule'>
            <h3 className='main-title'>Airing Today:</h3>
            <uL className='main-list'>
              {today}
            </uL>
          </div>
        </section>
        <section className='schedule-container'>
          <h2 className='schedule-section-title'>Movies</h2>
          <div className='tv-schedule-description'>
            <img className='tv-logo' src='https://i.imgur.com/F6LGKZU.png' alt='Rex Movies'></img>
            <p className='schedule-description'>See what movies are playing now or coming soon!</p>
          </div>
          <div className='tv-schedule'>
            <h3 className='main-title'>Currently Playing:</h3>
            <ul className='main-list'>
            {nowPlayingMovies}
            </ul>
          </div>
      </section>
      {details}
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
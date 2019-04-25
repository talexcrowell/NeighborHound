import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchUpcomingMovies, fetchNowPlayingMovies, fetchAiringTodayTV, fetchOnTheAirTV } from '../actions/rex';

export class FullSchedule extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchAiringTodayTV());
  }

  render() {
    let mainUpcoming = this.props.upcoming;
    let nowPlaying = this.props.nowPlaying;
    let airingToday = this.props.airingToday;
    let onAir = this.props.schedule;

    let today = airingToday.map((show, index) => (
      <li className='full-schedule-card'>
        <p className='full-schedule-title'>{show.title.length < 40 ? show.title : show.title.slice(0,40)+'...'}</p>
        {show.genres.length < 2 ? <div className='full-schedule-genres'><div className='full-schedule-genre'>{show.genres[0].name}</div></div> : 
          show.genres.length < 3 ? <div className='full-schedule-genres'><div className='full-schedule-genre'>{show.genres[0].name}</div><div className='full-schedule-genre'>{show.genres[1].name}</div></div> : 
          <div className='full-schedule-genres'><div className='full-schedule-genre'>{show.genres[0].name}</div><div className='full-schedule-genre'>{show.genres[1].name}</div><div className='full-schedule-genre'>{show.genres[2].name}</div></div>}
        <div className='full-schedule-details'>
          <p className='full-schedule-season'>S{show.nextEpisode.season_number}E{show.nextEpisode.episode_number}</p>
          <div className='full-schedule-network-img-container'>
          <img className='full-schedule-network-img' src={`https://image.tmdb.org/t/p/w200${show.networks[0].logo_path}`} alt={show.networks[0].name}></img>
          </div>
          </div>  
        <div className='full-schedule-buttons'>
          <div className='add-to-watchlist'>Add</div>
          <div className='more-info'>More</div>
        </div>
      </li>
    ));

    // let schedule = onAir.map((show, index) => (
    //   <div className='full-schedule-network-img-container'>
    //       <img className='full-schedule-network-img' src={`https://image.tmdb.org/t/p/w200${show.networks[0].logo_path}`} alt={show.networks[0].name}></img>
    //     </div>
    //   <li className='schedule-card'>
    //     <p className='schedule-title'>{show.title.length < 40 ? show.title : show.title.slice(0,40)+'...'}</p>
    //   </li>
    // ));

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
import React from 'react';
import {connect} from 'react-redux';
import { fetchQuickReccommendation, fetchUpcomingMovies, fetchAiringTodayTV } from '../actions/rex';

export class RexMain extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuickReccommendation());
    this.props.dispatch(fetchUpcomingMovies());
    this.props.dispatch(fetchAiringTodayTV());
  }

  render() {
    let mainUpcoming = this.props.upcoming;
    let mainSchedule = this.props.airingToday;
    mainUpcoming.length = 5;
    mainSchedule.length = 5;

    let upcomingMovies = mainUpcoming.map((movie, index) => (
      <li className='upcoming-card'>
        <p className='upcoming-title'>{movie.title.length < 40 ? movie.title : movie.title.slice(0,40)+'...'}</p>
      </li>
    ));

    let tvSchedule = mainSchedule.map((show, index) => (
      <li className='schedule-card'>
        <p className='schedule-title'>{show.title.length < 40 ? show.title : show.title.slice(0,40)+'...'}</p>
      </li>
    ));

    return(
      <main role='main' className='rex-main-page'>
      <div className='main-menu'>
        <section className='rex-main-content'>
          <div className ='rex-main-text'>
            <h2>Welcome to Rex</h2>
              <p className='csl'>There are SO many things to watch, to play, or to listen to its hard to discover something new. Sometimes its even harder to keep track of what you're currently trying to stay up to date with!</p>
              <p className='csl'> REX is where you go to track your media history, make your media wishlist, and discover more all together! With a massive database full of entertainment to choose from, come ask for a recommendation from REX!</p>
              <p className='csl'>Choose from movies, music, TV, anime, books, etc. The possibilities are endless!</p>
          </div>
          <div className='main-media'>
            <h3>Quick Pick</h3>
            <section className='main-media-img-container'>
              <img className='main-media-img' src={this.props.quickRec.img} alt={this.props.quickRec.title}></img>
            </section> 
            <h2 className='main-media-title'>{this.props.quickRec.title}</h2>
            <p className='main-media-rating'>{'MovieDB: ' + this.props.quickRec.moviedbrating}</p>
          </div>
        </section>
        <div className='main-tv-schedule'>
          <h3 className='main-title'>On TV Today:</h3>
          <uL className='main-list'>
            {tvSchedule}
          </uL>
        </div>
        <div className='main-upcoming-movies'>
          <h3 className='main-title'>Upcoming:</h3>
          <ul className='main-list'>
            {upcomingMovies}
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
    airingToday: state.rex.airingToday
  }
}

export default connect(mapStateToProps)(RexMain);
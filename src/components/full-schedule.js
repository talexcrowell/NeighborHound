import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAiringTodayTV, fetchOnTheAirTV, closeDetails, viewDetails, fetchTVPage} from '../actions/rex';
import Details from './details';

export class FullSchedule extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAiringTodayTV());
  }
  closeDetails(){
    this.props.dispatch(closeDetails());
  }

  viewDetails(media){
    this.props.dispatch(viewDetails(media));
  }

  changeNextPage(){
    const request ={
      reqPage: (this.props.pages.page + 1),
      schedule: 'today'
    };
    this.props.dispatch(fetchTVPage(request));
  }

  changePrevPage(){
    const request ={
      reqPage: (this.props.pages.page - 1),
      schedule: 'today'
    };
    this.props.dispatch(fetchTVPage(request));
  }

  render() {
    let param = window.location.href;
    let details;

    if(this.props.view !== null){
      details = <Details media={this.props.view} ></Details>
    }

    let airingToday = this.props.airingToday;

    let today;
    if(this.props.loading === true){
      today = <img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />
    }
    
    else {
     today = airingToday.map((show, index) => (
      <li className='full-schedule-card' key={'airing-'+index}>
        <img className='full-schedule-img' src={show.img.includes('null') === false ? show.img : 'https://i.imgur.com/vNOeitC.png'} alt={show.title}></img>
        <p className='full-schedule-title'>{show.title.length < 40 ? show.title : show.title.slice(0,40)+'...'}</p>
        {show.genres.length < 1 ? <div className='full-schedule-genres'></div> :
          show.genres.length < 2 ? <div className='full-schedule-genres'><div className='full-schedule-genre'>{show.genres[0].name}</div></div> : 
          show.genres.length < 3 ? <div className='full-schedule-genres'><div className='full-schedule-genre'>{show.genres[0].name}</div><div className='full-schedule-genre'>{show.genres[1].name}</div></div> : 
          <div className='full-schedule-genres'><div className='full-schedule-genre'>{show.genres[0].name}</div><div className='full-schedule-genre'>{show.genres[1].name}</div><div className='full-schedule-genre'>{show.genres[2].name}</div></div>}
        <div className='full-schedule-details'>
          <p className='full-schedule-season'>S{show.nextEpisode ? show.nextEpisode.season_number : '-'}E{show.nextEpisode ? show.nextEpisode.episode_number : '-'}</p>
          <div className='full-schedule-network-img-container'>
          <img className='full-schedule-network-img' src={show.networks.length !== 0 ? `https://image.tmdb.org/t/p/w200${show.networks[0].logo_path}` : 'https://i.imgur.com/vNOeitC.png'} alt={show.networks.length !== 0 ? show.networks[0].name : 'No Logo Found'}></img>
          </div>
          </div>  
        <div className='full-schedule-buttons'>
          <div className='full-schedule-button'>Add</div>
          <div className='full-schedule-button' onClick={() => this.viewDetails(show)}>More</div>
        </div>
      </li>
      ));
    }
  

    let nextPage;
     if(this.props.pages.page < this.props.pages.total || !this.props.pages.page){
      nextPage = <button onClick={() => this.changeNextPage()} >Next Page</button>;
     }

    let prevPage;
    if(this.props.pages.page !== 1 || !this.props.pages.page){
      prevPage = <button onClick={() => this.changePrevPage()} >Previous Page</button>;
    }
    if(param.endsWith('today') === true){
      return(
        <main role='main' className='rex-main-page'>
        <div className='main-menu'>
        <h1>Television</h1>
        <div className='logo-container'>
          <img className='tv-logo' src='https://i.imgur.com/vNOeitC.png' alt='Rex TV'></img>
        </div>
        <p>What's on the tube?</p>
          <section className='full-schedule-categories'>
          <Link className='click-area' to='/rex/schedules/tv/today'><div className='full-schedule-category-active'>Airing Today:</div></Link>
            <Link className='click-area' to='/rex/schedules/tv/ontheair'><div className='full-schedule-category'>On The Air:</div></Link>
          </section>
          <section className='tv-schedule-container'>
            <div className='full-tv-schedule'>
              <ul className='main-list'>
                {today}
              </ul>
            </div>
            <div className='page-controls'>
              <div className='page-status'>{this.props.pages.page} out of {this.props.pages.total}</div>
            </div>
            {prevPage}
            {nextPage}
          </section>
        </div>
        {details}
      </main>
      )
    }
    else if(param.endsWith('ontheair') === true){
      return(
        <main role='main' className='rex-main-page'>
        <div className='main-menu'>
        <h1>Television</h1>
        <div className='logo-container'>
          <img className='tv-logo' src='https://i.imgur.com/vNOeitC.png' alt='Rex TV'></img>
        </div>
        <p>What's on the tube?</p>
          <section className='full-schedule-categories'>
            <Link className='click-area' to='/rex/schedules/tv/today'><div className='full-schedule-category'>Airing Today:</div></Link>
            <Link className='click-area' to='/rex/schedules/tv/ontheair'><div className='full-schedule-category-active'>On The Air:</div></Link>
          </section>
          <section className='tv-schedule-container'>
            <div className='full-tv-schedule'>
              <ul className='main-list'>
                {today}
              </ul>
            </div>
            <div className='page-controls'>
              <div className='page-status'>{this.props.pages.page} out of {this.props.pages.total}</div>
            </div>
            {prevPage}
            {nextPage}
          </section>
        </div>
        {details}
      </main>
      )
    }
  }
}

function mapStateToProps(state){
  return{
    movies: state.rex.movies,
    loading: state.rex.loading,
    quickRec: state.rex.quickRec,
    upcoming: state.rex.upcoming,
    schedule: state.rex.schedule,
    airingToday: state.rex.airingToday,
    nowPlaying: state.rex.nowPlaying,
    view: state.rex.view,
    pages: state.rex.pages
  }
}

export default connect(mapStateToProps)(FullSchedule);
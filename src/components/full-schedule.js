import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAiringTodayTV, fetchOnTheAirTV, closeDetails, viewDetails, fetchTVPage} from '../actions/rex';
import Details from './details';
import ContentRexFeedItem from './rexfeed';

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
        <ContentRexFeedItem media={show} index={index}/>
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
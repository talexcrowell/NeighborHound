import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchOnTheAirTV, closeDetails, viewDetails, fetchTVPage} from '../actions/rex';
import Details from './details';
import ScheduleList from './schedule-list';

export class OnTheAirFullSchedule extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchOnTheAirTV());
  }

  closeDetails(){
    this.props.dispatch(closeDetails());
  }

  viewDetails(media){
    this.props.dispatch(viewDetails(media));
  }

  changeNextPage(){
    let route = this.props.match.url;
    let schedule =  (route.endsWith('/today') === true ? 'today' : 'ontheair');
    const request ={
      reqPage: (this.props.pages.page + 1),
      schedule
    };
    window.scrollTo(0,0);
    this.props.dispatch(fetchTVPage(request));
  }

  changePrevPage(){
    let route = this.props.match.url;
    let schedule =  (route.endsWith('/today') === true ? 'today' : 'ontheair');
    const request ={
      reqPage: (this.props.pages.page - 1),
      schedule
    };
    this.props.dispatch(fetchTVPage(request));
  }
  

  render() {
    let schedule = this.props.schedule;

    let details;
    if(this.props.view !== null){
      details = <Details media={this.props.view} ></Details>
    }

    let list;
    
    if(this.props.loading === true){
      list = <img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />
    }
    else if(this.props.error !== null){
      list = (
      <div>
        <img className='loading-img' src='https://i.imgur.com/17UECkl.png' alt='Error :(' />
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>);
    }
    else{
      list = <ScheduleList media={schedule} nextPage={() => this.changeNextPage()} prevPage={() => this.changePrevPage()}/>
    }

      return(
        <main role='main' className='rex-main-page'>
        <div className='main-menu'>
        <h1>Television</h1>
        <div className='logo-container'>
          <img className='tv-logo' src='https://i.imgur.com/vNOeitC.png' alt='Rex TV'></img>
        </div>
        <h2>What's on the tube?</h2>
        <section className='full-schedule-categories'>
          <Link className='click-area' to='/rex/schedules/tv/today'><div className='full-schedule-category'>Within Next 24 Hours:</div></Link>
          <Link className='click-area' to='/rex/schedules/tv/ontheair'><div className='full-schedule-category-active'>On The Air:</div></Link>
        </section>
          {list}
        </div>
        {details}
      </main>
      )
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
    pages: state.rex.pages,
    error: state.rex.error
  }
}

export default connect(mapStateToProps)(OnTheAirFullSchedule);
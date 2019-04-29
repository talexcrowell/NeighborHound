import React from 'react';
import {connect} from 'react-redux';
import ContentRexFeedItem from './rexfeed';

export function SchuduleList (props){
  
  let listItem = props.media.map((show, index) => (
    <ContentRexFeedItem media={show} index={index}/>
  ));

  let nextPage;
  if(props.pages.page < props.pages.total || !props.pages.page){
    nextPage = <button onClick={() => props.nextPage()} >Next Page</button>;
  }

  let prevPage;
  if(props.pages.page !== 1 || !props.pages.page){
    prevPage = <button onClick={() => props.prevPage()} >Previous Page</button>;
  }

  return(
    <section className='tv-schedule-container'>
    <div className='full-tv-schedule'>
      <ul className='main-list'>
        {listItem}
      </ul>
    </div>
    <div className='page-controls'>
      <div className='page-status'>{props.pages.page} out of {props.pages.total}</div>
      {prevPage}
      {nextPage}
    </div>
  </section>
  );
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
  
export default connect(mapStateToProps)(SchuduleList);
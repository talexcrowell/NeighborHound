import React from 'react';
import {connect} from 'react-redux';
import { fetchMovies } from '../actions/rex';
import './main.css';
import ContentRexFeedItem from './rexfeed';

export class RexDashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    let movies = this.props.movies.map((movie, index) => (
      <ContentRexFeedItem media={movie} index={index} />
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<div className='loading'>Loading Feed...</div>);
    } else{
      newsFeed = (<ul className='rexfeed'>{movies}</ul>);
    }


    return(
      <main role='main' className='rex-main-page'>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    movies: state.rex.movies,
    loading: state.news.loading
  }
}

export default connect(mapStateToProps)(RexDashboard);
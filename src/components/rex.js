import React from 'react';
import {connect} from 'react-redux';
import { fetchMovies } from '../actions/rex';
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
      <div className='main-menu'>
      <h1>Here's a quick reccomendation...</h1>
        <div className='media'>
          <section className='media-img-container'>
            <img className='media-img' src={this.props.quickRec.img }></img>
          </section> 
          <h2>{this.props.quickRec.title}</h2>
          <p className='media-rating'>{'MovieDB: ' + this.props.quickRec.moviedbrating}</p>

        </div>
        <div className ='coming-soon-text'>
          <p className='csl'>There are SO many things to watch, to play, or to listen to its hard to discover something new. Sometimes its even harder to keep track of what you're currently trying to stay up to date with!</p>
          <p className='csl'> REX is where you go to track your media history, make your media wishlist, and discover more all together! With a massive database full of entertainment to choose from, come ask for a recommendation from REX!</p>
          <p className='csl'>Choose from movies, music, TV, anime, books, etc. The possibilities are endless!</p>
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
    quickRec: state.rex.quickRec
  }
}

export default connect(mapStateToProps)(RexDashboard);
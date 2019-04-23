import React from 'react';
import {connect} from 'react-redux';
import { fetchQuickReccommendation } from '../actions/rex';
import ContentRexFeedItem from './rexfeed';

export class RexMain extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchQuickReccommendation());
  }

  render() {
    let movies = this.props.movies.map((movie, index) => (
      <ContentRexFeedItem media={movie} index={index} />
    ));

    


    return(
      <main role='main' className='rex-main-page'>
      <div className='main-menu'>
        <div className ='rex-main-text'>
        <h2>Welcome to Rex</h2>
          <p className='csl'>There are SO many things to watch, to play, or to listen to its hard to discover something new. Sometimes its even harder to keep track of what you're currently trying to stay up to date with!</p>
          <p className='csl'> REX is where you go to track your media history, make your media wishlist, and discover more all together! With a massive database full of entertainment to choose from, come ask for a recommendation from REX!</p>
          <p className='csl'>Choose from movies, music, TV, anime, books, etc. The possibilities are endless!</p>
        </div>
        <div className='media'>
          <p>Here's a quick reccomendation...</p>
          <section className='main-media-img-container'>
            <img className='main-media-img' src={this.props.quickRec.img} alt={this.props.quickRec.title}></img>
          </section> 
          <h2>{this.props.quickRec.title}</h2>
          <p className='main-media-rating'>{'MovieDB: ' + this.props.quickRec.moviedbrating}</p>
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

export default connect(mapStateToProps)(RexMain);
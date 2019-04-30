import React from 'react';
import {connect} from 'react-redux';
import { fetchNews } from '../actions/news';
import  ContentFeedItem  from './feed';

export class News extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
  }

  render() {
    let news;
    if(this.props.loading === true){
      return
    } else{
      news = this.props.articles['general'];
    }
    
    let articles = news.map((item, index) => (
      <ContentFeedItem item={item} index={'news-'+index} page={'news'}/>
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='newsfeed'>{articles}</ul>);
    }

    return(
      <main role='main' className='news-page'>
        <section className='main-menu'>
          <h1 className='main-menu-title'>News</h1>
          <p className='main-menu-text'>Checkout today's top headlines!</p>
          <p className='main-menu-text'>Remember to click on the NeighborHound logo to return to the top of the feed</p>
          <section className='news-categories'>
            <div className='news-category-active'>General</div>
            <div className='news-category'>Technology</div>
            <div className='news-category'>Entertainment</div>
            <div className='news-category'>Science</div>
            <div className='news-category'>Business</div>
            <div className='news-category'>Health</div>
          </section>
        </section>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    articles: state.news.articles,
    loading: state.news.loading
  }
}

export default connect(mapStateToProps)(News);
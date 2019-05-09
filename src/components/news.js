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
    let paramCategory = this.props.match.params.category;
    if( paramCategory === 'all'){
      console.log('all!');
      news = this.props.articles;
    }
    else{
      paramCategory = this.props.match.url.replace('/fetch/news/', '');
      console.log(paramCategory);
      news = this.props.articles.filter(article => article.category === paramCategory)
      console.log(news);
    }
    console.log(paramCategory);
    // let feed= this.props.articles.filter(article => article.id=)
    let articles = news.map((item, index) => (
      <ContentFeedItem item={item} index={'news-'+index} page={'news'}/>
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='newsfeed'>{articles}</ul>);
    }

    let categoriesBar = (
      <section className='news-categories'>
        <div className='news-category-active'>All</div>
        <div className='news-category'>General</div>
        <div className='news-category'>Technology</div>
        <div className='news-category'>Science</div>
        <div className='news-category'>Business</div>
        <div className='news-category'>Health</div>
      </section>);

    return(
      <main role='main' className='news-page'>
        <section className='main-menu'>
          <h1 className='main-menu-title'>News</h1>
          <p className='main-menu-text'>Checkout today's top headlines!</p>
          <p className='main-menu-text'>Remember to click on the NeighborHound logo to return to the top of the feed</p>
          {categoriesBar}
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
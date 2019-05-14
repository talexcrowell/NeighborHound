import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchNews, fetchAllNewsFeed } from '../actions/news';
import  ContentFeedItem  from './feed';

export class News extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllNewsFeed());
    this.props.dispatch(fetchNews());
  }

  render() {
    let news;
    let paramCategory;

    if(this.props.match.url.endsWith('/news') === true){
      news = this.props.all;
    }  
    else {
      paramCategory = this.props.match.params.category.toLowerCase();
      news = this.props.articles.filter(article => article.category.toLowerCase() === paramCategory);
    }
    
    
    let articles = news.map((item, index) => (
      <ContentFeedItem item={item} index={index} page={'news'}/>
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='newsfeed'>{articles}</ul>);
    }

    let categoriesBar;
     
    if(!paramCategory){
      categoriesBar= (
        <section className='news-categories'>
          <Link to='/fetch/news'><div className='news-category-active'>All</div></Link>
          <Link to='/fetch/news/general'><div className='news-category'>General</div></Link>
          <Link to='/fetch/news/technology'><div className='news-category'>Technology</div></Link>
          <Link to='/fetch/news/science'><div className='news-category'>Science</div></Link>
          <Link to='/fetch/news/business'><div className='news-category'>Business</div></Link>
          <Link to='/fetch/news/health'><div className='news-category'>Health</div></Link>
        </section>);
    }
    else if(paramCategory === 'general'){
      categoriesBar= (
        <section className='news-categories'>
          <Link to='/fetch/news'><div className='news-category'>All</div></Link>
          <Link to='/fetch/news/general'><div className='news-category-active'>General</div></Link>
          <Link to='/fetch/news/technology'><div className='news-category'>Technology</div></Link>
          <Link to='/fetch/news/science'><div className='news-category'>Science</div></Link>
          <Link to='/fetch/news/business'><div className='news-category'>Business</div></Link>
          <Link to='/fetch/news/health'><div className='news-category'>Health</div></Link>
        </section>);
    }
    else if(paramCategory === 'technology'){
      categoriesBar= (
        <section className='news-categories'>
          <Link to='/fetch/news'><div className='news-category'>All</div></Link>
          <Link to='/fetch/news/general'><div className='news-category'>General</div></Link>
          <Link to='/fetch/news/technology'><div className='news-category technology'>Technology</div></Link>
          <Link to='/fetch/news/science'><div className='news-category'>Science</div></Link>
          <Link to='/fetch/news/business'><div className='news-category'>Business</div></Link>
          <Link to='/fetch/news/health'><div className='news-category'>Health</div></Link>
        </section>);
    }
    else if(paramCategory === 'science'){
      categoriesBar= (
        <section className='news-categories'>
          <Link to='/fetch/news'><div className='news-category'>All</div></Link>
          <Link to='/fetch/news/general'><div className='news-category'>General</div></Link>
          <Link to='/fetch/news/technology'><div className='news-category'>Technology</div></Link>
          <Link to='/fetch/news/science'><div className='news-category science'>Science</div></Link>
          <Link to='/fetch/news/business'><div className='news-category'>Business</div></Link>
          <Link to='/fetch/news/health'><div className='news-category'>Health</div></Link>
        </section>);
    }
    else if(paramCategory === 'business'){
      categoriesBar= (
        <section className='news-categories'>
          <Link to='/fetch/news'><div className='news-category'>All</div></Link>
          <Link to='/fetch/news/general'><div className='news-category'>General</div></Link>
          <Link to='/fetch/news/technology'><div className='news-category'>Technology</div></Link>
          <Link to='/fetch/news/science'><div className='news-category'>Science</div></Link>
          <Link to='/fetch/news/business'><div className='news-category business'>Business</div></Link>
          <Link to='/fetch/news/health'><div className='news-category'>Health</div></Link>
        </section>);
    }
    else if(paramCategory === 'health'){
      categoriesBar= (
        <section className='news-categories'>
          <Link to='/fetch/news'><div className='news-category'>All</div></Link>
          <Link to='/fetch/news/general'><div className='news-category'>General</div></Link>
          <Link to='/fetch/news/technology'><div className='news-category'>Technology</div></Link>
          <Link to='/fetch/news/science'><div className='news-category'>Science</div></Link>
          <Link to='/fetch/news/business'><div className='news-category'>Business</div></Link>
          <Link to='/fetch/news/health'><div className='news-category health'>Health</div></Link>
        </section>);
    }

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
    all: state.news.all,
    articles: state.news.articles,
    loading: state.news.loading
  }
}

export default connect(mapStateToProps)(News);
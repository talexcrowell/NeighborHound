import React from 'react';
import {connect} from 'react-redux';
import { fetchNews } from '../actions/news';
import  ContentNewsFeedItem  from './newsfeed';
import {Filter} from './filter';

export class News extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
 
  }

  render() {
    let articles = this.props.articles.map((article, index) => (
      <ContentNewsFeedItem article={article} index={index} />
    ));

    let filter = (<Filter sources={articles} />);

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='newsfeed'>{articles}</ul>);
    }

    return(
      <main role='main' className='news-page'>
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
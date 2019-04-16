import React from 'react';
import {connect} from 'react-redux';
import { fetchNews } from '../actions/news';
import './main.css';
import { ContentNewsFeedItem } from './newsfeed';

export class News extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
 
  }

  render() {
    let articles = this.props.articles.map((article, index) => (
      <ContentNewsFeedItem article={article} index={index} />
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<div className='loading'>Loading Feed...</div>);
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
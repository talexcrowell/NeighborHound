import React from 'react';
import {connect} from 'react-redux';
import { fetchNews } from '../actions/news';
import { fetchCommunity } from '../actions/community';
import './main.css';
import { ContentNewsFeedItem } from './newsfeed';
import { ContentCommunityFeedItem } from './communityfeed';

export class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
    this.props.dispatch(fetchCommunity());
  }

  render() {
    let posts = this.props.posts.map((post, index) => (
      <ContentCommunityFeedItem post={post} index={index} />
    ));

    let articles = this.props.articles.map((article, index) => (
      <ContentNewsFeedItem article={article} index={index} />
    ));

    let combinedMedia = posts.concat(articles);

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<div className='loading'>Loading Feed...</div>);
    } else{
      newsFeed = (<ul className='newsfeed'>{combinedMedia}</ul>);
    }

    return(
      <main role='main' className='main-page'>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    articles: state.news.articles,
    posts: state.community.posts,
    loading: state.news.loading
  }
}

export default connect(mapStateToProps)(Main);
import React from 'react';
import {connect} from 'react-redux';
import { fetchNews } from '../actions/news';
import { fetchCommunity } from '../actions/community';
import ContentNewsFeedItem  from './newsfeed';
import ContentCommunityFeedItem  from './communityfeed';

export class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
    this.props.dispatch(fetchCommunity());
  }


  render() {

    function mainStream(arr1, arr2){
      let output=[];
      let longer;
      if(arr1.length > arr2.length){
        longer= arr1.length;
      } else{
        longer = arr2.length;
      }
      for(let i=0; i<longer; i++){
        output.push(arr1[i]);
        output.push(arr2[i]);
      }
      return output;
    }

    let posts = this.props.posts.map((post, index) => (
      <ContentCommunityFeedItem post={post} index={index} />
    ));

    let articles = this.props.articles.map((article, index) => (
      <ContentNewsFeedItem article={article} index={index} />
    ));

    let combinedMedia = mainStream(posts,articles); 

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
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
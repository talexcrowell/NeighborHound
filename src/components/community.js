import React from 'react';
import {connect} from 'react-redux';
import { fetchCommunity} from '../actions/community';
import  ContentCommunityFeedItem from './communityfeed';
import Filter from './filter';

export class Community extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCommunity());
  }
  
  render() {

    let posts = this.props.posts.map((post, index) => (
      <ContentCommunityFeedItem  post={post} index={index} />
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<div className='loading'>Loading Feed...</div>);
    } else{
      newsFeed = (<ul className='communityfeed'>{posts}</ul>);
    }

    return(
      <main role='main' className='community-page'>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    posts: state.community.posts,
    loading: state.news.loading
  }
}

export default connect(mapStateToProps)(Community);
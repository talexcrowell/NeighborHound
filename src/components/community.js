import React from 'react';
import {connect} from 'react-redux';
import { fetchCommunity} from '../actions/community';
import  ContentFeedItem from './feed';

export class Community extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCommunity());
  }
  
  render() {
    let posts = this.props.posts.map((item, index) => (
      <ContentFeedItem  item={item} index={'community-'+index} page={'community'} />
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='communityfeed'>{posts}</ul>);
    }

    return(
      <main role='main' className='community-page'>
        <section className='main-menu'>
          <h1 className='main-menu-title'>Community</h1>
          <p className='main-menu-text'>Checkout hot and trending posts from communities like Reddit and Imgur!</p>
          <p className='main-menu-text'>Remember to click on the NeighborHound logo to return to the top of the feed</p>
        </section>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    posts: state.community.posts,
    loading: state.community.loading,
    search: state.main.searchQuery
  }
}

export default connect(mapStateToProps)(Community);
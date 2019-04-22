import React from 'react';
import {connect} from 'react-redux';
import {fetchMainFeed} from '../actions/main';
import ContentFeedItem from './feed';

export class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMainFeed());
  }


  render() {
    
    let feed = this.props.feed.map((item, index) => (
        <ContentFeedItem item={item} index={index} />
      ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='newsfeed'>{feed}</ul>);
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
    feed: state.main.feed,
    loading: state.main.loading
  }
}

export default connect(mapStateToProps)(Main);
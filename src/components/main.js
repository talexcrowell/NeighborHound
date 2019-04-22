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
        <ContentFeedItem item={item} index={'main-'+index} page={'main'}/>
      ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='mainfeed'>{feed}</ul>);
    }

    return(
      <main role='main' className='main-page'>
        <div className='main-page-content'>
          <section className='main-menu'>
            <h1 className='main-menu-title'>Welcome to NeighborHound</h1>
            <p className='main-menu-text'>NeighborHound collects all upcoming news and fresh community content to keep you informed and entertained</p>
            <p className='main-menu-text'>Let's see what NeighborHound has fetched today</p>
          </section>
          {newsFeed}
        </div>
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
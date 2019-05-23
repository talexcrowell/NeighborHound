import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import  ContentFeedItem  from './feed';
import {generateCustom, clearSearch} from '../actions/community'

export class CustomFeed extends React.Component {
  componentWillUnmount(){
    this.props.dispatch(clearSearch());
  }

  handleSubmit(event){
    event.preventDefault()
    let searchQuery = {
      query: event.target.query.value,
    }
    return this.props.dispatch(generateCustom(searchQuery));
  }

  render() {

    let articles;
    
    if(this.props.search.length === 0){
      articles = <img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />;
    }
    else{
      articles = this.props.search.map((item, index) => (
        <ContentFeedItem item={item} index={index} page={'news'}/>
      ));
    }

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />);
    } else{
      newsFeed = (<ul className='newsfeed'>{articles}</ul>);
    }
    return(
      <main role='main' className='community-page'>
        <section className='main-menu'>
            <h1>Add subreddits</h1>
            <form className='search-form' onSubmit={ e => this.handleSubmit(e)}>
              <input className='search-query' id='query' placeholder='Enter subreddit here...'></input>
              <button className='search-link'>Add</button>
            </form>
        </section>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    search: state.community.search,
    loading: state.community.loading,
  }
}

export default connect(mapStateToProps)(CustomFeed);
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
    let subreddits;


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
            <form className='search-form' onSubmit={ e => this.handleSubmit(e)}>
            <h1>Add News</h1>
              <input className='search-query' id='query' placeholder='Add topic'></input>
              <select className='search-sources' id='sources'>
                <option className='search-source' value='general'>General</option>
                <option className='search-source' value='technology'>Technology</option> 
                <option className='search-source' value='science'>Science</option>             
                <option className='search-source' value='business'>Business</option>              
                <option className='search-source' value='health'>Health</option>               
              </select>
              <button className='search-link'>Add</button>
            </form>
            <form className='search-form' onSubmit={ e => this.handleSubmit(e)}>
            <h1>Add Community</h1>
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
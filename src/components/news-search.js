import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {searchNews} from '../actions/news';
import  ContentFeedItem  from './feed';

export class NewsSearch extends React.Component {
  
  handleSubmit(event){
    event.preventDefault()
    let searchQuery = {
      query: event.target.query.value
    }
    return this.props.dispatch(searchNews(searchQuery));
  }

  handleClear(event){
    event.preventDefault()
    console.log(event.target.query);
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
      <main role='main' className='news-page'>
        <section className='main-menu'>
        <Link to='/fetch/news'><div className='search-link'>Back to News</div></Link>
            <h1>What are you looking for?</h1>
            <form className='search-form' onSubmit={ e => {this.handleSubmit(e)}}>
              <input className='search-query' id='query' type='text' required></input>
              <button className='search-link' type='submit'>Search</button>
              <button className='search-link' type='submit' onClick={e => this.handleClear(e)}>Clear</button>
            </form>
        </section>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    search: state.news.search,
    loading: state.news.loading,
  }
}

export default connect(mapStateToProps)(NewsSearch);
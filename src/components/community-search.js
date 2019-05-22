import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import  ContentFeedItem  from './feed';
import {searchCommunity} from '../actions/community'

export class CommunitySearch extends React.Component {

  handleSubmit(event){
    event.preventDefault()
    let searchQuery = {
      query: event.target.query.value,
      nsfw: event.target.nsfw.checked
    }
    console.log(searchQuery);
    // return this.props.dispatch(searchCommunity(searchQuery));
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
        <Link to='/fetch/community'><div className='search-link'>Back to Community</div></Link>
            <h1>What are you looking for?</h1>
            <form className='search-form' onSubmit={ e => this.handleSubmit(e)}>
              <input className='search-query' id='query'></input>
              <select className='search-sources'>
                <option className='search-source' value='reddit'>reddit</option>
                <option className='search-source' value='youtube'>youtube</option> 
                <option className='search-source' value='imgur'>imgur</option>             
                <option className='search-source' value='gfycat'>gfycat</option>              
                <option className='search-source' value='vimeo'>vimeo</option>
                <option className='search-source' value='deviantart'>deviantart</option>               
              </select>
              <input className='nsfw-filter' id='nsfw' type='checkbox' defaultChecked></input>
              <label>NSFW?</label>
              <button className='search-link'>Search</button>
            </form>
            {newsFeed}
        </section>
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

export default connect(mapStateToProps)(CommunitySearch);
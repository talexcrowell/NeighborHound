import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import  ContentFeedItem  from './feed';
import {searchCommunity, clearSearch} from '../actions/community'

export class CommunitySearch extends React.Component {
  componentWillUnmount(){
    this.props.dispatch(clearSearch());
  }

  handleSubmit(event){
    event.preventDefault()
    let searchQuery = {
      query: event.target.query.value.replace(' ', '+'),
      source: event.target.sources.value,
      nsfw: event.target.nsfw.checked
    }
    return this.props.dispatch(searchCommunity(searchQuery));
  }

  render() {
    let articles;
    
    if(this.props.search.length === 0){
      articles = <img className='loading-img' src='https://i.imgur.com/3xw03XE.png' alt='Gathering Data...' />;
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
            <p>**Search results aren't filtered for NSFW posts, please serach at your discretion!**</p>
            <form className='search-form' onSubmit={ e => this.handleSubmit(e)}>
              <input className='search-query' id='query'></input>
              <select className='search-sources' id='sources'>
                <option className='search-source' value='reddit'>reddit</option>
                <option className='search-source' value='youtube'>youtube</option> 
                <option className='search-source' value='imgur'>imgur</option>             
                <option className='search-source' value='gfycat'>gfycat</option>              
                <option className='search-source' value='vimeo'>vimeo</option>
                <option className='search-source' value='deviantart'>deviantart</option>               
              </select>
              <button className='search-link'>Search</button>
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

export default connect(mapStateToProps)(CommunitySearch);
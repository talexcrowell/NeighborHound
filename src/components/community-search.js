import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class CommunitySearch extends React.Component {
  componentDidMount() {
    
  }
  
  render() {
    

    return(
      <main role='main' className='community-page'>
        <section className='main-menu'>
        <Link to='/fetch/community'><div className='community-search-link'>Back to Community</div></Link>
          <h1>General Search</h1>
          <p>Search Query</p>
          <p>Sources</p>
          <p>Media Type</p>
          <h1>Reaction Gifs</h1>
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
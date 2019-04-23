import React from 'react';
import {connect} from 'react-redux';
import {fetchMediaCatalog} from '../actions/rex';
import ContentRexFeedItem from './rexfeed';

export class Catalog extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMediaCatalog());
  }

  render(){
    let catalog;

    let media = this.props.catalog.map((item, index) => (
      <ContentRexFeedItem media={item} index={index} />
    ));

    if(this.props.loading === true){
      catalog = (<div className='loading'>Loading Catalog...</div>);
    } else{
      catalog = (<ul className='rexfeed'>{media}</ul>);
    }

    return(
      <main className='rex-main'>
        <div className='main-menu'>
          <div className ='rex-main-text'>
            <h2>Catalog</h2>
            <p className='csl'>Explore our massive media database</p>            <div className='main-menu-nav-functions'>
            <input className='main-search' type='text' placeholder='Search Catalog For Title...' onChange={event => this.search(event)}></input>
            <div className='filter-img'>
              <img className='filter-icon' src='https://i.imgur.com/HQtwQg6.png'alt='filter' onClick={() => this.createfilter()}></img>
            </div>
          </div>
          </div>
          {catalog}
        </div>
      </main>
    ); 
  }
}

function mapStateToProps(state){
  return{
    catalog: state.rex.catalog,
    loading: state.news.loading,
    quickRec: state.rex.quickRec
  }
}

export default connect(mapStateToProps)(Catalog);
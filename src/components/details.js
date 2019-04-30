import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {closeDetails, fetchTVShowDetails} from '../actions/rex'

export class Details extends React.Component {
  closeDetails(){
    this.props.dispatch(closeDetails());
  }

  viewFullDetails(id, type){
    let response ={
      id,
      type
    };
    this.props.dispatch(fetchTVShowDetails(response));
  }
  render(){
    let genres;
    if(this.props.media.genres.length < 1 ){
      genres = <div className='full-schedule-details-genres'></div>
    } 
    else if(this.props.media.genres.length < 2){
      genres = (
        <div className='full-schedule-details-genres'>
          <div className='full-schedule-details-genre'>
          {this.props.media.genres[0].name}
          </div>
        </div>);
    }
    else if(this.props.media.genres.length < 3 ) {
      genres = (
        <div className='full-schedule-details-genres'>
          <div className='full-schedule-details-genre'>
            {this.props.media.genres[0].name}
          </div>
          <div className='full-schedule-details-genre'>
            {this.props.media.genres[1].name}
          </div>
        </div>);
    }
    else if(this.props.media.genres.length === 3 ){
      genres = (<div className='full-schedule-details-genres'>
        <div className='full-schedule-details-genre'>
          {this.props.media.genres[0].name}
        </div>
        <div className='full-schedule-details-genre'>
          {this.props.media.genres[1].name}
        </div>
        <div className='full-schedule-details-genre'>
          {this.props.media.genres[2].name}
        </div>
      </div>);
    }    
    return(
      <div className="details-modal">
        <div className="details-modal-content">
          <span className="details-close" onClick={() => this.closeDetails()}>&times;</span>
          <div className='main-media-img-container'>
          <img className='main-media-img' src={this.props.media.img.includes('null') === false ? this.props.media.img : 'https://i.imgur.com/vNOeitC.png'} alt={this.props.media.title}></img>
          </div>
          <div className='details-info-container'>
            <h1 className='details-title'>{this.props.media.title}</h1>
            {genres}
            <h3 className='details-info-label'>Next Episode</h3>
            <p className='details-info-title'>"{this.props.media.nextEpisode.name}"</p>
            <p className='details-info'>S{this.props.media.nextEpisode.season_number}E{this.props.media.nextEpisode.episode_number}</p>
            <p className='details-info'>{this.props.media.nextEpisode.air_date}</p>
            <p className='details-overview'>{this.props.media.nextEpisode.overview ? "\""+ this.props.media.nextEpisode.overview +"\"" : "No Episode Overview Available"}</p>
          </div>
          <div className='details-buttons'>
            <div className='details-button'>Add to Watchlist</div>            
            <Link to={`/rex/catalog/${this.props.media.type}/${this.props.media.movieDbId}`}><div className='details-button' onClick={() => this.viewFullDetails(this.props.media.movieDbId, 'tv')}>View Catalog Info</div></Link>
          </div>
        </div>
      </div>);
  }
}

function mapStateToProps(state){
  return{
    catalog: state.rex.catalog,
    loading: state.news.loading,
    quickRec: state.rex.quickRec,
    view: state.rex.view
  }
}

export default connect(mapStateToProps)(Details);

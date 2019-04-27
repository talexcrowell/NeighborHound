import React from 'react';
import {connect} from 'react-redux';
import {closeDetails} from '../actions/rex'

export class Details extends React.Component {
  componentDidMount(){
    // this.props.dispatch(getMediaDetails())
  }

  closeDetails(){
    this.props.dispatch(closeDetails());
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
          <h2>{this.props.media.title}</h2>
          {genres}
          <p className='full-schedule-season'>S{this.props.media.nextEpisode.season_number}E{this.props.media.nextEpisode.episode_number}</p>
          <p>{this.props.media.nextEpisode.air_date}</p>
          <p>{this.props.media.nextEpisode.overview ? this.props.media.nextEpisode.overview : "No Summary Available"}</p>
          <div>View Show Info</div>
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

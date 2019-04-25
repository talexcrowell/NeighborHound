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
    return(
      <div className="details-modal">
        <div className="details-modal-content">
          <span className="details-close" onClick={() => this.closeDetails()}>&times;</span>
          <h2>{this.props.media.title}</h2>
          <p className='full-schedule-season'>S{this.props.media.nextEpisode.season_number}E{this.props.media.nextEpisode.episode_number}</p>
          <p>{this.props.media.nextEpisode.air_date}</p>
          <p>{this.props.media.nextEpisode.overview}</p>
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

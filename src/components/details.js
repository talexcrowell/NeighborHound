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
          <p>{this.props.media.genres}</p>
          <p>{this.props.media.moviedbrating}</p>
          <p>{this.props.media.overview}</p>
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

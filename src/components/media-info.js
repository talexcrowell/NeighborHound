import React from 'react';
import {connect} from 'react-redux';
import {closeDetails} from '../actions/rex';

export class MediaInfo extends React.Component{
  componentWillUnmount(){
    this.props.dispatch(closeDetails());
  }

  render(){

    let genres;
    if(this.props.loading === false){
      if(this.props.view.genres.length < 1 ){
        genres = <div className='full-media-details-genres'></div>
      } 
      else if(this.props.view.genres.length < 2){
        genres = (
          <div className='full-media-details-genres'>
            <div className='full-media-details-genre'>
            {this.props.view.genres[0].name}
            </div>
          </div>);
      }
      else if(this.props.view.genres.length < 3 ) {
        genres = (
          <div className='full-media-details-genres'>
            <div className='full-media-details-genre'>
              {this.props.view.genres[0].name}
            </div>
            <div className='full-media-details-genre'>
              {this.props.view.genres[1].name}
            </div>
          </div>);
      }
      else if(this.props.view.genres.length === 3 ){
        genres = (<div className='full-media-details-genres'>
          <div className='full-media-details-genre'>
            {this.props.view.genres[0].name}
          </div>
          <div className='full-media-details-genre'>
            {this.props.view.genres[1].name}
          </div>
          <div className='full-media-details-genre'>
            {this.props.view.genres[2].name}
          </div>
        </div>);
      } 
    }

    if(this.props.loading === true){
      return(
        <img className='loading-img' src='https://i.imgur.com/4WYBRRN.png' alt='Gathering Data...' />
      );
    }
    return (
      <main role='main' className='main-page'>
        <div className='main-page-content'>
          <section className='main-menu'>
            <section className='full-media-details-title-bar'>
              <h1 className='full-media-details-title'>{this.props.view ? this.props.view.title : 'NONE'}</h1>
              <div className='full-media-user-controls'>
                <div className='full-media-user-control'>Like</div>
                <div className='full-media-user-control'>Dislike</div>
                <div className='full-media-user-control'>Add to List</div>
              </div>
            </section>
            <section className='full-media-details-general'>
              <div className='full-media-img-container'>
                <img className='full-media-img' src={this.props.view.img} alt='placeholder'></img>
              </div>
              {genres}
              <div className='full-media-details-general-details'>
                <label className='full-media-detail-label'>Details</label>
                <div className='full-media-detail'>Country: {this.props.view.country}</div>
                <div className='full-media-detail'>Language: {this.props.view.language}</div>
                <div className='full-media-detail'>First Aired: {this.props.view.released}</div>
                <div className='full-media-detail'>Type: {this.props.view.showType}</div>
                <div className='full-media-detail'>Runtime: {this.props.view.runtime} mins</div>
                <div className='full-media-detail'>Seasons: {this.props.view.totalSeasons}</div>
                <div className='full-media-detail'>Episodes: {this.props.view.totalEpisodes}</div>
                <div className='full-media-detail'>Status: {this.props.view.status}</div>
              </div>
            </section>
            <section className='full-media-details-more'>
              <label className='full-media-detail-label'>Preview</label>
              <iframe title='full-media-details-video' className='full-media-details-video' src={`https://www.youtube.com/embed/${this.props.view.videos.key}`}>
              </iframe>
              <label className='full-media-detail-label'>Overview</label>
              <div className='full-media-details-overview'>{this.props.view.overview}</div>
              <section className='full-media-details-season-guide'>
                <h3>SEASON GUIDE PLACEHOLDER</h3>
              </section>
            </section>
          </section>
        </div>
      </main>  
    );
  }
}

function mapStateToProps(state){
  return{
    view: state.rex.view,
    loading: state.rex.loading
  }
}

export default connect(mapStateToProps)(MediaInfo);
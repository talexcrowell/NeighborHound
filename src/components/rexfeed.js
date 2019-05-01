import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {viewDetails, fetchTVShowDetails} from '../actions/rex';

export class ContentRexFeedItem extends React.Component {
  viewDetails(media){
    this.props.dispatch(viewDetails(media));
  }

  viewFullDetails(id, type){
    let response ={
      id,
      type
    };
    this.props.dispatch(fetchTVShowDetails(response));
  }

   render(){
    let param = window.location.href;

    let genres;
    if(this.props.media.genres.length < 1 ){
      genres = (<div className='full-schedule-genres'>
      </div>);
    } 
    else if(this.props.media.genres.length < 2){
      genres = (<div className='full-schedule-genres'>
          <div className='full-schedule-genre'>
          {this.props.media.genres[0].name}
          </div>
        </div>);
    }
    else if(this.props.media.genres.length < 3 ) {
      genres = (<div className='full-schedule-genres'>
          <div className='full-schedule-genre'>
            {this.props.media.genres[0].name}
          </div>
          <div className='full-schedule-genre'>
            {this.props.media.genres[1].name}
          </div>
        </div>);
    }
    else if(this.props.media.genres.length === 3 ){
      genres = (<div className='full-schedule-genres'>
        <div className='full-schedule-genre'>
          {this.props.media.genres[0].name}
        </div>
        <div className='full-schedule-genre'>
          {this.props.media.genres[1].name}
        </div>
        <div className='full-schedule-genre'>
          {this.props.media.genres[2].name}
        </div>
      </div>);
    }
    
    let catalogGenres;
    if(this.props.media.genres.length < 1 ){
      catalogGenres = (<div className='catalog-media-genre-container'>
      </div>);
    } 
    else if(this.props.media.genres.length < 2){
      catalogGenres = (<div className='catalog-media-genre-container'>
          <div className='catalog-media-genre'>
          {this.props.media.genres[0].name}
          </div>
        </div>);
    }
    else if(this.props.media.genres.length < 3 ) {
      catalogGenres = (<div className='catalog-media-genre-container'>
          <div className='catalog-media-genre'>
            {this.props.media.genres[0].name}
          </div>
          <div className='catalog-media-genre'>
            {this.props.media.genres[1].name}
          </div>
        </div>);
    }
    else if(this.props.media.genres.length === 3 ){
      catalogGenres = (<div className='catalog-media-genre-container'>
        <div className='catalog-media-genre'>
          {this.props.media.genres[0].name}
        </div>
        <div className='catalog-media-genre'>
          {this.props.media.genres[1].name}
        </div>
        <div className='catalog-media-genre'>
          {this.props.media.genres[2].name}
        </div>
      </div>);
    }  
  
   
    if(param.endsWith('/catalog')){
      return(
        <li className='catalog-media' id={this.props.media.id} key ={'media'+ this.props.media.sourceitemid}>
          <div className='catalog-media-img-container'>
            <img className='catalog-media-img' src={this.props.media.img} alt={this.props.media.title} />
          </div>
          <section className='catalog-media-description'>
            <div className='catalog-media-title-genres'>
            <p className='catalog-media-title'>{this.props.media.title}</p>
            {catalogGenres}
            </div>
            <div className='catalog-media-type'>
              <img className='catalog-media-type-img' src='https://i.imgur.com/vNOeitC.png' alt='placeholder'></img>
            </div>
            <div className='catalog-media-region'>Region</div>
          </section>
          <section className='catalog-media-controls'>
            <div className='catalog-media-button' >Add</div>
          <Link to={`/rex/catalog/tv/${this.props.media.id}`}><div className='catalog-media-button' onClick={() => this.viewFullDetails(this.props.media.moviedbid, 'tv')}>More Info</div></Link>
          </section>
        </li>)
    }
    else if(param.endsWith('/today')){
      return(
      <li className='full-schedule-card' key={'airing-'+this.props.index}>
        <div className='full-schedule-general-info'>
        <img className='full-schedule-img' src={this.props.media.img.includes('null') === false ? this.props.media.img : 'https://i.imgur.com/vNOeitC.png'} alt={this.props.media.title}></img>
        <p className='full-schedule-title'>{this.props.media.title.length < 40 ? this.props.media.title : this.props.media.title.slice(0,40)+'...'}</p>
        {genres}
        </div>
        <div className='full-schedule-details'>
          <p className='full-schedule-season'>S{this.props.media.nextEpisode ? this.props.media.nextEpisode.season_number : '-'}E{this.props.media.nextEpisode ? this.props.media.nextEpisode.episode_number : '-'}</p>
          <div className='full-schedule-network-img-container'>
          <img className='full-schedule-network-img' src={this.props.media.networks.length !== 0 ? `https://image.tmdb.org/t/p/w200${this.props.media.networks[0].logo_path}` : 'https://i.imgur.com/vNOeitC.png'} alt={this.props.media.networks.length !== 0 ? this.props.media.networks[0].name : 'No Logo Found'}></img>
          </div>
          </div>  
        <div className='full-schedule-buttons'>
          <div className='full-schedule-button'>Add</div>
          <div className='full-schedule-button' onClick={() => this.viewDetails(this.props.media)}>More</div>
        </div>
      </li>)
    }
    else if(param.endsWith('/ontheair')){
      return(
        <li className='full-schedule-card' key={'airing-'+this.props.index}>
        <div className='full-schedule-general-info'>
        <img className='full-schedule-img' src={this.props.media.img.includes('null') === false ? this.props.media.img : 'https://i.imgur.com/vNOeitC.png'} alt={this.props.media.title}></img>
        <p className='full-schedule-title'>{this.props.media.title.length < 40 ? this.props.media.title : this.props.media.title.slice(0,40)+'...'}</p>
        {genres}
        </div>
        <div className='full-schedule-details'>
          <p className='full-schedule-season'>S{this.props.media.nextEpisode ? this.props.media.nextEpisode.season_number : '-'}E{this.props.media.nextEpisode ? this.props.media.nextEpisode.episode_number : '-'}</p>
          <div className='full-schedule-network-img-container'>
          <img className='full-schedule-network-img' src={this.props.media.networks.length !== 0 ? `https://image.tmdb.org/t/p/w200${this.props.media.networks[0].logo_path}` : 'https://i.imgur.com/vNOeitC.png'} alt={this.props.media.networks.length !== 0 ? this.props.media.networks[0].name : 'No Logo Found'}></img>
          </div>
          </div>  
        <div className='full-schedule-buttons'>
          <div className='full-schedule-button'>Add</div>
          <div className='full-schedule-button' onClick={() => this.viewDetails(this.props.media)}>More</div>
        </div>
      </li>)
    }
    else{
      let img= (<img className='media-img' src={this.props.media.img} alt={this.props.media.title} />);
      return(
        <li className='media' id={this.props.media.id+'-'+this.props.media.sourceitemid} key ={'media'+ this.props.media.sourceitemid}>
          <a target="_blank" rel="noopener noreferrer" href={this.props.media.url}>
            <div className='media-img-container'>
              {img}
            </div>
            <section className='media-description'>
              <p className='media-title'>{this.props.media.title}</p>
              <p className='media-genre'>Genre1, Genre2, Genre3</p>
            </section>
          </a>
        </li>
        )
    }
  }
}

export default connect()(ContentRexFeedItem);
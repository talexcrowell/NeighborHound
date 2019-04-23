import React from 'react';
import {connect} from 'react-redux';

export class ContentRexFeedItem extends React.Component {
   render(){
    let param = window.location.href;
   
    if(param.endsWith('/catalog')){
      return(
        <li className='catalog-media' id={this.props.media.id+'-'+this.props.media.sourceitemid} key ={'media'+ this.props.media.sourceitemid}>
        <div className='catalog-media-type'></div>
          <div className='catalog-media-img-container'>
            <img className='catalog-media-img' src={this.props.media.img} alt={this.props.media.title} />
          </div>
          <section className='catalog-media-description'>
            <p className='catalog-media-title'>{this.props.media.title}</p>
            <p className='catalog-media-genre'>Genre1, Genre2, Genre3</p>
            <p className='catalog-media-rating'>{'movieDB: '+this.props.media.moviedbrating}</p>
          </section>
          <section className='catalog-media-controls'>
            <p className='catalog-media-button' >Add To Watchlist</p>
            <p className='catalog-media-button' >Watched</p>
            <p className='catalog-media-button' >More Info</p>
          </section>
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
import React from 'react';
import {connect} from 'react-redux';

export function ContentRexFeedItem (props) {
  
    let img= (<img className='media-img' src={props.media.img} alt={props.media.title} />);
    return(
      <li className='media' id={props.media.id+'-'+props.media.sourceitemid} key ={'media'+ props.media.sourceitemid}>
        <a target="_blank" rel="noopener noreferrer" href={props.media.url}>
          <div className='media-img-container'>
            {img}
          </div>
          <section className='media-description'>
            <p className='media-title'>{props.media.title}</p>
            <p className='media-genre'>Genre1, Genre2, Genre3</p>
          </section>
          <div className='media-source'>{props.media.source}</div>
        </a>
      </li>
    )
}

export default connect()(ContentRexFeedItem);
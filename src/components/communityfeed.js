import React from 'react';
import {connect} from 'react-redux';

export function ContentCommunityFeedItem (props) {
    return(
      <li className='post' key ={props.index}>
        <div className='img-container'>
          <img className='article-img' src={props.post.img} alt={props.post.title} />
        </div>
        <section className='article-description'>
          <h3 className='article-title'>{props.post.title}</h3>
          <a target="_blank" rel="noopener noreferrer" href={props.post.url}>View</a>
        </section>
      </li>
    )
}

export default connect()(ContentCommunityFeedItem);
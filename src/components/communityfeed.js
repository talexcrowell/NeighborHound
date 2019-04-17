import React from 'react';
import {connect} from 'react-redux';

export function ContentCommunityFeedItem (props) {

    return(
      <li className='post' key ={props.index}>
        <div className='post-source'>reddit.com</div>
        <div className='post-interest'></div>
        <div className='img-container'>
          <img className='post-img' src={props.post.img} alt={props.post.title} />
        </div>
        <a target="_blank" rel="noopener noreferrer" href={props.post.url}>
          <section className='post-description'>
          <h3 className='post-title'>{props.post.title}</h3>
          </section>
        </a>
      </li>
    )
}

export default connect()(ContentCommunityFeedItem);
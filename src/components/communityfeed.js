import React from 'react';
import {connect} from 'react-redux';

export function ContentCommunityFeedItem (props) {
    let media;
    if(props.post.type === 'video/mp4' || props.post.type === 'video/webm'){
      media = (
        <a target="_blank" rel="noopener noreferrer" href={props.post.url}>
        <div className='img-container'>
          <video autoPlay loop muted controls className='post-mp4'>
            <source src={props.post.img} type={props.post.type} />
          </video>
        </div>
      </a>);
    } 
    else if(props.post.type === 'article'){
      media = (
        <a target="_blank" rel="noopener noreferrer" href={props.post.url}>
          <div className='post-article-container'>
            <img className='post-article-img' src='https://i.imgur.com/ty6YjaL.png' alt={props.post.title} />
          </div>
        </a>);
    }
    else{
      media = (
        <a target="_blank" rel="noopener noreferrer" href={props.post.url}>
          <div className='img-container'>
            <img className='post-img' src={props.post.img} alt={props.post.title} />
          </div>
        </a>);
    }

    return(
      <li className='post' key ={props.index}>
        <section className='post-description'>
          <h3 className='post-title'>{props.post.title}</h3>
        </section>
        <div className='post-source'>{props.post.source}</div>
        <div className='post-category'>{props.post.category}</div>
        {media}
      </li>
    )
}

export default connect()(ContentCommunityFeedItem);
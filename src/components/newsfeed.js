import React from 'react';
import {connect} from 'react-redux';

export function ContentNewsFeedItem (props) {
    return(
      <li className='article' key ={props.index}>
        <div className='img-container'>
          <img className='article-img' src={props.article.urlToImage} alt={props.article.title} />
        </div>
        <section className='article-description'>
          <h3 className='article-title'>{props.article.title}</h3>
          <a target="_blank" rel="noopener noreferrer" href={props.article.url}>View</a>
        </section>
      </li>
    )
}


export default connect()(ContentNewsFeedItem);
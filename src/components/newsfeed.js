import React from 'react';
import {connect} from 'react-redux';

export function ContentNewsFeedItem (props) {
  function normalizeTitle(title){
    let input = title;
    let titleRegex = / - .*[^']/g;
    let normalized = input.replace(titleRegex, '');
    return normalized;
  }

  function normalizeDate(date){
    let output = date.replace('T', ' ').replace('Z', '');
    return output;
  }
    return(
      <li className='article' key ={props.index}>
        <div className='img-container'>
          <img className='article-img' src={props.article.urlToImage} alt={props.article.title} />
        </div>
        <a target="_blank" rel="noopener noreferrer" href={props.article.url}>
          <section className='article-description'>
            <p className='article-title'>{normalizeTitle(props.article.title)}</p>
            <p className='article-source'>Source: {props.article.source.name}</p>
            <p className='article-date'>Published: {normalizeDate(props.article.publishedAt)}</p>
          </section>
        </a>
      </li>
    )
}


export default connect()(ContentNewsFeedItem);
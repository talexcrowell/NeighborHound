import React from 'react';
import {connect} from 'react-redux';

export function ContentNewsFeedItem (props) {
  function normalizeTitle(title){
    let input = title;
    let titleRegex = / - .*[^']/g;
    let normalized = input.replace(titleRegex, '');
    return normalized;
  }

  function normalizeTime(date){
    let output = date.replace('T', '').replace('Z', '');
    return output.slice(10);
  }
  
  function normalizeDate(date){
    let output = date.replace('T', '').replace('Z', '');
    return output.slice(0, 10);
  }
    return(
      <li className='article' key ={props.index}>
        <div className='article-img-container'>
          <img className='article-img' src={props.article.urlToImage} alt={props.article.title} />
        </div>
        <a className='click-area' target="_blank" rel="noopener noreferrer" href={props.article.url}>
          <section className='article-description'>
            <p className='article-title'>{normalizeTitle(props.article.title)}</p>
            <p className='article-detail'>{props.article.source.name}</p>
            <p className='article-detail'>{normalizeTime(props.article.publishedAt)}</p>
            <p className='article-detail'>{normalizeDate(props.article.publishedAt)}</p>
          </section>
        </a>
      </li>
    )
}


export default connect()(ContentNewsFeedItem);
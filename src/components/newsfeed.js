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

  function normalizeSummary(summary){
    let summaryRegex =  /\[.*\]/g;
    let normalized = summary.replace(summaryRegex, '');
    return normalized;
  }

    return(
      <li className='article' key ={props.index}>
        <div className='article-img-container'>
          <img className='article-img' src={props.article.urlToImage} alt={props.article.title} />
          <p className='article-source'>{props.article.source.name}</p>
        </div>

          <a className='click-area' target="_blank" rel="noopener noreferrer" href={props.article.url}>
            <section className='article-description'>
              <p className='article-title'>{normalizeTitle(props.article.title)}</p>
              <p className='article-time'>@: {normalizeTime(props.article.publishedAt)}</p>
              <p className='article-date'>{normalizeDate(props.article.publishedAt)}</p>
            </section>
            <section className='article-content'>
              <p className='article-summary'>{props.article.content ? normalizeSummary(props.article.content) : 'No summary available from '+ props.article.source.name}</p>
              <p className='article-link'> [ Click for Full Article ]</p>
            </section>
          </a>
      </li>
    )
}

function mapStateToProps(state){
  return{
    opened: state.news.opened,
    loading: state.news.loading,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ContentNewsFeedItem);
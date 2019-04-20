import React from 'react';
import {connect} from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {removeArticleFromFeed} from '../actions/news';

export class ContentNewsFeedItem extends React.Component{
  removePost(id){
    this.props.dispatch(removeArticleFromFeed(id));
  }

  render() {
    return(
      <li className='article' key ={this.props.index}>
        <section className='article-header'>
          <div className='article-img-container'>
            <img className='article-img' src={this.props.article.img} alt={this.props.article.title} />
            <p className='article-source'>{this.props.article.source.name}</p>
          </div>
            <section className='article-description'>
              <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.article.url}>
                <p className='article-title'>{this.props.article.title}</p>
              </a>
              <section className='article-details'>
              <p className='article-time'>@: {this.props.article.time}</p>
              <p className='article-date'>{this.props.article.date}</p>
              <div className='article-menu'>
                <CopyToClipboard text={this.props.article.url}>
                  <button className='article-menu-choice-share'>
                    <img className='article-menu-image' src='https://i.imgur.com/f8f7prS.png' alt='Neighborhound' />
                  </button>
                </CopyToClipboard>
                <button className='article-menu-choice-remove' onClick={() => this.removePost(this.props.article.id) } >
                  <img className='article-menu-image' src='https://i.imgur.com/r16tRQz.png' alt='Neighborhound' />
                </button>
              </div>
              </section>
            </section>
            <section className='article-content'>
              <p className='article-summary'>{this.props.article.summary ? this.props.article.summary : 'No summary available from '+ this.props.article.source.name}</p> 
            </section>
        </section>
      </li>
      )
  }
}

function mapStateToProps(state){
  return{
    opened: state.news.opened,
    loading: state.news.loading,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ContentNewsFeedItem);
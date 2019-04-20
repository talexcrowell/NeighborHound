import React from 'react';
import {connect} from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { removePostFromFeed } from '../actions/community';

export class ContentCommunityFeedItem extends React.Component {
    
  render() {
  let media;

    if(this.props.post.type === 'video/mp4' || this.props.post.type === 'video/webm'){
      media = ( <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.post.url}>
        <div className='img-container'>
          <video autoPlay loop muted controls className='post-mp4'>
            <source src={this.props.post.img} type={this.props.post.type} />
          </video>
        </div>
      </a>);
    } 
    else if(this.props.post.type === 'article'){
      media = (<a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.post.url}>
          <div className='post-article-container'>
            <img className='post-article-img' src='https://i.imgur.com/ty6YjaL.png' alt={this.props.post.title} />
          </div>
        </a>);
    }
    else{
      media = (<a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.post.url}>
          <div className='img-container'>
            <img className='post-img' src={this.props.post.img} alt={this.props.post.title} />
          </div>
        </a>);
    }


    return(
      <li className='post' key ={this.props.index}>
        <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.post.url}>
        <section className='post-description'>
          <h3 className='post-title'>{this.props.post.title}</h3>
        </section>
        </a>
        <section className='post-details'>
          <div className='post-source'>{this.props.post.source}</div>
          <div className='post-category'>{this.props.post.category}</div>
          <div className='post-menu'>
            <CopyToClipboard text={this.props.post.img}>
              <div className='post-menu-choice-share'>
                <img className='post-menu-image' src='https://i.imgur.com/f8f7prS.png' alt='Neighborhound' />
              </div>
            </CopyToClipboard>
            <button className='post-menu-choice-remove' onClick={() => this.props.dispatch(removePostFromFeed(this.props.post.id)) }>
              <img className='post-menu-image' src='https://i.imgur.com/r16tRQz.png' alt='Neighborhound' />
            </button>
          </div>
        </section>
        {media}
      </li>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    dispatch,
  };
}
export default connect(mapDispatchToProps)(ContentCommunityFeedItem);
import React from 'react';
import {connect} from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {removeItemFromFeed} from '../actions/main';

export class ContentFeedItem extends React.Component { 

  removeItem(id){
    this.props.dispatch(removeItemFromFeed(id));
  }

  render() {
    if(this.props.item.section === 'community'){
  
      let media;
  
      if(this.props.item.type === 'video/mp4' || this.props.item.type === 'video/webm'){
        media = ( <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
          <div className='img-container'>
            <video autoPlay loop muted controls className='post-mp4'>
              <source src={this.props.item.img} type={this.props.item.type} />
            </video>
          </div>
        </a>);
      } 
      else if(this.props.section === 'article'){
        media = (<a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
            <div className='post-article-container'>
              <img className='post-article-img' src='https://i.imgur.com/ty6YjaL.png' alt={this.props.item.title} />
            </div>
          </a>);
      }
      else{
        media = (<a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
            <div className='img-container'>
              <img className='post-img' src={this.props.item.img} alt={this.props.item.title} />
            </div>
          </a>);
      }
  
  
      return(
        <li className='post' key ={this.props.index}>
          <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
          <section className='post-description'>
            <h3 className='post-title'>{this.props.item.title}</h3>
          </section>
          </a>
          <section className='post-details'>
            <div className='post-source'>{this.props.item.source}</div>
            <div className='post-category'>{this.props.item.category}</div>
            <div className='post-menu'>
              <CopyToClipboard text={this.props.item.img}>
                <button className='post-menu-choice-share'>
                  <img className='post-menu-image-share' src='https://i.imgur.com/f8f7prS.png' alt='Neighborhound' />
                </button>
              </CopyToClipboard>
              <button className='post-menu-choice-remove' onClick={() => this.removeItem(this.props.item.id) } >
                <img className='post-menu-image-remove' src='https://i.imgur.com/r16tRQz.png' alt='Neighborhound' />
              </button>
            </div>
          </section>
          {media}
        </li>
      );
    }

    else if(this.props.item.section === 'news'){
      return(
        <li className='article' key ={this.props.index}>
          <section className='article-header'>
            <div className='article-img-container'>
              <img className='article-img' src={this.props.item.img ? this.props.item.img : 'https://i.imgur.com/ty6YjaL.png'} alt={this.props.item.title} />
              <p className='article-source'>{this.props.item.source.name}</p>
              <p className= 'article-category'>{this.props.item.category}</p>
            </div>
              <section className='article-description'>
                <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
                  <p className='article-title'>{this.props.item.title}</p>
                </a>
                <section className='article-details'>
                <p className='article-time'>{this.props.item.time}</p>
                <p className='article-date'>{this.props.item.date}</p>
                <div className='article-menu'>
                  <CopyToClipboard text={this.props.item.url}>
                    <button className='article-menu-choice-share'>
                      <img className='article-menu-image' src='https://i.imgur.com/f8f7prS.png' alt='Neighborhound' />
                    </button>
                  </CopyToClipboard>
                  <button className='article-menu-choice-remove' onClick={() => this.removeItem(this.props.item.id) } >
                    <img className='article-menu-image' src='https://i.imgur.com/r16tRQz.png' alt='Neighborhound' />
                  </button>
                </div>
                </section>
              </section>
              <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
              <section className='article-content'>
                <p className='article-summary'>{this.props.item.summary ? this.props.item.summary : 'No summary available from '+ this.props.item.source.name}</p> 
              </section>
              </a>
          </section>
        </li>
        )
    }
  }
}

function mapStateToProps(state){
  return{
    state,
  };
}
export default connect(mapStateToProps)(ContentFeedItem);
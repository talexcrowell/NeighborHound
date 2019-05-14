import React from 'react';
import {connect} from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {removeItemFromFeed} from '../actions/main';
import {removeArticleFromFeed} from '../actions/news';
import {removePostFromFeed} from '../actions/community'

export class ContentFeedItem extends React.Component { 

  removeItem(id){
    if(this.props.page === 'main'){
      this.props.dispatch(removeItemFromFeed(id));
    }
    else if (this.props.page === 'news'){
      this.props.dispatch(removeArticleFromFeed(id));
    }
    else if (this.props.page === 'community'){
      this.props.dispatch(removePostFromFeed(id));
    }
  }

  render() {
    let userButtons;
    
    userButtons= (
      <div className='user-buttons'>                
      </div>);

    if(this.props.item.section === 'community'){
  
      let media;
  
      if(this.props.item.type === 'video/mp4' || this.props.item.type === 'video/webm'){
        media = ( <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
          <div className='mp4-container'>
            <video autoPlay loop muted controls className='post-mp4'>
              <source src={this.props.item.img} type={this.props.item.type} />
            </video>
          </div>
        </a>);
      }
      else if(this.props.item.type === 'video/vimeo' && this.props.item.img !== ''){
        let regex = new RegExp(/https:*.*.\?/g);
        let edit = regex.exec(this.props.item.img);
        console.log(edit[0].replace('?', ''));
        media = (<a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
        <div className='vimeo-container'>
        <iframe className='post-vimeo' src={edit}></iframe>
      </div>
          </a>);
      } 
      else if(this.props.item.type === 'article'){
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
          <section className='post-details'>
            <div className='post-source'>{this.props.item.source}</div>
            <div className='post-category'>{this.props.item.category}</div>
            <div className='post-menu'>
              {userButtons}
              <CopyToClipboard text={this.props.item.img}>
                <div className='post-menu-choice-share'>
                  <img className='post-menu-image' src='https://i.imgur.com/f8f7prS.png' alt='Neighborhound' />
                </div>
              </CopyToClipboard>
              <div className='post-menu-choice-remove' onClick={() => this.removeItem(this.props.item.id) } >
                <img className='post-menu-image' src='https://i.imgur.com/r16tRQz.png' alt='Neighborhound' />
              </div>
            </div>
          </section>
          <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
          <section className='post-description'>
            <h3 className='post-title'>{this.props.item.title}</h3>
          </section>
          </a>
          {media}
        </li>
      );
    }

    else if(this.props.item.section === 'news'){
      return(
        <li className='article' key ={'news-'+this.props.index}>
            <div className='article-img-container'>
              <p className={'article-category '+this.props.item.category.toLowerCase()}>{this.props.item.category}</p>
              <img className='article-img' src={this.props.item.img ? this.props.item.img : 'https://i.imgur.com/ty6YjaL.png'} alt={this.props.item.title} />
              <p className='article-source'>{this.props.item.source.name}</p>
              
            </div>
              <section className='article-description'>
                <section className='article-details'>
                  <p className='article-time'>{this.props.item.time}</p>
                  <p className='article-date'>{this.props.item.date}</p>
                  <div className='article-menu'>
                    {userButtons}
                    <CopyToClipboard text={this.props.item.url}>
                      <div className='article-menu-choice-share'>
                        <img className='article-menu-image' src='https://i.imgur.com/f8f7prS.png' alt='Neighborhound' />
                      </div>
                    </CopyToClipboard>
                    <div className='article-menu-choice-remove' onClick={() => this.removeItem(this.props.item.id) } >
                      <img className='article-menu-image' src='https://i.imgur.com/r16tRQz.png' alt='Neighborhound' />
                    </div>
                  </div>
                </section>
                <a className='click-area' target="_blank" rel="noopener noreferrer" href={this.props.item.url}>
                  <p className='article-title'>{this.props.item.title}</p>
                  <section className='article-content'>
                  <p className='article-summary'>{this.props.item.summary ? this.props.item.summary : 'No summary available'} </p> 
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
import React from 'react';
import {connect} from 'react-redux';

export function ContentCommunityFeedItem (props) {
    // let imgRegex= /\.mp4*/g;
    // if(imgRegex(props.post.img)[0] !== null){
    //   img= (<video className='post-img' controls> 
    //           <source src={props.post.img} type='video/mp4' /> 
    //         </video>);
    // }
    let img= (<img className='post-img' src={props.post.img} alt={props.post.title} />);
    return(
      <li className='post' key ={props.index}>
        <section className='post-description'>
          <h3 className='post-title'>{props.post.title}</h3>
        </section>
        <div className='post-source'>{props.post.source}</div>
        <div className='post-interest'></div>
        <a target="_blank" rel="noopener noreferrer" href={props.post.url}>
          <div className='img-container'>
            {img}
          </div>
        </a>
      </li>
    )
}

export default connect()(ContentCommunityFeedItem);
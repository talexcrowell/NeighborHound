import React from 'react';
import {connect} from 'react-redux';
import { fetchNews, fetchAnimeNews, fetchCyberSecurityNews } from '../actions/news';
import './main.css';

export class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNews());
    this.props.dispatch(fetchAnimeNews());
    this.props.dispatch(fetchCyberSecurityNews());
  }

  render() {
    let posts = this.props.articles.map((article, index) => (
      <li className='article' key ={index}>
        <img className='article-img' src={article.thumbnail.url} alt={article.title} />
        <section className='article-description'>
          <h3 className='article-title'>{article.title}</h3>
          <p className='article-summary'>{article.summary}</p>
          <a target="_blank" rel="noopener noreferrer" href={article.embed}>View</a>
        </section>
      </li>
    ));

    let newsFeed;
    if(this.props.loading === true){
      newsFeed = (<div className='loading'>Loading Feed...</div>);
    } else{
      newsFeed = (<ul className='newsFeed'>{posts}</ul>);
    }

    return(
      <main role='main' className='main-page'>
        {newsFeed}
      </main>  
    )
  }
}

function mapStateToProps(state){
  return{
    articles: state.news.articles,
    loading: state.news.loading
  }
}

export default connect(mapStateToProps)(Main);
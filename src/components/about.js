import React from 'react';
import {connect} from 'react-redux';
import{Link} from 'react-router-dom';

export function About(props) {


    return(
      <main role='main' className='main-page'>
        <div className='dashboard-page-content'>
         <section className='about-menu'>
            <Link to='/'><div className='about-menu-choice'>Home</div></Link>
            <Link to='/fetch'><div className='about-menu-choice'>Fetch</div></Link>
            <Link to='/rex'><div className='about-menu-choice'>Rex</div></Link>
          </section>
          <section className='about-content'>
            <h2>About NeighborHound</h2>
            <p className='csl'>After trailing around to different websites, I got annoyed having to keep open a million tabs with what content I liked from each site visted. Then it occured to me: "Why not collect content from the internet and put it all into one navigable space?"</p>
            <p className='csl'>Fetch came into existence to solely focus on collecting news and community cotent from several popular websites. Now it's easy to stay up to date with news and internet trends.</p>
            <p className='csl'>Soon after the beginning of Fetch, Rex is the same idea except with sourcing information for different media. Information for media like movies, tv, games, etc. will be all located into one convenient place. You will also be able track of media and get recommendations on media to help explore the infinite amount of entertainment that is out there.</p>
            <p className='csl'>Although with two already ambitious projects, NeighborHound is going to continue building with what information can be sourced. With more features to be added within Fetch and Rex, other projects are on the horizon and are currently being considered to be added to NeighborHound.</p>
            <p className='csl'>See what NeighborHound can find for you</p>
          </section>
          <section className='about-content'>
            <h2>About the Creator</h2>
            <img className="creator-img" src="https://i.imgur.com/VXbvo7d.jpg" alt="Alex Crowell"></img>
            <h3>Alex Crowell</h3>
            <a classname='click-area' href='mailto:talexcrowell@gmail.com'><i className='email'/></a>
            <a classname='click-area' href='https://www.linkedin.com/in/t-alexander-crowell-01885b162' target='_blank' rel='noopener noreferrer'><i className='linkedin'/></a>
            <p className='csl'>I am a full stack software engineer exploring and developing my skills for whatever the future brings.</p>
          </section>
        </div>
      </main> 
    )
}

export default connect()(About);
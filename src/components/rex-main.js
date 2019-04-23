import React from 'react';
import {connect} from 'react-redux';

export function RexMain (props){
  return(
    <main className='rex-main'>
      <div className='main-menu'>
        <img className='loading-img' src='https://i.imgur.com/3xw03XE.png' alt='Welcome to Rex' ></img>
        <h2>Coming Soon...</h2>
        <div className ='coming-soon-text'>
          <p className='csl'>There are SO many things to watch, to play, or to listen to its hard to discover something new. Sometimes its even harder to keep track of what you're currently trying to stay up to date with!</p>
          <p className='csl'> REX is where you go to track your media history, make your media wishlist, and discover more all together! With a massive database full of entertainment to choose from, come ask for a recommendation from REX!</p>
          <p className='csl'>Choose from movies, music, TV, anime, books, etc. The possibilities are endless!</p>
        </div>
      </div>
    </main>

  )
}

export default connect()(RexMain);
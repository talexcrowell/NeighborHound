import React from 'react';
import {connect} from 'react-redux';

export class MediaInfo extends React.Component {
  render(){
    return (
      <main>
        <h3>This is the media information page!!!!</h3>
      </main>

    );
  }
}

function mapStateToProps(){
  return{
    
  }
}

export default connect(mapStateToProps)(MediaInfo);
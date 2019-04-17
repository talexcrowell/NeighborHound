import React from 'react';
import {connect} from 'react-redux';

export function Filter(props) {
  let choices = props.sources.map(source => {
    return (<input type= 'checkbox' name={source.id} value={source.id}>{source.name}</input>)
  });

    return(
      <div className='filter'>
        <section className='filter-container'>
          <label>Filter Sources</label>
          {choices}
        </section>
      </div>
    )
}

export default connect()(Filter);
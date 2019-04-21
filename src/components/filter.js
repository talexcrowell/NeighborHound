import React from 'react';
import {connect} from 'react-redux';

export function Filter(props) {
  let choices = props.items.map(item => {
    return (<input type= 'checkbox' name={item.category} value={item.category}>{item.caegory}</input>)
  });

    return(
      <div className='filter'>
        <section className='filter-container'>
          <label>Filter Categories</label>
          {choices}
        </section>
      </div>
    )
}

export default connect()(Filter);
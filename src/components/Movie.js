import React, { Component } from 'react';

export default class Movie extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div className="movie">
        {this.props.match.params.id}
      </div>
    )
  }
}

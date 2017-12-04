import React, { Component } from 'react';
import {API} from '../config';

export default class Movies extends Component {
  constructor(props){
    super(props);

    this.state = {
      apiKey : API,
      popular: []
    }

    this.getPopular = this.getPopular.bind(this);
  }
  componentDidMount() {
    this.getPopular();
  }
  getPopular(){
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=48ad32a11a651fe635e36910709288fe")
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      this.setState({popular: jsonResult.results});
      console.log(this.state.popular);
    })
  }
  // const popularMovies = 
  render() {
    var popularMovies = this.state.popular.map((movie, index) =>
    // let clear = index % 6;
      <div>
      <div className={index % 6 == 0 ? "clearfix" : ""}></div>
      <div className="col-md-2" key={index}>
        <img className="thumbnail img-responsive" src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt=""/>
        <h2>{movie.title}</h2>
        <p></p>
        <p><a className="btn btn-success" role="button">View details &raquo;</a></p>
      </div>
      </div>
    );
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Popular Movies
        </div>
        <div className="panel-body">
          <div className="row">
            {popularMovies}
          </div>
        </div>
      </div>
    )
  }
}
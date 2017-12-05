import React, { Component } from 'react';
import {API} from '../config';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
  constructor(props){
    super(props);

    this.state = {
      apiKey : API,
      popular: [],
      searchRes: []
    }


    // functions
    this.getPopular = this.getPopular.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }
  componentDidMount() {
    this.getPopular();
  }
  getPopular(){
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.state.apiKey}`)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      this.setState({popular: jsonResult.results});
      // console.log(this.state.popular);
    })
  }
  searchMovie(event){
    event.preventDefault();

    let name = this.name.value;
    fetch(`https://api.themoviedb.org/3/search/movie?query='${name}'&sort_by=popularity.desc&api_key=${this.state.apiKey}`)
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({searchRes: jsonResult.results});
    })
  }
  showSearchMovie(){
    if(this.state.searchRes.length > 0){
      var searchMovies = this.state.searchRes.map((movie, index) =>
      // let clear = index % 6;
        <div key={index}>
        <div className={index % 6 === 0 ? "clearfix" : ""}></div>
        <div className="col-md-2" key={index}>
          <img className="thumbnail img-responsive" src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt=""/>
          <h2>{movie.title}</h2>
          <p></p>
          <p><Link to={`/movie/${movie.id}`} className="btn btn-success">View details &raquo;</Link></p>
        </div>
        </div>
      );
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            Searches
          </div>
          <div className="panel-body">
            <div className="row">
              {searchMovies}
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    var popularMovies = this.state.popular.map((movie, index) =>
      <div key={index}>
        <div className={index % 6 === 0 ? "clearfix" : ""}></div>
        <div className="col-md-2" key={index}>
          <img className="thumbnail img-responsive" src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt=""/>
          <h2>{movie.title}</h2>
          <p></p>
          <p><Link to={`/movie/${movie.id}`} className="btn btn-success">View details &raquo;</Link></p>
        </div>
      </div>
    );
    return (
      <div className="jumbotron">
        <div className="container" style={{marginBottom:'40px'}}>
          <h1>Find a movie</h1>
          <p>Search for a movie using below form</p>
          <form onSubmit={this.searchMovie}>
            <input 
            type="text" 
            name="moviename" 
            className="form-control"
            ref={(input) => {this.name = input;}}
            placeholder="search your movie"/>
            <br/>
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
        {this.showSearchMovie()}
        <div className="panel panel-success">
          <div className="panel-heading">
            Popular Movies
          </div>
          <div className="panel-body">
            <div className="row">
              {popularMovies}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

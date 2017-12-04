import React, { Component } from 'react';
import {API} from '../config';

export default class Movie extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: this.props.match.params.id,
      api: API,
      movie: []
    }

    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount(){
    this.getMovie();
  }
  getMovie(){
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${this.state.api}`)
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({movie: jsonResult});
      // console.log(this.state.movie);
    })
  }
  render() {
    return (
      <div className="movie">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.movie.title}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4">
                <img className="thumbnail" src={"https://image.tmdb.org/t/p/w500" + this.state.movie.poster_path} alt=""/>
              </div>
              <div style={{marginLeft:250}} className="col-md-4 col-md-offset-1 text-center">
                <ul className="list-group">
                  {/* <li class="list-group-item">Genres: <span *ngFor="let genre of movie.genres">{{genre.name}} </span></li> */}
                  <li className="list-group-item">
                      Release date: { this.state.movie.release_date }
                  </li>
                </ul>
                <a href="{this.state.movie.homepage}" target="_blank" className="btn btn-success">Visit movie website</a>
              </div>
            </div>    
          </div>
        </div>
      </div>
    )
  }
}

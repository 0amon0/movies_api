import React, { Component } from 'react'
import axios from 'axios';

export default class Movie extends Component {
    state = {
        movieDetails: []
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:3003/movie');
        console.log(res.data)
        const movies = res.data;
        const targetMovieID = this.props.match.params.id;
        const targetMovie = movies.filter(movie => {
            return movie.imdbID === targetMovieID
        })
        this.setState({movieDetails:targetMovie})
        // console.log(this.state.movieDetails[0].Title)
    }
  render() {
    return (
      <div>
        {this.state.movieDetails.length ? (
            <React.Fragment>
                <div>{this.state.movieDetails[0].Title}</div>
                <img style={{width:"200px",height:"350px",objectFit:"cover"}} src={this.state.movieDetails[0].Poster} alt={this.state.movieDetails[0].Title}/>
                <div>{this.state.movieDetails[0].Year}</div>
            </React.Fragment>
        ) : null}
      </div>
    )
  }
}

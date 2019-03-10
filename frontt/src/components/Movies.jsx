import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Register extends Component {
  state = {
      movies: []
  }
  async componentDidMount() {
    const res = await axios.get('http://localhost:3003/movie');
    this.setState({movies:res.data})
  }
  
  render() {
      const movies = this.state.movies.map(movie => {
          return (
              
            <li style={{margin:"20px", display:"flex", width:"200px"}}key={movie.imdbID}>
                
                <Link style={{textDecoration:"none"}} to={movie.imdbID}>
                    <img style={{width:"200px",height:"350px",objectFit:"cover", float: "left"}} src={movie.Poster} alt={movie.Title}/>
                    <h3 style={{color:"green"}} >{movie.Title}</h3>
                </Link>   
                             
            </li>
          )
      })
    return (
      <div className='movies'>
      
       
        <ul style={{padding:"5px", display: "flex", flexWrap:"wrap"}}>
            {movies}
        </ul>
      </div>
    )
  }
}
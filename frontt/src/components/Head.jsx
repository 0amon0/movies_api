import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Head extends Component {
    
  handleSignup= e => {

  }

  
  render() {
    return (
      <div>
      
        <React.Fragment>          
            <header style={{width:"100%", height: "50px", background: "green", display:"flex", justifyContent:"space-between", alignItems:"center",}}>         
            <Link to='/register' style={{ textDecoration:'none',cursor: "pointer",outline:"none",padding: "7px",fontWeight:"bold",marginLeft:"40px", border: "none" , color: "green", borderRadius:"15px", background:"yellow"}}>Sign Up</Link>
            <Link to='/' style={{ textDecoration:'none', marginLeft:"40px",color:"yellow"}}><h1>Movies</h1> </Link>  
            <Link to='/signin' style={{ textDecoration:'none',cursor: "pointer",outline:"none",padding: "7px",fontWeight:"bold",marginRight:"40px", border: "none" , color: "green", borderRadius:"15px", background:"yellow"}}>Sign In</Link>
            </header>
        </React.Fragment>
      </div>
    )
  }
}

import React, {Component} from 'react';

class SignIn extends Component {
    state = { 
        email: "" ,
        password: ""
     }
    
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    

    handleSubmit = e => {
        e.preventDefault();
        fetch("http://localhost:3003/user/signin", { 
            method : "POST",
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ 
                email: this.state.email,
                password: this.state.password
            })

        })
        .then(result => {
            return console.log(result.json());
        })
        
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            onChange = {this.handleInput}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            onChange = {this.handleInput}
                        />
                    </div>
                    <div>
                        <button className="submit" onClick={this.handleSubmit}>
                            Sign In
                        </button>
                    </div>
                    
                </form>
            </React.Fragment>
         );
    }
}
 
export default SignIn;
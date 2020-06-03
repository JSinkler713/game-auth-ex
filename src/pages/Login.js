import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    // TODO: complete this function
  }

  
  render() {
    return (
      <div>
        <h4>Login</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input 
              onChange={this.handleChange} 
              type="email" 
              id="email" 
              name="email" 
              value={this.state.email} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              onChange={this.handleChange} 
              type="password" 
              id="password" 
              name="password" 
              value={this.state.password} />
          
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

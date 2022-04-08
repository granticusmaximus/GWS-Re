import React, { Component } from 'react'

class AuthError extends Component {
  render() {
    return (
      <div className='page-container'>
        <br />
        <br />
        <hr />
        <center>
          <h1>Ooops! Sorry,<br /> Page Not found </h1>
          <a href='/' className="btn btn-danger">Back to Home</a>
        </center>
      </div>
    );
  }
}

export default AuthError;
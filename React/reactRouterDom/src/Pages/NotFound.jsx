import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
<div className="container">
    <h1>404 - Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="btn btn-primary btn-sm">Go to Home</Link>
    <a href="/" className="btn btn-info btn-sm ms-2">Back To Home</a>
</div>
    )
}

export default NotFound
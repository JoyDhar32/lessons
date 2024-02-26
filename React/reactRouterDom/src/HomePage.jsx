import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>    
    <div className="container ">
        <h1>Home Page</h1>
        <p>
            Welcome to the home page! This is a simple example of a React component.
        </p>
        <Link to="/profiles" className="btn btn-primary btn-sm">Go to Profiles</Link>

    </div>
    </>

  )
}

export default HomePage
import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
const params=useParams();
  return (
    <div className="container">
        <h1>Profile- {params.profileId}</h1>
        <p>
            Welcome to the profile page! This is a simple example of a React component.
        </p>
    </div>
  )
}

export default Profile
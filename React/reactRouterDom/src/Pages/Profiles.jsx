import React from 'react'
import { Link } from 'react-router-dom'

const Profiles = () => {
    const users=[1,2,3,4,5]
  return (
    <div className="container"> 
        <h1>Profiles</h1>
        <ul>
            {users.map((user)=>(
              <li>  <Link key={user} to={`/profiles/${user}`}>User: {user}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Profiles
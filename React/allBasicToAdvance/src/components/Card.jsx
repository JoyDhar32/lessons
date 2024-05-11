/*

 <Card name="Joy" status="Student" />
 <Card />

*/


import React from 'react'

const Card = ({name="JD",status="NA"}) => {
  return (
    <>
 
 <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 m-8">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iste voluptatibus laudantium obcaecati a dolorem?
      </p>
    </blockquote>
    <figcaption>
      <div className="text-yellow-900">
        {name}
      </div>
      <div className="text-yellow-900">
       {status}
      </div>
    </figcaption>
  </div>
</figure>

    </>
  )
}

export default Card
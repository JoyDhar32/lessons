import React from 'react'

const page = ({params}:{params:{slug:string[]}}) => {
  return (
    <div>This is catch all segment{params.slug[0]} and {params.slug[1]}</div>
  )
}

export default page
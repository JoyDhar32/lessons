import React from 'react'

export default function page({params}:{params: {blogsID: string}}) {
  return (
    <div>Blog ID is={params.blogsID}</div>
  )
}

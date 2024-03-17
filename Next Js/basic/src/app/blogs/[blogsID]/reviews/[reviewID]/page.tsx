import React from 'react'

export default function page({params}:{params: {blogsID: string, reviewID: string}}) {
  return (
    <div>
        <h1>Blog ID: {params.blogsID} And Review ID: {params.reviewID}</h1>
    </div>
  )
}

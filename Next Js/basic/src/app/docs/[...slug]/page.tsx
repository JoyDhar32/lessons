import React from 'react'

export default function page({params}:{params: {slug: string}}) {

    if(params.slug.length === 1){
        return (
            <div>Blog ID is={params.slug}</div>
        )
    }else if(params.slug.length === 2){
        return (
            <div>
                <h1>Blog ID: {params.slug[0]} And Review ID: {params.slug[1]}</h1>
            </div>
        )}
    else{

  return (
  <>
  <h1>This is cache all page</h1>
  </>
  )
    }}

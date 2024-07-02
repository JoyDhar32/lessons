import React from 'react'

const page = ({params}:{params:{productId:number}}) => {
  return (
    <>
    <h1>Product Id: {params.productId}</h1>
    </>
  )
}

export default page
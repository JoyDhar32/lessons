import React, { useEffect } from 'react'
import { useState } from 'react'

const Product = () => {
    const [product, getProduct] = useState({})
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(data=>getProduct(data))
    },[]);
  return (
    <>
<h1> Products</h1>
{JSON.stringify(product)}

    </>
  )
}

export default Product
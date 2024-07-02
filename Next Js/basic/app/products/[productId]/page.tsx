import React from 'react'
import { notFound } from "next/navigation"
const page = ({ params }: { params: { productId: string } } )  => {
    {
        if (parseInt(params.productId) > 5) {
            return notFound()
        }
    }
  
    return (
        <>
            <h1>Product Id: {params.productId}</h1>
            { }

        </>
    )
}

export default page
import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const params = useParams();
    return (
        <>
            <h2>Your Product is {params.productId}</h2>
        </>
    )
}

export default ProductDetails

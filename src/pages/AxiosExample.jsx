import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosExample = () => {
    let [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        // .then(response=>setProducts(response.data))
        .then(response=>setProducts(response.data.products))
        // .then(data=>setProducts(data))
    },[])


  return (
   <>
   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-5">
    {
        products.map((product)=>{
        return <div className="col">
        <div className="card">
        <img src={product.images} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        </div>
        <p className="card-text">Price: {product.price}</p>
        <p className="card-text">Rating: {product.rating}</p>
        <p className="card-text">In stock: {product.stock}</p>
        </div>
    </div>
    })
}
  </div>
   </>
  )
}

export default AxiosExample
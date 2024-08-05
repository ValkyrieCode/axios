import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    let [posts,setpost] = useState([])


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(Response => {return Response.json()})
        .then(result => setpost(result))
    },[])


  return (
    <>
        {
            posts.map(posts =>{
                return <li>{posts.title}</li>
            })
        }
    </>
  )
}

export default DataFetch
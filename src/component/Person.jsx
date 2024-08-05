import React from 'react'

const Person = (props) => {
    // console.log(props) (structuring object)
    //destructuring object
    let{name,Address,Phone} = props
  return (
    <>
    {/* <div className='p-5 border m-5'>
        <h1>Name: {props.name}</h1>
        <h2>Address: {props.address}</h2>
        <h2>Phone: {props.phone}</h2>
    </div> */}

<div className='p-5 border m-5'>
        <h1>Name:{name}</h1>
        <h2>Address:{Address}</h2>
        <h2>Phone:{Phone}</h2>
    </div> 
    </>
  )
}

export default Person
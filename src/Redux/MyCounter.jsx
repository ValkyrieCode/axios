import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyCounter = () => {
    let counterStore = useSelector(store => store)
    let counter = counterStore.count

    // let counter = useSelector(store=>store.count)
    // let {count} = useSelector(store=>store)

    const dispatch = useDispatch()
    const increase = () => {
        dispatch({type:"INCREASE"})
    }
  return (
    <>
    <h1 className='h-96 flex justify-center items-center flex-col'>
        <h1 className='text-5xl'>
    Counter: {counter}
        </h1>
            
    </h1>
    <br/>
    <button onClick={increase}>Increase</button>
    <button onClick={()=>
        dispatch({type:"DECREASE"})
    }>
        Decrease
    </button>
    </>

  )
}

export default MyCounter
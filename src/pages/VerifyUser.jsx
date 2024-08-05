import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verifyEmail } from '../api/userAPI'

const VerifyUser = () => {
  
    let params = useParams()
    let token = params?.token

    let [error, setError] = useState('')
    let[sucess, setSucess] = useState(false)

    useEffect(() =>{
        verifyEmail(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else
            setSucess(true)
        })
    },[])

    const showError = () =>{
        if(error){
            return <div className='bg-red-700 text-3xl text-center'>{error}</div>
        }
    }
    const showSucess = () =>{
        if(sucess){
            return <div className='bg-green-500 text-3xl text-center'>User Verified Sucessfully</div> 
        }
    }

    return (
<>
        {showError()}
        {showSucess()}

</>

  )
}

export default VerifyUser
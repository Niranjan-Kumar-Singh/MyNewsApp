import React from 'react'
import BrokenCircle from '../BrokenCircle.gif'

const Spinner = () =>{
    return (
      <div className='text-center'>
        <img
        className='my-3'
         src={BrokenCircle} alt="Loading" />
      </div>
    )
}

export default Spinner
import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='bg-blue-500 hover:bg-blue-400 rounded-md text-white round-md px-4 py-2  '>{text} </button>
    </div>
  ) 
}

export default Button
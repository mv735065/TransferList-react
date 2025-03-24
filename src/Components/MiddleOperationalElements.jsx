import React from 'react'

const MiddleOperationalElements = ({handleClick}) => {
  return (
    <div className='border flex-1 flex flex-col justify-center gap-2 items-center'>
       <button className='border py-0.5 px-4 w-fit' onClick={handleClick}>&gt; </button>
       <button className='border py-0.5 px-4 w-fit'>&gt;&gt; </button>
       <button className='border py-0.5 px-4 w-fit'>&lt; </button>
       <button className='border py-0.5 px-4 w-fit'>&lt;&lt; </button>

    </div>
  )
}

export default MiddleOperationalElements
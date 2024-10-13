import React from 'react'

const MinorTitle = (props) => {
  return (
    <div>
       <div className='text-blue-800 text-3xl text-center'>{props.unboldData} <span className='font-semibold'>{props.boldData}</span></div>
       <div className='h-[2px] bg-blue-400 w-1/6 mx-auto'></div>
    </div>
  )
}

export default MinorTitle

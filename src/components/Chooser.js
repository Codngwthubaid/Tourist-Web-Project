import React from 'react'

const Chooser = (props) => {
    return (
        <div>
            <div className='p-2 border font-semibold text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer'>{props.Name}</div>
        </div>
    )
}

export default Chooser

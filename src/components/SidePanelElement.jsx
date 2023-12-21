import React from 'react'

const SidePanelElement = (props) => {
  return (
    <div className='rounded-xl bg-[#748af0] text-white w-1/4 h-1/4'>
        <p>{props.Category}</p>
        <p>{props.Amount}</p>
        <p>{props.Additional}</p>
    </div>
  )
}

export default SidePanelElement
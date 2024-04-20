import React from 'react'

const Card = (props:any) => {
  return (
    <div className=' flex flex-col items-center '>
        <div className=' bg-[#D9D9D9] w-[300px] h-[300px] p-5 border-t-black border-l-black border-2'>
            <h3 className=' text-[32px] font-d-din-bold uppercase'>{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Card
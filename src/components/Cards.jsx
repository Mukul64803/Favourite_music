import React from 'react'

function Cards({values,index,handleclick}) {
  const {name,image,artist,added}=values;
  return (
    <div className='p-4 w-52 h-28 bg-zinc-200 rounded-md flex gap-2 relative m-10'>
      <div className='w-16 h-16 bg-red-500 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className=''>
        <h1 className='font-semibold'>{name}</h1>
        <h5 className='text-xs'>{artist}</h5>
      </div>
      <div className=''>
        <button onClick={()=>handleclick(index)} className={`${added ? "bg-green-500": "bg-orange-500"} rounded-full p-2 absolute bottom-0 left-1/2 -translate-x-[50%]  translate-y-[50%] whitespace-nowrap text-xs text-white `}>{added ? "Added":"Add to Favourites"}</button>
      </div>
    </div>
  )
}

export default Cards
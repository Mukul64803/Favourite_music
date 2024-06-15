import React from 'react'

function navbar({value}) {
  return (
    <div className='w-full p-5 px-10 flex justify-between items-center'>
      <h2 className='text-lg font-semibold'>Orange</h2>
      <div className='flex justify-between items-center bg-orange-500 rounded-full p-2 px-4 gap-2'>
      <h5>Favourites</h5>
      <h5 className='bg-white px-2 rounded-full'>{value.filter(items=>items.added===true).length}</h5>
      </div>
    </div>
  )
}

export default navbar
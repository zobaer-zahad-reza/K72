import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex justify-center gap-4 text-white'>
      <Link to={'/projects'} className='text-[5vw] border-2 border-white rounded-full px-14 pt-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>Projects</Link>
      <Link to={'/agency'} className='text-[5vw] border-2 border-white rounded-full px-14 pt-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]'>Agence</Link>
    </div>
  )
}

export default HomeBottomText

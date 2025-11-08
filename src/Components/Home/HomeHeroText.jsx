import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5 text-center'>
            <div className='text-[9vw] uppercase leading-[9vw]'>L'étincelle</div>
            <div className='text-[9vw] uppercase leading-[9vw] flex justify-center align-middle'>qui <div className='h-[7vw] w-[14vw] rounded-full overflow-hidden'><Video /></div> génère</div>
            <div className='text-[9vw] uppercase leading-[9vw]'>la créativité</div>
        </div>
    )
}

export default HomeHeroText

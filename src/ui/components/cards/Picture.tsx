import React, { type ReactElement } from 'react'
import Images from '@assets/Images'
import { useScreenSize } from '@utils/UseScreenSize'

const Picture = (): ReactElement => {
    const { screenWidth } = useScreenSize()
    return (
        <div className={`relative ${screenWidth > 850 ? 'w-600px h-460px' : 'w-350px h-200px'}`}>
            <img src={Images.Lilian} alt={'Lilian'} className={`object-cover ${screenWidth > 850 ? 'w-600px h-460px' : 'w-350px h-200px'} border-radius-35px z-index-2 absolute top-0 left-0`}/>
            <div className={`absolute top-0 left-0 ${screenWidth > 850 ? 'w-600px h-460px' : 'w-350px h-200px'} border-radius-35px bg-surface rotate z-index-1`}/>
        </div>
    )
}

export default Picture

import React, { type ReactElement } from 'react'
import Images from '@assets/Images'

const Picture = (): ReactElement => {
    return (
        <div className={'relative w-600px h-460px '}>
            <img src={Images.Lilian} alt={'Lilian'} className={'object-cover w-600px h-460px border-radius-35px z-index-2 absolute top-0 left-0'}/>
            <div className={'absolute top-0 left-0 w-600px h-460px border-radius-35px bg-surface rotate z-index-1'}/>
        </div>
    )
}

export default Picture

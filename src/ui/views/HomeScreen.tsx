import React, { type ReactElement } from 'react'
import Image from '@components/common/Image'
import Images from '@assets/Images'
import HomeScreenIntroductionTextBloc from '@blocs/homeScreen/HomeScreenIntroductionTextBloc'
import HomeScreenIconsBloc from '@blocs/homeScreen/HomeScreenIconsBloc'
import HomeScreenBackgroundDecorationBloc from '@blocs/homeScreen/HomeScreenBackgroundDecorationBloc'

const HomeScreen = (): ReactElement => {
    return (
        <div className={'relative d-flex h-100 align-center justify-center'}>
            <div className={'index-1 relative transform-64px-top d-flex align-center'}>
                <Image
                    source={Images.Lilian}
                    round
                />
                <div className={'ml-50'}>
                    <HomeScreenIntroductionTextBloc/>
                    <HomeScreenIconsBloc/>
                </div>
            </div>
            <HomeScreenBackgroundDecorationBloc/>
        </div>
    )
}

export default HomeScreen

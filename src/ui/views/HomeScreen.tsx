import React, { type FC, type ReactElement } from 'react'
import Image from '@components/common/Image'
import Images from '@assets/Images'
import HomeScreenIntroductionTextBloc from '@blocs/homeScreen/HomeScreenIntroductionTextBloc'
import HomeScreenIconsBloc from '@blocs/homeScreen/HomeScreenIconsBloc'
import HomeScreenBackgroundDecorationBloc from '@blocs/homeScreen/HomeScreenBackgroundDecorationBloc'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const HomeScreen: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            className={'screen full-screen-height'}
            id={id}
        >
            <div
                className={'index-1 relative transform-64px-top d-flex align-center'}
            >
                <Image
                    source={Images.Lilian}
                    round
                />
                <div
                    className={'ml-50'}
                >
                    <HomeScreenIntroductionTextBloc/>
                    <HomeScreenIconsBloc/>
                </div>
            </div>
            <HomeScreenBackgroundDecorationBloc/>
        </div>
    )
}

export default HomeScreen

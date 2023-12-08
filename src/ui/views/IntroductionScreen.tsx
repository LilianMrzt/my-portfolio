import React, { type FC, type ReactElement } from 'react'
import Image from '@components/common/Image'
import Images from '@assets/Images'
import HomeScreenIntroductionTextBloc from '@blocs/homeScreen/HomeScreenIntroductionTextBloc'
import HomeScreenIconsBloc from '@blocs/homeScreen/HomeScreenIconsBloc'
import { type ScreenProps } from '@interfaces/screens/ScreenProps'

const IntroductionScreen: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            id={id}
        >
            <div
                className={'screen'}
            >
                <div
                    className={'index-1 relative transform-64px-top d-flex align-center'}
                >
                    <Image
                        source={Images.Lilian}
                        round
                        backgroundColor={'primary'}
                    />
                    <div
                        className={'ml-50'}
                    >
                        <HomeScreenIntroductionTextBloc/>
                        <HomeScreenIconsBloc/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionScreen

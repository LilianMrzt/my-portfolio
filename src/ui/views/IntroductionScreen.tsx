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
                    className={'index-1 relative transform-64px-top align-center justify-center d-flex flex-column'}
                >
                    <Image
                        source={Images.Lilian}
                        round
                        backgroundColor={'primary'}
                    />
                    <HomeScreenIntroductionTextBloc/>
                    <HomeScreenIconsBloc/>
                </div>
            </div>
        </div>
    )
}

export default IntroductionScreen

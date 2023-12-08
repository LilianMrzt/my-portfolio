import React, { type FC, type ReactElement } from 'react'
import Image from '@components/common/Image'
import Images from '@assets/Images'
import IntroductionScreenIntroductionTextBloc from '@blocs/introductionScreen/IntroductionScreenIntroductionTextBloc'
import IntroductionScreenIconsBloc from '@blocs/introductionScreen/IntroductionScreenIconsBloc'
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
                    className={'index-1 relative transform-80px-top align-center justify-center d-flex flex-column'}
                >
                    <Image
                        source={Images.Lilian}
                        round
                        backgroundColor={'primary'}
                    />
                    <IntroductionScreenIntroductionTextBloc/>
                    <IntroductionScreenIconsBloc/>
                </div>
            </div>
        </div>
    )
}

export default IntroductionScreen
